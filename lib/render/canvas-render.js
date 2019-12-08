export class CanvasRedner {
    constructor(canvas) {
        this.context = canvas.getContext("2d");
        this.ratio = this.getPixelRatio(this.context);
    }

    getPixelRatio(context) {
        let backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }


    renderNode(target) {
        this.context.save();
        this.context.beginPath();
        this.context.translate(target.x, target.y);
        this.context.arc(0, 0, target.r / 2, 0, 2 * Math.PI);
        this.context.fill();
        this.context.restore();
    }
}