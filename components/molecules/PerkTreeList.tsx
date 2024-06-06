import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor  } from 'fabricjs-react';
import { Perk, PerkTree } from '../../models/perk';

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
  const perkCircles: { [key: string]: fabric.Circle } = {};

  // Get a circle by its ID
  // We can assume the id will contain 'CircleTop' as we will never directly interact with 'CircleBottom' (it is cosmetic only)
  function getCircleById(id: string): fabric.Circle | undefined {
    return editor?.canvas.getObjects().find((obj: { id: string; }) => obj.id === id + 'CircleTop') as fabric.Circle;
  }
  
  // Get a perk by its ID
  function getPerkById(id: string): Perk | undefined {
    return perks.find((p) => p.id === id);
  }

  // Create a circle object
  function createCircle(
    x: number, 
    y: number, 
    radius: number, 
    id: string, 
    type: string, 
    fill: string, 
    shadow: string, 
    circleBottom: fabric.Circle | null
  ) {
    return new fabric.Circle({
      left: x,
      top: y,
      radius: radius,
      fill: fill,
      shadow: shadow,
      selectable: false,
      originX: 'center',
      originY: 'center',
      id: id + type,
      uniqueID: id,
      circleBottom: circleBottom,
      hoverCursor: 'pointer',
    });

  }

  function createText(
    name: string, 
    x: number, 
    y: number, 
    radius: number
  ) {
    return new fabric.Text(name, {
      left: x,
      top: y + radius + 10, // position the text 10px below the circle
      fontSize: 14,
      originX: 'center',
      originY: 'top',
      selectable: false,
    });
  }

  function createPerkLine(
    startPerk: fabric.Circle, 
    endPerk: fabric.Circle, 
    lineColor: string, 
    width: number, 
    shadow: string, 
    opacity: number, 
    id: string | null
  ) {
    return new fabric.Line(
      [startPerk.left, startPerk.top, endPerk.left, endPerk.top],
      {
        stroke: lineColor,
        strokeWidth: width,
        selectable: false,
        shadow: shadow,
        opacity: opacity,
        hoverCursor: 'initial',
        id: id,
      }
    );
  }

  // Enhance the circle by increasing its radius and changing its color
  function enhanceCircle(circleTop: fabric.Circle) {
    circleTop.set({ radius: 9, fill: '#fffac6', shadow: 'yellow 0px 0px 10px' });
    circleTop.circleBottom.set({ radius: 9, fill: 'red', shadow: 'red 0px 0px 15px' });
  }
  
  // Reset the circle to its original state
  function resetCircle(circleTop: fabric.Circle) {
    circleTop.set({ radius: 7, fill: '#bcebfd', shadow: '#bcebfd 0px 0px 10px' });
    circleTop.circleBottom.set({ radius: 7, fill: 'purple', shadow: 'purple 0px 0px 15px' });
  }

  // Set the circle as clicked and recursively set its prerequisites as clicked
  function setCircleClicked(circleTop: fabric.Circle, perk: Perk) {
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
  }

  function resetCircleClicked(circleTop: fabric.Circle) {
    if (circleTop.clicked) {
      // Reset the circle's properties to their default state
      resetCircle(circleTop);
  
      setCount(prevCount => prevCount - 1);
      props.setTotalCount(prevCount => prevCount - 1);
      // Update the clicked status
      circleTop.clicked = false;

      removeLineById('lineTo_'+circleTop.id);

      const parents = perks.filter(parentPerk => parentPerk.prereq && parentPerk.prereq.includes(circleTop.uniqueID));
      if (parents) {
        parents.forEach((parent) => {
          resetCircleClicked(getCircleById(parent.id));
        });
      }
    }
  }

  function removeLineById(id: string) {
    const line = editor?.canvas.getObjects().find((obj: { id: string; }) => obj.id === id);
    if (line) {
      editor?.canvas.remove(line);
    }
  }

  // When a perk is clicked, highlight the line between it and its prerequisite
  function addHighlightedLine(prereqPerk: fabric.Circle, endPerk: fabric.Circle) {
    var line = createPerkLine(prereqPerk, endPerk, '#aaf9ff', 2, '#aaf9ff 0px 0px 5px', 1, 'lineTo_'+endPerk.id);
    editor?.canvas.add(line);
    line.sendToBack();
  }

  // Let's get to drawing!
  function drawPerkTree() {
    // First let's set the dimensions of the canvas to fit that of its container.
    if (editor?.canvas) {
      editor.canvas.setDimensions({width:editor.canvas.wrapperEl?.clientWidth, height:editor.canvas.wrapperEl?.clientHeight});
    }

    // Loop through the perks and create circles
    perks.forEach((perk) => {
      // Convert percentage coordinates to pixel values
      let x = perk.coords.x * editor?.canvas.width / 100;
      let y = perk.coords.y * editor?.canvas.height / 100;

      // Create a layering circle
      // This one stacks below the main perk circle, to give a more dynamic glow
      var circleBottom = createCircle(x, y, 7, perk.id, 'CircleBottom', 'purple', 'purple 0px 0px 15px', perk.name);
      editor?.canvas.add(circleBottom);

      // Create the main circle for the perk
      var circleTop = createCircle(x, y, 7, perk.id, 'CircleTop', '#bcebfd', '#bcebfd 0px 0px 10px', circleBottom);

      // Add a 'mouse:down' event listener to the circle
      circleTop.on('mousedown', function() {
        // Determine if perk has already been clicked, then either enhance or reset the circle
        !circleTop.clicked ? setCircleClicked(circleTop, perk) : resetCircleClicked(circleTop);
      });  
      // Add a 'mouse:over' event listener to the circle
      circleTop.on('mouseover', function() {
        // Increase the glow of the circle when the mouse hovers over it
        enhanceCircle(circleTop);
        editor?.canvas.renderAll();
      });
      // Add a 'mouse:out' event listener to the circle
      circleTop.on('mouseout', function() {
        if (!circleTop.clicked) {
          // Reset the circle when the mouse leaves
          resetCircle(circleTop);
          editor?.canvas.renderAll();
        }
      });
      // Add the circle to the canvas
      editor?.canvas.add(circleTop);

      // Store the circle in the perkCircles object
      perkCircles[perk.id] = circleTop;
    });

    // Loop through the perks again to draw lines between them
    perks.forEach((perk) => {
      perk.prereq?.forEach((prereqId) => {
        const startPerk = perkCircles[prereqId];
        const endPerk = perkCircles[perk.id];

        if (startPerk && endPerk) {
          var line = createPerkLine(startPerk, endPerk, '#aaf9ff', 2, '#aaf9ff 0px 0px 5px', 0.5, null);
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
  }

  useEffect(() => {
    if (editor?.canvas) {
      drawPerkTree();
    }
  }, [FabricJSCanvas, perks]);

  return (
    <>
      <FabricJSCanvas className={`perktree__canvas perktree__canvas__${props.canvasSize}`} onReady={onReady} />
      <div className="absolute top-0"><h2 className="text-white">Count: {count}</h2></div>
    </>
  );
};

export default PerkTreeList;