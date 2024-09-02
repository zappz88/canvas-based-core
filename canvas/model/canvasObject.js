import { Shape } from "../canvas/model/shape.js";
import { StyleType } from "../canvas/model/styleType.js";
import { CanvasCollisionDetection2D } from "../canvas/environment/canvasCollisionDetection2D.js";
import { CollisionDetection } from "../canvas/model/collisionDetection/collisionDetection.js";
import { CollisionDetection2D } from "../canvas/model/collisionDetection/collisionDetection2D.js";

export class CanvasObject extends Shape {

    //property, ctor
    styleType = StyleType.FILL;
    style = "#000000";

    constructor(ctx, x, y, height, width, styleType = StyleType.FILL, style = "#000000"){
        super(ctx, x, y, height, width);
        this.styleType = styleType;
        this.style = style;
    }

    setStyleType(val){
        this.styleType = val;
        return this;
    }

    setStyle(val){
        this.style = val;
        return this;
    }

    clear(){
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }

    resolveDraw(){
        switch(this.styleType){
            case StyleType.FILL:
                this.ctx.fillStyle = this.style;
                this.ctx.fillRect(this.x, this.y, this.width, this.height);
                break;
            case StyleType.STROKE:
                this.ctx.strokeStyle = this.style;
                this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
}