export class CanvasRedner {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.ratio = this.getPixelRatio(this.context);
        this.translate = {
            x: 0,
            y: 0
        }

        this.lastTranslate = {
            x: 0,
            y: 0
        }
        // this.context.translate(520, 100);
    }

    startDrag(x, y) {
        this.lastTranslate = {
            x: this.translate.x,
            y: this.translate.y
        }
    }

    reduceDragging(x, y) {
        this.translate = {
            x: this.lastTranslate.x + x,
            y: this.lastTranslate.y + y
        }
    }

    dragging(x, y) {
        
        // this.context.translate(x, y);
        this.context.translate(-this.translate.x, -this.translate.y);
        this.context.translate(this.lastTranslate.x + x, this.lastTranslate.y + y);
        // this.context.translate(-this.translate.x, -this.translate.y);
        this.translate.x = x + this.lastTranslate.x;
        this.translate.y = y + this.lastTranslate.y;
        
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
        this.context.translate(target.x, target.y);
        this.context.beginPath();
        this.context.arc(0, 0, target.r / 2, 0, 2 * Math.PI);
        this.context.fill();
        this.context.restore();
    }

    clear() {
        // this.context.translate(0, 0);
        this.context.clearRect(-100000, -100000,  this.canvas.width + 100000, this.canvas.height + 100000);
    }

    renderMindRoot(root) {
        // this.context.translate(this.translate.x, this.translate.y);
        // this.clear();
        this.renderMindNode(root);
        if(root.children.length) {
            for(let i = 0; i < root.children.length; i++) {
                this.renderMindRoot(root.children[i]);
            }
        }
    }

    renderMindNode(node) {
        
        this.context.save();
        this.context.translate(node.showObjRect.x, node.showObjRect.y);
        this.context.fillStyle = node.color;
        this.context.beginPath();
        this.context.rect(0, 0, node.showObjRect.width, node.showObjRect.height);
        this.context.stroke();
        this.context.fill();
        this.context.restore();

        this.context.save();
        this.context.translate(node.showObjRect.x, node.showObjRect.y);
        this.context.beginPath();
        this.context.fillStyle = "white";
        this.context.font = "18px serif";
        this.context.textAlign = "center"
        this.context.fillText(node.text, node.showObjRect.width / 2, node.showObjRect.height / 2 + 9);
        // this.context.stroke();
        this.context.fill();
        this.context.restore();

        if(node.parent) {
            this.context.save();
            this.context.translate(node.showObjRect.x, node.showObjRect.y + node.showObjRect.height / 2);
            this.context.beginPath();
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

        // let marginRect = node.getMarginRect();
        // this.context.save();
        // this.context.translate(marginRect.x, marginRect.y);
        // this.context.strokeStyle = "red";
        // this.context.beginPath();
        // this.context.rect(0, 0, marginRect.width, marginRect.height);
        // this.context.stroke();
        // this.context.restore();
    }
}