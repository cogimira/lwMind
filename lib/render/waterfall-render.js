// 瀑布编辑模式下

import { WaterfallMindMode } from "../core/waterfall-mind-node";
import mathUtil from "../util/math";

// pointInRect

export class WaterfallRender {
  constructor(graphStage, canvasRender, rootNode) {
    this.graphStage = graphStage;
    this.canvasRender = canvasRender;
    this.canvas = this.canvasRender.canvas;
    this.context = this.canvasRender.context;
    this.rootNode = rootNode;
    this.waterfallRoot = null;
    this.scale = 1;
    this.translate = {
      x: 0,
      y: 0
    };

    //
    this.copyWaterfallFrom(rootNode);
  }

  copyWaterfallFrom(rootNode) {
    let waterfallRoot = new WaterfallMindMode(rootNode);
    this.waterfallRoot = waterfallRoot;
    for (let i = 0; i < rootNode.children.length; i++) {
      let child = rootNode.children[i];
      let childWaterfallNode = new WaterfallMindMode(child);
      this.waterfallRoot.addChild(childWaterfallNode);
    }
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  tap(position) {
    if (mathUtil.pointInRect(position, this.waterfallRoot.showObj)) {
      let rootMindNode = this.waterfallRoot.mindNode;
      if (rootMindNode.parent) {
        // let mindNode = rootMindNode.parent;
        this.rootNode = rootMindNode.parent;
        this.waterfallRoot = null;
        this.scale = 1;
        this.translate = {
          x: 0,
          y: 0
        };
        this.copyWaterfallFrom(this.rootNode);
        this.render();
        return;
      } else {
          return;
      }
    }
      let findTarget = false;
    for (let i = 0; i < this.waterfallRoot.children.length; i++) {
      let child = this.waterfallRoot.children[i];
      if (mathUtil.pointInRect(position, child.showObj)) {
        let mindNode = child.mindNode;
        this.rootNode = mindNode;
        this.waterfallRoot = null;
        this.scale = 1;
        this.translate = {
          x: 0,
          y: 0
        };
        this.copyWaterfallFrom(this.rootNode);
        this.render();
        findTarget = true;
        break;
      }
    }

    if(!findTarget) {
        this.graphStage.goTreeModel();
    }
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

  renderRootNode(rootNode) {
    this.context.save();
    this.context.fillStyle = rootNode.mindNode.color;
    this.context.beginPath();
    this.context.rect(
      rootNode.showObj.x,
      rootNode.showObj.y,
      rootNode.showObj.width,
      rootNode.showObj.height
    );
    this.context.fill();
    this.context.restore();

    this.context.save();
    this.context.translate(rootNode.showObj.x, rootNode.showObj.y);
    this.context.beginPath();
    this.context.fillStyle = "white";
    this.context.font = "18px serif";
    this.context.textAlign = "center";
    this.context.fillText(
      rootNode.text,
      rootNode.showObj.width / 2,
      rootNode.showObj.height / 2 + 9
    );
    this.context.fill();
    this.context.restore();
  }

  renderChildren(children) {
    for (let i = 0; i < children.length; i++) {
      this.context.save();
      let child = children[i];
      this.context.translate(
        child.showObj.x + child.showObj.width / 2,
        child.showObj.y
      );
      this.context.strokeStyle = "pink";
      this.context.lineWidth = 8;
      this.context.beginPath();
      this.context.moveTo(0, 0);

      let parentShowObj = child.parent.showObj;
      let delta = {
        x:
          parentShowObj.x +
          parentShowObj.width -
          (child.showObj.x + child.showObj.width / 2),
        y: parentShowObj.y + parentShowObj.height / 2 - child.showObj.y
      };
      this.context.lineTo(0, delta.y);
      this.context.lineTo(delta.x, delta.y);
      // this.context.bezierCurveTo(0, -60 - (i+1)* 20, delta.x + (i+1) * 35, delta.y, delta.x, delta.y)
      // this.context.lineTo(delta.x, delta.y);
      this.context.stroke();
      this.context.restore();
    }
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      this.context.save();
      this.context.fillStyle = children[i].mindNode.color;
      this.context.beginPath();
      this.context.rect(
        child.showObj.x,
        child.showObj.y,
        child.showObj.width,
        child.showObj.height
      );
      this.context.fill();
      this.context.restore();

      this.context.save();
      this.context.translate(child.showObj.x, child.showObj.y);
      this.context.beginPath();
      this.context.fillStyle = "white";
      this.context.font = "18px serif";
      this.context.textAlign = "center";
      this.context.fillText(
        child.text,
        child.showObj.width / 2,
        child.showObj.height / 2 + 9
      );
      this.context.fill();
      this.context.restore();

      if(child.mindNode.children.length) {
        this.context.save();
        this.context.fillStyle = "black";
        this.context.translate(child.showObj.x + child.showObj.width / 2, child.showObj.y + child.showObj.height + 20);
        this.context.beginPath();
        this.context.arc(0,0,20,0,Math.PI*2,true);
        this.context.fill();
        this.context.restore();
      }
    }
  }
}
