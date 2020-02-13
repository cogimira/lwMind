import EventEmitter from "events";
import { DomEvent } from "./dom-event";
import keyControl from "./key-control";
import domUtil from "./util/dom";
import graphService from "./graph-service";
import { CanvasRedner } from "./render/canvas-render";
import global from "./global";
import worldTime from "./world-time";
import { Menu } from "./menu";

import { Mind } from "./core/mind";
import { MindNode } from "./core/mind-node";

export class GraphStage extends EventEmitter {
  constructor(canvas, options) {
    super();
    this.container = options.container;
    this.canvas = canvas;
    this.canvasEventer = new DomEvent(canvas);
    this.canvasEventer.addListenTarget(this);
    this.canvasRender = new CanvasRedner(canvas);
    this.test();
  }

  test() {
    let mind = new Mind();
    let rootMindNode = new MindNode(10, 400, 50, 20);
    this.rootMindNode = rootMindNode;

    // let mind1 = new MindNode(100, 250, 50, 20);
    // let mind2 = new MindNode(100, 250, 50, 20);
    // let mind3 = new MindNode(100, 250, 50, 20);

    // rootMindNode.addChild(mind1);
    // rootMindNode.addChild(mind2);
    // rootMindNode.addChild(mind3);

    // let mind11 = new MindNode(100, 250, 50, 20);
    // let mind12 = new MindNode(100, 250, 50, 20);
    // let mind13 = new MindNode(100, 250, 50, 90);
    // let mind14 = new MindNode(100, 250, 50, 20);
    // let mind15 = new MindNode(100, 250, 50, 20);
    // let mind16 = new MindNode(100, 250, 50, 20);
    // mind1.addChild(mind11);
    // mind1.addChild(mind12);
    // mind1.addChild(mind13);
    // mind1.addChild(mind14);
    // mind1.addChild(mind15);
    // mind1.addChild(mind16);

    // let mind21 = new MindNode(100, 250, 50, 20);
    // let mind22 = new MindNode(100, 250, 50, 70);
    // let mind23 = new MindNode(100, 250, 50, 20);
    // let mind24 = new MindNode(100, 250, 50, 20);
    // mind2.addChild(mind21);
    // mind2.addChild(mind22);
    // mind2.addChild(mind23);
    // mind2.addChild(mind24);

    // let mind211 = new MindNode(100, 250, 50, 20);
    // let mind221 = new MindNode(100, 250, 50, 20);
    // let mind231 = new MindNode(100, 250, 50, 50);
    // let mind241 = new MindNode(100, 250, 50, 20);
    // mind22.addChild(mind211);
    // mind22.addChild(mind221);
    // mind22.addChild(mind231);
    // mind22.addChild(mind241);

    rootMindNode.render(this.canvasRender);
    window.rootMindNode = rootMindNode;
  }

  mouseMove(e) {
    if (this.isDragging) {
      let currentPos = domUtil.eventOffsetDom(e, this.canvas);
      let deltaPos = {
        x: currentPos.x - this.startPosition.x,
        y: currentPos.y - this.startPosition.y
      };
      this.canvasRender.clear();
      this.canvasRender.dragging(deltaPos.x, deltaPos.y);
      this.rootMindNode.render(this.canvasRender);
    }
  }

  mouseDown(e) {
    // if (keyControl.checkKeysDown(["command"])) {
      this.isDragging = true;
      this.startPosition = domUtil.eventOffsetDom(e, this.canvas);
      this.canvasRender.startDrag(this.startPosition.x, this.startPosition.y);
    // }
  }

  mouseUp(e) {
    this.isDragging = false;
    let currentPos = domUtil.eventOffsetDom(e, this.canvas);
      let deltaPos = {
        x: currentPos.x - this.startPosition.x,
        y: currentPos.y - this.startPosition.y
      };
    this.canvasRender.reduceDragging(deltaPos.x, deltaPos.y);
  }

  click(e) {
    let a = domUtil.eventOffsetDom(e, this.canvas);
    a.x -= this.canvasRender.translate.x;
    a.y -= this.canvasRender.translate.y;
    if (!keyControl.checkKeysDown(["command"])) {
      
      // console.log(a.x +","+a.y);
      this.rootMindNode.click(a.x, a.y, true);
      this.canvasRender.clear();
      this.rootMindNode.render(this.canvasRender);
    } else {
      // let a = domUtil.eventOffsetDom(e, this.canvas);
      // console.log(a.x +","+a.y);
      this.rootMindNode.click(a.x, a.y, false);
      this.canvasRender.clear();
      this.rootMindNode.render(this.canvasRender);
    }
  }
}

// let previous = 0
// requestAnimationFrame(function tick (time) {
//   const duration = time - previous
//   worldTime.tick((value) => Math.round(value * duration / 1000))
//   previous = time
//   requestAnimationFrame(tick)
// })
