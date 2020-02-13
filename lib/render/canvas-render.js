export class CanvasRedner {
    constructor(canvas) {
        this.canvas = canvas;
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

    clear() {
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }

    renderMindRoot(root) {
        this.renderMindNode(root);
        if(root.children.length) {
            for(let i = 0; i < root.children.length; i++) {
                this.renderMindRoot(root.children[i]);
            }
        }
    }

    renderMindNode(node) {
        // this.context.fillStyle = "orange";
        // this.context.beginPath();
        // this.context.rect( node.showObjRect.x,  node.showObjRect.y, node.showObjRect.width, node.showObjRect.height);
        // this.context.fill();

        this.context.save();
        this.context.beginPath();
        this.context.translate(node.showObjRect.x, node.showObjRect.y);
        this.context.rect(0, 0, node.showObjRect.width, node.showObjRect.height);
        this.context.stroke();
        this.context.fill();
        this.context.restore();

        if(node.parent) {
            this.context.save();
            this.context.beginPath();
            this.context.translate(node.showObjRect.x, node.showObjRect.y + node.showObjRect.height / 2);
            this.context.moveTo(0, 0);
            let parentShowObj = node.parent.showObjRect;
            let delta = {
                x:  (parentShowObj.x + parentShowObj.width) - node.showObjRect.x,
                y:  (parentShowObj.y + parentShowObj.height / 2) - (node.showObjRect.y + node.showObjRect.height / 2)
            }
            // let delta = {
            //     x:  (parentShowObj.x) - node.showObjRect.x,
            //     y:  (parentShowObj.y ) - (node.showObjRect.x)
            // }
            this.context.lineTo(delta.x, delta.y);
            this.context.stroke();
            this.context.restore();
        }

        let marginRect = node.getMarginRect();
        this.context.save();
        this.context.strokeStyle = "red";
        this.context.beginPath();
        this.context.translate(marginRect.x, marginRect.y);
        this.context.rect(0, 0, marginRect.width, marginRect.height);
        this.context.stroke();
        this.context.restore();
    }
}