export class CanvasRedner {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
    }

    renderNode(target){
        this.ctx.beginPath();
        this.ctx.arc(target.x,target.y,target.r,0,2*Math.PI);
        this.ctx.stroke();
    }
}