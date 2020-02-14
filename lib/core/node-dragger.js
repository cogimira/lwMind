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
        this.draggingTarget.calLayout(this.draggingTarget, 1);
        if(this.draggingTarget.parent) {
            this.draggingTarget.parent.calLayoutIgnoreChild(this.draggingTarget);
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
        }
        
    }
}