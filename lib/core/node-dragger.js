import math from '../util/math';

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
        let deltaPos = {
            x: position.x - this.startPosition.x,
            y: position.y - this.startPosition.y
        };
        this.draggingTarget.x = this.oldPosition.x + deltaPos.x;
        this.draggingTarget.y = this.oldPosition.y + deltaPos.y;
        this.draggingTarget.showObjRect.x = this.oldPosition.x + deltaPos.x;
        this.draggingTarget.showObjRect.y = this.oldPosition.y + deltaPos.y;
        this.graphStage.canvasRender.clear();
        // 从拖拽的这个节点开始计算布局
        this.draggingTarget.calLayout(this.draggingTarget, 1);
        if(this.draggingTarget.parent) {
            this.draggingTarget.parent.calLayoutIgnoreChild(this.draggingTarget);
            let silibingsRect = this.draggingTarget.parent.getChildrenNoFixedMaringRect(this.draggingTarget);
            if(silibingsRect) {
                let testRect = Object.assign({}, silibingsRect);
                testRect.width *= 2; 
                let dragPositionInCanvas = {
                    x: position.x - this.graphStage.canvasRender.translate.x,
                    y: position.y - this.graphStage.canvasRender.translate.y
                }
                
                if(math.pointInRect(dragPositionInCanvas, testRect)) {
                    
                    let nearBefore = this.draggingTarget.parent.pointUpWhichChild(dragPositionInCanvas);
                    if(nearBefore) {
                        console.log(nearBefore.target.text);
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
        this.graphStage.rootMindNode.render(this.graphStage.canvasRender);

    }

    dragEnd(position) {
        let deltaPos = {
            x: position.x - this.startPosition.x,
            y: position.y - this.startPosition.y
        };
        if(Math.pow(deltaPos.x, 2) + Math.pow(deltaPos.y, 2) > 5) {
            this.draggingTarget.fixed = true;
            this.draggingTarget.recalFathersMarginHeight();
        }

        if(this.nearBefore && this.draggingTarget.parent) {
            this.draggingTarget.fixed = false;
            this.draggingTarget.parent.inserChildBefore(this.nearBefore.target, this.draggingTarget);
            this.graphStage.canvasRender.clear();
            this.draggingTarget.parent.calLayout(this.draggingTarget.parent, 1);
            this.graphStage.rootMindNode.render(this.graphStage.canvasRender);
        }
        
    }
}