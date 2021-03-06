export class CanvasRedner {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.context.font = "18px Microsoft YaHei";
        this.ratio = this.getPixelRatio(this.context);

        this.scale = 1;
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





    startDrag() {
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

    scaleBigger() {
        this.scale += 0.02;
    }

    dragging(x, y) {
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
        this.context.save();
        this.context.clearRect(0, 0,  this.canvas.width, this.canvas.height);
        this.context.restore();
    }

    recursionRenderMindRoot(root) {
        this.renderMindNode(root);
        if(root.children.length) {
            for(let i = 0; i < root.children.length; i++) {
                this.recursionRenderMindRoot(root.children[i]);
            }
        }
    }

    renderMindRoot(root) {
        this.context.save();
        this.context.translate(this.translate.x, this.translate.y);
        this.context.scale(this.scale, this.scale);
        this.recursionRenderMindRoot(root);
        this.context.restore();
        
    }

    renderHorizonLine(y) {
        this.context.save();
        this.context.translate(0, this.translate.y);
        this.context.scale(this.scale, this.scale);
        this.context.translate(0, y);
        this.context.strokeStyle = "red";
        this.context.lineWidth = 3;
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(this.canvas.width, 0);
        this.context.stroke();
        this.context.restore();
    }

    renderMindNode(node) {
        
        this.context.save();
        this.context.translate(node.showObjRect.x, node.showObjRect.y);
        this.context.fillStyle = "rgba(176,224,230, 0.7)";
        this.context.beginPath();
        this.context.rect(0, 0, node.showObjRect.width, node.showObjRect.height);
        this.context.fill();
        if(node.selected) {
            this.context.strokeStyle = "#005757";
            this.context.strokeWidth = "18";
            this.context.stroke();
        }
        if(node.fixed) {
            this.context.beginPath();
            this.context.fillStyle = "#007979";
            this.context.arc(node.showObjRect.width + 2, node.showObjRect.height/2, 10, 0, Math.PI * 2);
            this.context.fill();
        }
        this.context.restore();

        this.context.save();
        this.context.translate(node.showObjRect.x, node.showObjRect.y);
        this.context.beginPath();
        this.context.fillStyle = "#642100";
        
        this.context.textAlign = "center"
        this.context.fillText(node.text, node.showObjRect.width / 2, node.showObjRect.height / 2 + 7);
        this.context.fill();
        this.context.restore();

        if(node.parent) {
            this.context.save();
            this.context.translate(node.showObjRect.x, node.showObjRect.y + node.showObjRect.height / 2);
            this.context.strokeStyle = "pink";
            this.context.beginPath();
            this.context.moveTo(0, 0);
            let parentShowObj = node.parent.showObjRect;
            let delta = {
                x:  (parentShowObj.x + parentShowObj.width) - node.showObjRect.x,
                y:  (parentShowObj.y + parentShowObj.height / 2) - (node.showObjRect.y + node.showObjRect.height / 2)
            }
            
            this.context.bezierCurveTo(-60, 0, delta.x + 15, delta.y, delta.x, delta.y)
            this.context.lineTo(delta.x, delta.y);
            this.context.stroke();
            this.context.restore();
        }

        if(node.fixed) {

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