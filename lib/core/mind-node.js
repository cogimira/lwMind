export class MindNode {
  constructor(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    let colors = ["red", "black", "green", "pink", "blue", "orange"];
    this.color = colors[parseInt(Math.random() * colors.length)];
    this.text = parseInt(Math.random() * 20) + "";
    this.width = width || 50;
    this.height = height || 20;
    this.marginVertical = 5;
    this.marginHorizontal = 40;
    this.selected = false;

    this.marginWidth = this.width + this.marginHorizontal * 2; // 占位高度
    this.marginHeight = this.height + this.marginVertical * 2; // 占位宽度
    this.parent = null;
    this.children = [];

    this.showObjRect = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }

  getMarginRect() {
    return {
      x: this.x - this.marginHorizontal,
      y: this.y - this.marginHeight / 2 + this.height / 2,
      width: this.marginWidth,
      height: this.marginHeight
    };
  }

  getChildrenMarginHeight() {
    let totalMarginHeight = 0;
    for (let i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      totalMarginHeight += child.marginHeight;
    }

    return totalMarginHeight;
  }

  //
  addChild(child) {
    this.children.push(child);
    if (child.parent) {
      child.parent.marginHeight -= child.marginHeight;
      child.parent.deleteChild(child);
    }
    child.parent = this;
    // this.marginHeight += child.marginHeight;
    this.recursionCalMarginRect(child);
  }

  // 递归计算父亲节点的占位高度
  recursionCalMarginRect(child) {
    if (!child.parent) {
      return;
    }
    let childrenHeight = child.parent.getChildrenMarginHeight();
    if (childrenHeight <= child.parent.marginHeight) {
      return;
    }
    let parent = child.parent;
    parent.marginHeight = childrenHeight;
    this.recursionCalMarginRect(parent);
  }

  afterDeleteChildRect(node, beforeMarginHeight) {
    
    let childrenMarginRect = node.getChildrenMarginHeight();
    if(node.children.length == 0) {
        node.marginHeight = node.height + node.marginVertical * 2;
    } else {
        let defualtMarginHeight = node.height + node.marginVertical * 2;
        node.marginHeight = childrenMarginRect > defualtMarginHeight ?  childrenMarginRect : defualtMarginHeight;
    }
    
    if(!node.parent) {
        return;
    }
    this.afterDeleteChildRect(node.parent, beforeMarginHeight);
  }
  

  deleteChild(child) {
      let beforeMarginHeight = this.getChildrenMarginHeight();
    for (let i = 0; i < this.children.length; i++) {
      if (child == this.children[i]) {
        this.children.splice(i, 1);
      }
    }
    this.afterDeleteChildRect(this, beforeMarginHeight);
  }

  //
  calMarginRect() {
    let selfMarginRect = {
      width: this.width + this.marginHorizontal * 2,
      height: this.height + this.marginVertical * 2
    };

    let totalMarginHeight = 0;
    for (let i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      totalMarginHeight += child.marginHeight;
    }

    selfMarginRect.height =
      selfMarginRect.height > totalMarginHeight
        ? selfMarginRect.height
        : totalMarginHeight;

    return selfMarginRect;
  }

  addDefualtChild() {
    let childNode = new MindNode();
    this.addChild(childNode);
  }

  calLayout(mindNode, steps) {
    let totalMarginHeight = mindNode.getChildrenMarginHeight();
    let startX = mindNode.x + mindNode.marginWidth;
    let startY = mindNode.y + mindNode.height / 2 - totalMarginHeight / 2;
    let offsetHeight = 0;

    for (let i = 0; i < mindNode.children.length; i++) {
      let child = mindNode.children[i];
      child.showObjRect.x = startX;
      child.x = startX;
      child.showObjRect.y =
        startY + offsetHeight + child.marginHeight / 2 - child.height / 2;
      child.y = child.showObjRect.y;
      offsetHeight += child.marginHeight;
    }

    for (let i = 0; i < mindNode.children.length; i++) {
      this.calLayout(mindNode.children[i], ++steps);
    }
  }

  render(renderer) {
    // 计算布局
    this.calLayout(this, 1);
    renderer.renderMindRoot(this);
  }
}
