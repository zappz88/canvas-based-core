import { CanvasCircle2D } from "./canvas/model/canvasCircle2D.js";
import { CanvasRect2D } from "./canvas/model/canvasRect2D.js";
import { CanvasLine2D } from "./canvas/model/canvasLine2D.js";

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var circle = new CanvasCircle2D(ctx, 50, 50, 10);
console.log(circle);

setInterval(() => circle.draw(), 1000);
setInterval(() => circle.clear(), 2000);

var rect = new CanvasRect2D(ctx, 100, 50, 10, 10);
console.log(rect);

setInterval(() => rect.draw(), 1000);
setInterval(() => rect.clear(), 2000);

var line = new CanvasLine2D(ctx, 50, 100, 100, 100);
console.log(line);

line.draw();

