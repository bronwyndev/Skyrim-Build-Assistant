import { fabric } from 'fabric';

class ExtendedText extends fabric.Text {
    id?: string;
}

function createText(
    name: string, 
    x: number, 
    y: number, 
    id: string,
    radius: number
  ) {
    let text = new ExtendedText(name, {
      left: x,
      top: y + radius + 2, // position the text 2px below the circle
      fontSize: 12,
      originX: 'center',
      originY: 'top',
      selectable: false,
      fill: '#ffffff',
      fontFamily: 'Arial',
    });
    
    // Add additional properties
    text.id = id;

    return text;
}

export { createText, ExtendedText };