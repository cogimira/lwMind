export class Interaction {
    constructor() {

  }

  positionInRect(point, rect) {
    let deltaVector = { x: point.x - rect.x, y: point.y - rect.y };
    if (
      deltaVector.x > 0 &&
      deltaVector.x < rect.width &&
      deltaVector.y > 0 &&
      deltaVector.y < rect.height
    ) {
        return true;
    } else {
        return false;
    }
  }

  collisionTree(position, rootStart) {
    let showObjRect = {
      x: rootStart.x,
      y: rootStart.y,
      width: rootStart.width,
      height: rootStart.height
    };

    if(this.positionInRect(position, showObjRect)) {
        return rootStart;
    } else {
        if(rootStart.children.length) {
            for(let i = 0; i < rootStart.children.length; i++) {
                let child = rootStart.children[i];
                let collisionChild = this.collisionTree(position, child);
                if(collisionChild) {
                    return collisionChild;
                }
            }
        }
        
    }
    
  }
}
