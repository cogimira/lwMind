import math from '../util/math';
import MNUtil from '../util/mind-node';

export class NodeDragger {
    constructor(graphStage, draggingTarget) {
        this.graphStage = graphStage;
        this.draggingTarget = draggingTarget;
        this.startPosition = null;

        this.oldPosition = {
            x: this.draggingTarget.x,
            y: this.draggingTarget.y
        }

    }


    // position : 相对于画布的position
    dragging(position) {
        this.graphStage.canvasRender.clear();
        let deltaPos = {
            x: position.x - this.startPosition.x,
            y: position.y - this.startPosition.y
        };
        this.draggingTarget.x = this.oldPosition.x + deltaPos.x;
        this.draggingTarget.y = this.oldPosition.y + deltaPos.y;
        this.draggingTarget.showObjRect.x = this.oldPosition.x + deltaPos.x;
        this.draggingTarget.showObjRect.y = this.oldPosition.y + deltaPos.y;

        let dragPositionInCanvas = {
            x: position.x - this.graphStage.canvasRender.translate.x,
            y: position.y - this.graphStage.canvasRender.translate.y
        }

        
        // 从拖拽的这个节点开始计算布局
        // if()
        this.draggingTarget.fixed = true;
        if(this.draggingTarget.parent) {
            this.draggingTarget.recursionCalMarginRect(this.draggingTarget);
            this.draggingTarget.parent.recursionCalLayout();
            this.draggingTarget.reLayout(this.draggingTarget, 1);  
        } else {
            this.draggingTarget.calLayout(this.draggingTarget, 1);  
        } 
        
        // 是否对节点进行兄弟排序
        if(this.draggingTarget.parent) {
            // 
            // this.draggingTarget.parent.calLayoutIgnoreChild(this.draggingTarget);
            let silibingsRect = this.draggingTarget.parent.getChildrenNoFixedMaringRect(this.draggingTarget);
            if(silibingsRect) {
                let testRect = Object.assign({}, silibingsRect);
                testRect.width *= 2; 
                
                
                if(math.pointInRect(dragPositionInCanvas, testRect)) {
                    
                    let nearBefore = this.draggingTarget.parent.pointUpWhichChild(dragPositionInCanvas);
                    if(nearBefore) {
                        // console.log(nearBefore.target.text);
                        this.graphStage.canvasRender.renderHorizonLine(nearBefore.insertRect.y);
                        this.nearBefore = nearBefore;
                    } else {
                        this.nearBefore = null;
                    }
                } else {
                    this.nearBefore = null;
                }
            }
        }
        // 计算是否应该合并节点
        let interaction = this.graphStage.interaction;
        let targets = [];
        this.graphStage.rootMindNode.render(this.graphStage.canvasRender);
        interaction.collisionTreeNoTarget(dragPositionInCanvas, this.graphStage.rootMindNode, this.draggingTarget, targets);
        let targetCollision = null;
        for(let i = 0; i < targets.length; i++) {
            if(targets[i] !== this.draggingTarget) {
                targetCollision = targets[i];
                break;
            }
        }
        if(targetCollision) {
            console.log(targetCollision.text);
            this.targetCollision = targetCollision;
        } else {
            this.targetCollision = null;
        }
        // this.graphStage.rootMindNode.render(this.graphStage.canvasRender);
        
        this.graphStage.rootMindNode.render(this.graphStage.canvasRender);

    }

    dragEnd(position) {
        let deltaPos = {
            x: position.x - this.startPosition.x,
            y: position.y - this.startPosition.y
        };
        // if(Math.pow(deltaPos.x, 2) + Math.pow(deltaPos.y, 2) > 5) {
        //     this.draggingTarget.fixed = true;
        //     if(this.draggingTarget.parent) {
        //         // this.draggingTarget.parent.calLayout(this.draggingTarget.parent, 1);
        //         this.draggingTarget.parent.recalFathersMarginHeight();
        //     }
        // }

        // 如果应该成为某个孩子节点
        if(this.targetCollision) {
            console.log(this.targetCollision.text)
            this.draggingTarget.fixed = false;
            this.targetCollision.addChild(this.draggingTarget); 
            this.graphStage.canvasRender.clear();
            this.targetCollision.reLayout(this.targetCollision);
            // this.targetCollision.calMarginHeight(this.targetCollision);
            // this.targetCollision.calLayout(this.targetCollision);
            // this.draggingTarget.recalFathersMarginHeight();
            // this.draggingTarget.parent.calLayout(this.targetCollision.parent, 1);
            this.graphStage.rootMindNode.render(this.graphStage.canvasRender);
            return;
        }

        if(this.nearBefore && this.draggingTarget.parent) {
            this.draggingTarget.fixed = false;
            this.draggingTarget.parent.inserChildBefore(this.nearBefore.target, this.draggingTarget);
            this.graphStage.canvasRender.clear();
            let startRelayout = this.draggingTarget.parent;
            while(startRelayout.parent && startRelayout.parent.fixed == false) {
                startRelayout = startRelayout.parent;
            }
            startRelayout.calLayout(startRelayout);
            this.graphStage.rootMindNode.render(this.graphStage.canvasRender);
        }
        
    }
}