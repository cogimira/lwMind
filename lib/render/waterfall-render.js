// 瀑布编辑模式下

import {WaterfallMindMode} from '../core/waterfall-mind-node';

export class WaterfallRender {
    constructor(canvasRender, rootNode) {
        this.canvasRender = canvasRender;
        this.canvas = this.canvasRender.canvas;
        this.context = this.canvasRender.context;
        this.rootNode = rootNode;
        this.waterfallRoot = null;
        this.scale = 1;
        this.translate = {
            x: 0,
            y: 0
        }

        // 
        this.copyWaterfallFrom(rootNode);
    }

    copyWaterfallFrom(rootNode) {
        let waterfallRoot = new WaterfallMindMode(rootNode);
        this.waterfallRoot = waterfallRoot;
        for(let i = 0; i < rootNode.children.length; i++) {
            let child = rootNode.children[i];
            let childWaterfallNode = new WaterfallMindMode(child);
            this.waterfallRoot.addChild(childWaterfallNode);
        }
    }


    clear() {
        this.context.clearRect(0, 0,  this.canvas.width, this.canvas.height);
    }

    render() {
        // let rootNode
        this.clear();
        // 计算布局
        this.waterfallRoot.layout({
            x: 100,
            y: 400,
            width: this.canvas.width - 100,
            height: 300
        });
        this.renderChildren(this.waterfallRoot.children);
        this.renderRootNode(this.waterfallRoot);
       
    }

    renderRootNode(rootNode){
        this.context.save();
        this.context.fillStyle = rootNode.mindNode.color;
        this.context.beginPath();
        this.context.rect(rootNode.showObj.x, rootNode.showObj.y, rootNode.showObj.width, rootNode.showObj.height);
        this.context.fill();
        this.context.restore();

        let children = rootNode.children;
        
    }

    renderChildren(children) {
        for(let i = 0; i < children.length; i++){
            this.context.save();
            let child = children[i];
            this.context.translate(child.showObj.x + child.showObj.width / 2, child.showObj.y);
            this.context.strokeStyle = "pink";
            this.context.lineWidth = 8;
            this.context.beginPath();
            this.context.moveTo(0, 0);
            
            let parentShowObj = child.parent.showObj;
            let delta = {
                x:  (parentShowObj.x + parentShowObj.width) - (child.showObj.x + child.showObj.width / 2),
                y:  (parentShowObj.y + parentShowObj.height / 2) - (child.showObj.y)
            }
            this.context.lineTo(0 , delta.y);
            this.context.lineTo(delta.x, delta.y);
            // this.context.bezierCurveTo(0, -60 - (i+1)* 20, delta.x + (i+1) * 35, delta.y, delta.x, delta.y)
            // this.context.lineTo(delta.x, delta.y);
            this.context.stroke();
            this.context.restore();
        }
        for(let i = 0; i < children.length; i++) {
            let child = children[i];
            this.context.save();
            this.context.fillStyle = children[i].mindNode.color;
            this.context.beginPath();
            this.context.rect(child.showObj.x, child.showObj.y, child.showObj.width, child.showObj.height);
            this.context.fill();
            this.context.restore();
        }
    }
}