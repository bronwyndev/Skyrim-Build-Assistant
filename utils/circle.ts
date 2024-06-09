import { fabric } from 'fabric';

class ExtendedCircle extends fabric.Circle {
    id?: string;
    uniqueID?: string;
    circleBottom?: fabric.Circle | null;
    clicked: boolean = false;
}

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
    let circle = new ExtendedCircle({
        left: x,
        top: y,
        radius: radius,
        fill: fill,
        shadow: shadow,
        selectable: false,
        originX: 'center',
        originY: 'center',
        hoverCursor: 'pointer',
    });

    // Add additional properties
    circle.id = id + type;
    circle.uniqueID = id;
    circle.circleBottom = circleBottom;

    return circle;
}

export { createCircle, ExtendedCircle };