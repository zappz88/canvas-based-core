import { FillShape } from "./fillShape.js";

export class FillArc extends FillShape {
    
    radius = 0;
    startAngle = 0;
    endAngle = 0;

    constructor(ctx, x, y, radius = 0, startAngle = 0, endAngle = 0, fillStyle = "#000000"){
        super(ctx, x, y, 0, 0, fillStyle);
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
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        this.ctx.fill();
    }
}