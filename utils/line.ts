import { fabric } from 'fabric';

class ExtendedLine extends fabric.Line {
    id?: string;
    uniqueID?: string;
}

function createPerkLine(
    startPerk: fabric.Circle, 
    endPerk: fabric.Circle, 
    lineColor: string, 
    width: number, 
    shadow: string, 
    opacity: number, 
    id: string | null, 
    type: string | null
  ) {
    let line = new ExtendedLine(
      [startPerk.left ?? 0, startPerk.top ?? 0, endPerk.left ?? 0, endPerk.top ?? 0],
      {
        stroke: lineColor,
        strokeWidth: width,
        selectable: false,
        shadow: shadow,
        opacity: opacity,
        hoverCursor: 'initial',
      }
    );
    
    // Add additional properties
    line.id = (id ?? '') + (type ?? '');
    line.uniqueID = id ?? '';

    return line;
}

export { createPerkLine, ExtendedLine };