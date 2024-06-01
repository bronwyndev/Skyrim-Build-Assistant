import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor  } from 'fabricjs-react';
import { Perk, PerkTree } from '../../models/perk';

type PropType = {
  perks: PerkTree['perks'];
};

const PerkTreeList: React.FC<PropType> = (props) => {
  const { perks } = props;
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const { selectedObjects, editor, onReady } = useFabricJSEditor();

  useEffect(() => {

    if (editor?.canvas) {
      console.log(editor.canvas);
      editor.canvas.setDimensions({width:editor.canvas.wrapperEl?.clientWidth, height:editor.canvas.wrapperEl?.clientHeight});
      //editor.canvas.width = editor.canvas.parentElement?.clientWidth || 0;
      //editor.canvas.height = editor.canvas.parentElement?.clientHeight || 0;
    }
      // Create an object to store the fabric circles representing the perks
      const perkCircles = {};

      // Loop through the perks and create circles
      perks.forEach((perk) => {
        // Convert percentage coordinates to pixel values
        let x = perk.coords.x * editor?.canvas.width / 100;
        let y = perk.coords.y * editor?.canvas.height / 100;

        // Create a circle for the perk
        var circle = new fabric.Circle({
          left: x,
          top: y,
          radius: 8,
          fill: 'yellow',
          shadow: 'yellow 0px 0px 10px',
          selectable: false,
          originX: 'center',
          originY: 'center',
        });

        // Add a 'mouse:down' event listener to the circle
        circle.on('mousedown', function() {
          // Display the title of the perk when the circle is clicked
          alert(perk.name);
        });  
        // Add a 'mouse:over' event listener to the circle
        circle.on('mouseover', function() {
          // Increase the glow of the circle when the mouse hovers over it
          circle.set({ radius: 10 });
          circle.set({ shadow: 'yellow 0px 0px 15px' });
          editor?.canvas.renderAll();
        });

        // Add a 'mouse:out' event listener to the circle
        circle.on('mouseout', function() {
          // Decrease the glow of the circle when the mouse leaves
          circle.set({ radius: 8 });
          circle.set({ shadow: 'yellow 0px 0px 10px' });
          editor?.canvas.renderAll();
        });
        // Add the circle to the canvas
        editor?.canvas.add(circle);

        // Store the circle in the perkCircles object
        perkCircles[perk.id] = circle;
      });

      // Loop through the perks again to draw lines
      perks.forEach((perk) => {
        if (perk.prereq) {
          const startPerk = perkCircles[perk.prereq];
          const endPerk = perkCircles[perk.id];

          if (startPerk && endPerk) {
            var line = new fabric.Line(
              [startPerk.left, startPerk.top, endPerk.left, endPerk.top],
              {
                stroke: 'white',
                strokeWidth: 2,
                selectable: false
              }
            );

            // Add the line to the canvas
            editor?.canvas.add(line);
          }
        }
      });
    
  }, [FabricJSCanvas, perks]);

  return <FabricJSCanvas className="sample-canvas" onReady={onReady} />;
};

export default PerkTreeList;