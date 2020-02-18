export default {
    recursionCancleFixed(rootNode, steps) {
        rootNode.fixed = false;
        steps = steps || 1;
        if (rootNode.children.length > 0) {
            for (let i = 0; i < rootNode.children.length; i++) {
                if(steps > 1) {
                    rootNode.children[i].fixed = false;
                }
              this.recursionCancleFixed(rootNode.children[i], steps++);
            }
          }
    },
    clearMarginFromRoot(rootNode) {
        let queue = [rootNode];
        while(queue.length > 0) {
            let head = queue.splice(0,1)[0];
            if(head.children.length) {
                for(let i = 0; i < head.children.length; i++) {
                    queue.push(head.children[i]);
                }
            }
            head.marginHeight = head.getDefualtMarginHeight();   
        }
    },
    // 从根节点重新布局, 广度遍历
    reLayoutFromRootNode(rootNode) {
        this.clearMarginFromRoot(rootNode);
        let queue = [rootNode];
        while(queue.length > 0) {
            let head = queue.splice(0,1)[0];
            if(head.children.length) {
                for(let i = 0; i < head.children.length; i++) {
                    queue.push(head.children[i]);
                }
            }
            head.marginHeight = head.calMarginRect().height;
            this.recursionReCalParentsMarginHeight(head, rootNode);
        }

        rootNode.calLayout(rootNode, 1);

    },
    recursionReCalParentsMarginHeight(startNode, endNode) {
        if(!startNode.parent || startNode === endNode) {
            return;
        }
        if(startNode.parent === endNode) {
            startNode.parent.marginHeight = startNode.parent.getChildrenMarginHeight();
            return;
        }
        // startNode.parent
        startNode.parent.marginHeight = startNode.parent.getChildrenMarginHeight();
        this.recursionReCalParentsMarginHeight(startNode.parent, endNode);
    },
}