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

//   collisionTreeNoTarget(position, rootStart, noTarget) {
//     let showObjRect = {
//       x: rootStart.x,
//       y: rootStart.y,
//       width: rootStart.width,
//       height: rootStart.height
//     };

//     if(this.positionInRect(position, showObjRect) && rootStart !== noTarget) {
//         return rootStart; 
//     } 

//     if(rootStart.children.length) {
//         for(let i = 0; i < rootStart.children.length; i++) {
//             let child = rootStart.children[i];
//             let collisionChild = this.collisionTree(position, child, noTarget);
//             if(collisionChild && collisionChild !== noTarget) {
//                 return collisionChild;
//             }
//         }
//     }
//   }

collisionTreeNoTarget(position, rootStart, noTarget, cache) {
    let queue = [rootStart];
        while(queue.length > 0) {
            let head = queue.splice(0,1)[0];
            
            if(head.children.length) {
                for(let i = 0; i < head.children.length; i++) {
                    if(head !== noTarget) {
                        queue.push(head.children[i]);
                    }
                    
                }
            }

            if(this.positionInRect(position, head.showObjRect)) {
                cache.push(head);
            }
        }

        return cache;
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
