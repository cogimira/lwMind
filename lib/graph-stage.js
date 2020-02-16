import EventEmitter from "events";
import { DomEvent } from "./dom-event";
import domUtil from "./util/dom";
import { CanvasRedner } from "./render/canvas-render";

import { Mind } from "./core/mind";
import { MindNode } from "./core/mind-node";
import { Interaction } from "./core/interaction";
import { NodeDragger } from "./core/node-dragger";
import {NodeSelectMenu} from './core/node-select-menu';
import {ViewMartixs} from './core/view-martix';

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
    this.nodeDragger = null;
    this.nodeSelectMenu = null;

    this.viewMartixs = new ViewMartixs(this.canvas.width, this.canvas.height);
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
    let currentPos = domUtil.eventOffsetDom(e, this.canvas);
    if (this.isDragging) {
      // let currentPos = domUtil.eventOffsetDom(e, this.canvas);
      let deltaPos = {
        x: currentPos.x - this.startPosition.x,
        y: currentPos.y - this.startPosition.y
      };
      this.canvasRender.clear();
      this.canvasRender.dragging(deltaPos.x, deltaPos.y);
      this.rootMindNode.render(this.canvasRender);
    }
    if(this.nodeDragger) {
      this.nodeDragger.dragging(currentPos);
    }
  }

  reRender() {
    // this.canvasRender.context.save();
    this.canvasRender.clear();
    this.rootMindNode.calLayout(this.rootMindNode);
    this.rootMindNode.render(this.canvasRender);
  }

  mousewheel(e) {
    let time = new Date().getTime();
    if(this.lastTime) {
      if(this.lastTime - time < 200) {
        return;
      } else {
        this.lastTime = time;
      }
    }
    let scalePosition = domUtil.eventOffsetDom(e, this.canvas);
    if(e.deltaY < 0) {
      this.canvasRender.scale *= (1+0.05);
    } else{
      this.canvasRender.scale *= (1 - 0.05);
    }

    this.viewMartixs.scaleAtPosition(scalePosition.x, scalePosition.y, this.canvasRender.scale);

    this.canvasRender.translate.x = this.viewMartixs.translate.x;
    this.canvasRender.translate.y = this.viewMartixs.translate.y;

    // 单位化向量
    this.canvasRender.clear();
    this.rootMindNode.render(this.canvasRender);
    


  }

  dragStart(e) {
    if(this.nodeSelectMenu) {
      this.nodeSelectMenu.dispose();
      this.nodeSelectMenu = null;
    }
    this.startPosition = domUtil.eventOffsetDom(e, this.canvas);


    let a = Object.assign({}, this.startPosition);
    let martix = {
      x: this.canvasRender.translate.x,
      y: this.canvasRender.translate.y,
      k: this.canvasRender.scale
    }
    let newA = this.viewPoint2GlobalPoint(a.x, a.y, martix);
    a.x = newA.x;
    a.y = newA.y;


    let targetTap = this.interaction.collisionTree(a, this.rootMindNode);
    if (targetTap) {
      this.nodeDragger = new NodeDragger(this, targetTap);
      this.nodeDragger.startPosition = this.startPosition;
    } else {
      this.isDragging = true;
      this.canvasRender.startDrag(this.startPosition.x, this.startPosition.y);
    }
  }

  dragEnd(e) {
    let currentPos = domUtil.eventOffsetDom(e, this.canvas);
    if (this.isDragging) {
      this.isDragging = false;
      let deltaPos = {
        x: currentPos.x - this.startPosition.x,
        y: currentPos.y - this.startPosition.y
      };
      this.canvasRender.reduceDragging(deltaPos.x, deltaPos.y);
      this.viewMartixs.setTranslate(this.canvasRender.translate);
    }
    if(this.nodeDragger) {
      this.nodeDragger.dragEnd(currentPos);
      this.nodeDragger = null;
    }
  }

  viewPoint2GlobalPoint(x, y, martix) {
    const p = {
      x: (x - martix.x) / martix.k,
      y: (y - martix.y) / martix.k
    };
    return p;
  }

  tap(e) {
    let a = domUtil.eventOffsetDom(e, this.canvas);
    let offset = Object.assign({}, a);
    offset.x += 10;
    offset.y += 10;

    let martix = {
      x: this.canvasRender.translate.x,
      y: this.canvasRender.translate.y,
      k: this.canvasRender.scale
    }
    let newA = this.viewPoint2GlobalPoint(a.x, a.y,martix);
    a.x = newA.x;
    a.y = newA.y;

    let targetTap = this.interaction.collisionTree(a, this.rootMindNode);
    if (targetTap) {
      if(this.nodeSelectMenu) {
        this.nodeSelectMenu.dispose();
        this.nodeSelectMenu = null;
      }
      this.nodeSelectMenu = new  NodeSelectMenu(this.container, targetTap, {
        offset: offset,
        menuData: [{
          command: "layout",
          label: "排列"
        }]
      });
      this.nodeSelectMenu.on("menuCommand", (command) => {
        targetTap.reLayout(targetTap);
        // targetTap.calMarginHeight(targetTap);
        // targetTap.calLayout(targetTap);
        this.reRender();
        this.nodeSelectMenu.dispose();
        this.nodeSelectMenu = null;
      });
      targetTap.addDefualtChild();
      this.selected.forEach(node => {
        node.selected = false;
      });
      this.selected.clear();
      targetTap.selected = true;
      // targetTap.x += 20;
      // targetTap.showObjRect.x += 20;
      this.selected.add(targetTap);
      this.reRender();
    } else {
      if(this.nodeSelectMenu) {
        this.nodeSelectMenu.dispose();
      this.nodeSelectMenu = null;
      }
      
      if (this.selected.size > 0) {
        this.selected.forEach(node => {
          node.selected = false;
        });
        this.reRender();
        this.selected.clear();
      }
    }
  }
}
