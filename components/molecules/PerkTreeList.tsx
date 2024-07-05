import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor  } from 'fabricjs-react';
import { Perk, PerkTree } from '../../models/perk';
import { ExtendedCircle, createCircle } from '../../utils/circle';
import { ExtendedLine, createPerkLine } from '../../utils/line';
import { ExtendedText, createText } from '../../utils/text';

type PropType = {
  perks: PerkTree['perks'];
  canvasSize: string;
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
};

const PerkTreeList: React.FC<PropType> = (props) => {
  const { perks } = props;
  const { editor, onReady } = useFabricJSEditor();
  const [count, setCount] = useState(0);

  // Create an object to store the fabric circles representing the perks
  const perkCircles: { [key: string]: ExtendedCircle } = {};

  // Get a circle by its ID
  // We can assume the id will contain 'CircleTop' as we will never directly interact with 'CircleBottom' (it is cosmetic only)
  function getCircleById(id: string): ExtendedCircle | undefined {
    return editor?.canvas.getObjects().find((obj: any) => obj.id === id + 'CircleTop') as ExtendedCircle | undefined;
  }
  
  // Get a perk by its ID
  function getPerkById(id: string): Perk | undefined {
    return perks.find((p) => p.id === id);
  }

  // Enhance the circle by increasing its radius and changing its color
  function enhanceCircle(circleTop: ExtendedCircle) {
    circleTop.set({ radius: 9, fill: '#fffac6', shadow: 'yellow 0px 0px 10px' });
      circleTop.circleBottom?.set({ radius: 9, fill: 'red', shadow: 'red 0px 0px 15px' });
  }
  
  // Reset the circle to its original state
  function resetCircle(circleTop: ExtendedCircle) {
    circleTop.set({ radius: 7, fill: '#bcebfd', shadow: '#bcebfd 0px 0px 10px' });
    circleTop.circleBottom?.set({ radius: 7, fill: 'purple', shadow: 'purple 0px 0px 15px' });
  }

  // Set the circle as clicked and recursively set its prerequisites as clicked
  function setCircleClicked(circleTop: ExtendedCircle, perk: Perk) {
    enhanceCircle(circleTop);
    if (!circleTop.clicked && perk.prereq) {

      var pathfound = false;
      
      for (let i = 0; i < perk.prereq.length; i++) {
        
        const prereqCircle = getCircleById(perk.prereq[i]);
        const prereqPerk = getPerkById(perk.prereq[i]);

        if (!prereqCircle || !prereqPerk) {
          console.error(`Prerequisite circle or perk not found for ID ${perk.prereq[0]}`);
          return;
        }
        
        if (prereqCircle && prereqCircle.clicked) {
          // Add a line between the clicked perk and its prerequisite
          addHighlightedLine(perkCircles[perk.prereq[i]], circleTop);
          
          // Recursively set the prerequisites as "clicked"
          enhanceCircle(prereqCircle);
          setCircleClicked(prereqCircle, prereqPerk);
          var pathfound = true;
        }

      }

      if (!pathfound) {

        const prereqCircle = getCircleById(perk.prereq[0]);
        const prereqPerk = getPerkById(perk.prereq[0]);

        if (!prereqCircle || !prereqPerk) {
          console.error(`Prerequisite circle or perk not found for ID ${perk.prereq[0]}`);
          return;
        }
        
        // Add a line between the clicked perk and its prerequisite
        addHighlightedLine(perkCircles[perk.prereq[0]], circleTop);
        
        // Recursively set the prerequisites as "clicked"
        enhanceCircle(prereqCircle);
        setCircleClicked(prereqCircle, prereqPerk);
      }
      
    }
  
    if (!circleTop.clicked) {
      setCount(prevCount => prevCount + 1);
      props.setTotalCount(prevCount => prevCount + 1);
    }
    circleTop.clicked = true;
    
    const selectedPerks = JSON.parse(localStorage.getItem('selectedPerks') || '[]');
    if (!selectedPerks.includes(perk.id)) {
      selectedPerks.push(perk.id);
      localStorage.setItem('selectedPerks', JSON.stringify(selectedPerks));
    }

  }

  function resetCircleClicked(circleTop: ExtendedCircle) {
    if (circleTop.clicked) {
      // Reset the circle's properties to their default state
      resetCircle(circleTop);
  
      setCount(prevCount => prevCount - 1);
      props.setTotalCount(prevCount => prevCount - 1);
      // Update the clicked status
      circleTop.clicked = false;

      removeLineById('lineTo_'+circleTop.id);

      const parents = perks.filter(parentPerk => 
        parentPerk.prereq && circleTop.uniqueID && parentPerk.prereq.includes(circleTop.uniqueID));

      if (parents) {
        parents.forEach((parent) => {
          const circle = getCircleById(parent.id);
          if (circle !== undefined) {
            resetCircleClicked(circle);
          }
        });
      }
    }
  }

  function removeLineById(id: string) {
    const line = editor?.canvas.getObjects().find((obj: any) => obj.id === id);
    if (line) {
      editor?.canvas.remove(line);
    }
  }

  // When a perk is clicked, highlight the line between it and its prerequisite
  function addHighlightedLine(prereqPerk: ExtendedCircle, endPerk: ExtendedCircle) {
    var line = createPerkLine(prereqPerk, endPerk, '#aaf9ff', 2, '#aaf9ff 0px 0px 5px', 1, 'lineTo_'+endPerk.id, null);
    editor?.canvas.add(line);
    line.sendToBack();
  }

  // Let's get to drawing!
  function drawPerkTree() {
    // First let's set the dimensions of the canvas to fit that of its container.
    if (editor?.canvas && 'wrapperEl' in editor.canvas) {
      const wrapper = editor.canvas.wrapperEl as HTMLElement;
      editor.canvas.setDimensions({
        width: wrapper.clientWidth, 
        height: wrapper.clientHeight
      });
    }

    // Loop through the perks and create circles
    perks.forEach((perk) => {

      let x, y;
      if (editor?.canvas.width && editor?.canvas.height) {
        // Convert percentage coordinates to pixel values
        x = perk.coords.x * editor.canvas.width / 100;
        y = perk.coords.y * editor.canvas.height / 100;
      } else {
        x = perk.coords.x;
        y = perk.coords.y;
      }

      // Create a layering circle
      // This one stacks below the main perk circle, to give a more dynamic glow
      var circleBottom = createCircle(x, y, 7, perk.id, 'CircleBottom', 'purple', 'purple 0px 0px 15px', null);
      editor?.canvas.add(circleBottom);

      // Create the main circle for the perk
      var circleTop = createCircle(x, y, 7, perk.id, 'CircleTop', '#bcebfd', '#bcebfd 0px 0px 10px', circleBottom);

      // Determine if perk has already been clicked, then either enhance or reset the circle
      circleTop.on('mousedown', function() {
        !circleTop.clicked ? setCircleClicked(circleTop, perk) : resetCircleClicked(circleTop);
      });  
      // Increase the glow of the circle when the mouse hovers over it
      circleTop.on('mouseover', function() {
        enhanceCircle(circleTop);
      });
      // Reset the circle when the mouse leaves
      circleTop.on('mouseout', function() {
        if (!circleTop.clicked) {
          resetCircle(circleTop);
        }
      });
      // Add the circle to the canvas
      editor?.canvas.add(circleTop);

      var text = createText(perk.name, x, y, perk.id, 10);
      editor?.canvas.add(text);

      // Store the circle in the perkCircles object
      perkCircles[perk.id] = circleTop;
    });

    // Loop through the perks again to draw lines between them
    perks.forEach((perk) => {
      perk.prereq?.forEach((prereqId) => {
        const startPerk = perkCircles[prereqId];
        const endPerk = perkCircles[perk.id];

        if (startPerk && endPerk) {
          var line = createPerkLine(startPerk, endPerk, '#aaf9ff', 2, '#aaf9ff 0px 0px 5px', 0.5, null, null);
          line.sendToBack();
          // Add the line to the canvas
          editor?.canvas.add(line);
        }
      });
    });

    // Bring the circles to the front of the canvas so that they layer on top of the lines
    Object.values(perkCircles).forEach(circle => {
      circle.bringToFront();
    });
    
    if (editor) {
      editor.canvas.selection = false;
    }
    editor?.canvas.renderAll();
  }

  useEffect(() => {
      drawPerkTree();
  }, [FabricJSCanvas, editor]);

  return (
    <>
      <FabricJSCanvas className={`perktree__canvas perktree__canvas__${props.canvasSize}`} onReady={onReady} />
      <div className="absolute top-0"><h2 className="text-white">Count: {count}</h2></div>
    </>
  );
};

export default PerkTreeList;