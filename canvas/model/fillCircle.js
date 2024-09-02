import { FillArc } from "./fillArc.js";

export class FillCircle extends FillArc {
    
    radius = 5;
    startAngle = 0;
    endAngle = (2 * Math.PI);

    constructor(ctx, x, y, radius = 5, fillStyle = "#000000"){
        super(ctx, x, y, 0, 0, fillStyle);
        this.radius = radius;
    }
}