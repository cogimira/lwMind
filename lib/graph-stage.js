import EventEmitter from "events";
import { DomEvent } from "./dom-event";
import domUtil from "./util/dom";

import { CanvasRedner } from "./render/canvas-render";
import {WaterfallRender} from './render/waterfall-render'

import { Mind } from "./core/mind";
import { MindNode } from "./core/mind-node";
import { Interaction } from "./core/interaction";
import { NodeDragger } from "./core/node-dragger";
import {NodeSelectMenu} from './core/node-select-menu';
import {ViewMartixs} from './core/view-martix';

import keyControl from './key-control';

import {MindEditManager} from './core/mind-edit-manager';

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
    this.editModel = "tree";

    this.viewMartixs = new ViewMartixs(this.canvas.width, this.canvas.height);
    this.start();
  }

  start() {
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
    this.clearMenu();

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

  clearMenu() {
    if(this.nodeSelectMenu) {
      this.nodeSelectMenu.dispose();
      this.nodeSelectMenu = null;
    }
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
      this.clearMenu();
      this.nodeSelectMenu = new  NodeSelectMenu(this.container, targetTap, {
        offset: offset,
        menuData: [{
          command: "addChild",
          label: "添加下级"
        },{
          command: "layout",
          label: "排列"
        },{
          command: "waterfallEdit",
          label: "瀑布编辑模式"
        }]
      });
      this.nodeSelectMenu.on("menuCommand", (command) => {
        if(command === "layout") {
          targetTap.reLayout(targetTap);
          this.reRender();
          this.nodeSelectMenu.dispose();
          this.nodeSelectMenu = null;
        }
        if(command === "waterfallEdit") {
          // let waterRoot = targetTap.children.length > 0 ? targetTap : 
          this.editModel = "waterfall";
          let waterfallRender = new WaterfallRender(this.canvasRender, targetTap);
          this.waterfallRender = waterfallRender;
          waterfallRender.render();
        }
        if(command === "addChild") {
          targetTap.addDefualtChild();
          this.reRender();
          this.clearMenu();
        }
      });
      
      if(keyControl.checkKeysDown(["command"])) {
        targetTap.addDefualtChild();
        this.clearMenu();
      }
      this.selected.forEach(node => {
        node.selected = false;
      });
      this.selected.clear();
      targetTap.selected = true;
      this.selected.add(targetTap);
      this.reRender();
    } else {
      this.clearMenu();
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
