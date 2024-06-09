import { fabric } from 'fabric';

class ExtendedText extends fabric.Text {
    id?: string;
    uniqueID?: string;
}

function createText(
    name: string, 
    x: number, 
    y: number, 
    id: string, 
    type: string, 
    radius: number
  ) {
    let text = new ExtendedText(name, {
      left: x,
      top: y + radius + 10, // position the text 10px below the circle
      fontSize: 14,
      originX: 'center',
      originY: 'top',
      selectable: false,
    });
    
    // Add additional properties
    text.id = id + type;
    text.uniqueID = id;

    return text;
}

export { createText, ExtendedText };