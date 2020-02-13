export class MindNode {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    let colors = ["red", "black", "green", "pink", "blue", "orange"];
    this.color = colors[parseInt(Math.random() * colors.length)];
    this.text = parseInt(Math.random() * 20) + "";
    this.width = width || 50;
    this.height = height || 20;
    this.marginVertical = 5;
    this.marginHorizontal = 40;

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

  afterDeleteChildRect(node) {
    
    let childrenMarginRect = node.getChildrenMarginHeight();
    node.marginHeight = childrenMarginRect;
    if(!node.parent) {
        return;
    }
    this.afterDeleteChildRect(node.parent);
  }
  

  deleteChild(child) {
    for (let i = 0; i < this.children.length; i++) {
      if (child == this.children[i]) {
        this.children.splice(i, 1);
      }
    }
    this.afterDeleteChildRect(this);
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

  click(x, y, isAdd) {
    let showObjRect = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
    let deltaVector = { x: x - showObjRect.x, y: y - showObjRect.y };
    if (
      deltaVector.x > 0 &&
      deltaVector.x < showObjRect.width &&
      deltaVector.y > 0 &&
      deltaVector.y < showObjRect.height
    ) {
      console.log(this);
      let height = Math.random() * 100 + 2;
      let node = new MindNode(0, 0, 50, height);
      if (isAdd) {
        this.addChild(node);
      } else {
        this.parent.deleteChild(this);
      }
    } else {
      if (this.children.length) {
        for (let i = 0; i < this.children.length; i++) {
          this.children[i].click(x, y, isAdd);
        }
      }
    }
  }
}