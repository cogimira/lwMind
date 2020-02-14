import EventEmitter from "events";
import { DomEvent } from "./dom-event";
import domUtil from "./util/dom";
import { CanvasRedner } from "./render/canvas-render";

import { Mind } from "./core/mind";
import { MindNode } from "./core/mind-node";
import { Interaction } from "./core/interaction";

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
    this.selected = new Set();
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

  reRender() {
    this.canvasRender.clear();
      this.rootMindNode.render(this.canvasRender);
  }

  dragStart(e) {
    this.isDragging = true;
    this.startPosition = domUtil.eventOffsetDom(e, this.canvas);
    this.canvasRender.startDrag(this.startPosition.x, this.startPosition.y);
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
    if (targetTap) {
      targetTap.addDefualtChild();
      this.selected.forEach((node) => {
        node.selected = false;
      });
      this.selected.clear();
      targetTap.selected = true;
      this.selected.add(targetTap);
      this.reRender();
      
    } else {
      if(this.selected.size > 0) {
        this.selected.forEach((node) => {
          node.selected = false;
        });
        this.reRender();
        this.selected.clear();
      }
    }
  }
}
