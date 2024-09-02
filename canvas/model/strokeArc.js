import { StrokeShape } from "./strokeShape.js";

export class StrokeArc extends StrokeShape {
    
    radius = 0;
    startAngle = 0;
    endAngle = 0;

    constructor(ctx, x, y, radius = 0, startAngle = 0, endAngle = 0, strokeStyle = "#000000"){
        super(ctx, x, y, 0, 0, strokeStyle);
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    setRadius(val){
        this.radius = val;
        return this;
    }

    setStartAngle(val){
        this.startAngle = val;
        return this;
    }

    setEndAngle(val){
        this.endAngle = val;
        return this;
    }

    draw(){
        this.ctx.strokeStyle = this.fillStyle;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        this.ctx.stroke();
    }
}