import EventEmitter from "events";
import { DomEvent } from "./dom-event";
import keyControl from "./key-control";
import domUtil from './util/dom';
import graphService from './graph-service';
import {CanvasRedner} from './render/canvas-render';
import global from './global';
import worldTime from './world-time';
import {Menu} from './menu';

export class GraphStage extends EventEmitter {
  constructor(canvas, options) {
    super();
    this.container = options.container;
    this.canvas = canvas;
    this.canvasEventer = new DomEvent(canvas);
    this.canvasEventer.addListenTarget(this);
    global.canvasRender = new CanvasRedner(canvas);
  }

  mouseMove(e) {
    // console.log(this);
    // console.log(e);
  }

  mouseDown(e) {
    if(keyControl.checkKeysDown(['command'])) {
      let a = domUtil.eventOffsetDom(e, this.canvas);
      graphService.addNodeAtPosition(a.x, a.y);
    }
  }

  mouseUp(e) {
    // console.log(e);
  }

  click(e) {
    if (keyControl.checkKeysDown(["option"])) {
      console.log("option add");
      let a = domUtil.eventOffsetDom(e, this.canvas);
      if(this.menu) {
        this.menu.dispose();
      }
      this.menu = new Menu(this.container, {offset:{left: a.x, top: a.y}, menuData:[
        {label: "11111", command: "nice"},{label: "11111", command: "nice"},
        {label: "11111", command: "nice"},{label: "11111", command: "nice"},
        {label: "11111", command: "nice"}]});
      this.menu.on("menuCommand", (command) => {
        console.log(command);
      })
    }
  }
}



let previous = 0
requestAnimationFrame(function tick (time) {
  const duration = time - previous
  worldTime.tick((value) => Math.round(value * duration / 1000))
  previous = time
  requestAnimationFrame(tick)
})
