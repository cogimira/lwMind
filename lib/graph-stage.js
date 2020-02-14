import EventEmitter from "events";
import { DomEvent } from "./dom-event";
import keyControl from "./key-control";
import domUtil from "./util/dom";
// import graphService from "./graph-service";
import { CanvasRedner } from "./render/canvas-render";
// import global from "./global";
// import worldTime from "./world-time";
// import { Menu } from "./menu";

import { Mind } from "./core/mind";
import { MindNode } from "./core/mind-node";
import {Interaction} from './core/interaction';

export class GraphStage extends EventEmitter {
  constructor(canvas, options) {
    super();
    this.container = options.container;
    this.canvas = canvas;
    this.canvasEventer = new DomEvent(canvas);
    this.mindGraph = new Mind();
    this.canvasEventer.addListenTarget(this);
    this.canvasEventer.addListenTarget(this.mindGraph);
    this.canvasRender = new CanvasRedner(canvas);
    this.mindGraph.mindRender = this.canvasRender;
    this.interaction = new Interaction();
    this.test();
  }

  test() {
    // this.mindGraph = new Mind();
    let rootMindNode = new MindNode(10, window.innerHeight / 2 - 10, 50, 20);
    this.mindGraph.addRoot(rootMindNode);
    this.rootMindNode = rootMindNode;
    rootMindNode.render(this.canvasRender);
    window.rootMindNode = rootMindNode;
  }

  dragging(e) {
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

  dragStart(e) {
    // if (keyControl.checkKeysDown(["command"])) {
      this.isDragging = true;
      this.startPosition = domUtil.eventOffsetDom(e, this.canvas);
      this.canvasRender.startDrag(this.startPosition.x, this.startPosition.y);
    // }
  }

  dragEnd(e) {
    this.isDragging = false;
    let currentPos = domUtil.eventOffsetDom(e, this.canvas);
      let deltaPos = {
        x: currentPos.x - this.startPosition.x,
        y: currentPos.y - this.startPosition.y
      };
    this.canvasRender.reduceDragging(deltaPos.x, deltaPos.y);
  }

  tap(e) {
    let a = domUtil.eventOffsetDom(e, this.canvas);
    a.x -= this.canvasRender.translate.x;
    a.y -= this.canvasRender.translate.y;
    
    let targetTap = this.interaction.collisionTree(a, this.rootMindNode);
    if(targetTap) {
      targetTap.selected = true;
    }
    // console.log(targetTap);
  }
}

// let previous = 0
// requestAnimationFrame(function tick (time) {
//   const duration = time - previous
//   worldTime.tick((value) => Math.round(value * duration / 1000))
//   previous = time
//   requestAnimationFrame(tick)
// })
