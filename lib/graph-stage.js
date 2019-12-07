import EventEmitter from "events";
import { DomEvent } from "./dom-event";
import keyControl from "./key-control";
import domUtil from './util/dom';
import graphService from './graph-service';
import {CanvasRedner} from './render/canvas-render';
import global from './global';
import worldTime from './world-time';

export class GraphStage extends EventEmitter {
  constructor(canvas) {
    super();
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
    let a = domUtil.eventOffsetDom(e, this.canvas);
    graphService.addNodeAtPosition(a.x, a.y);
  }

  mouseUp(e) {
    // console.log(e);
  }

  click(e) {
    if (keyControl.checkKeysDown(["option"])) {
      console.log("option add");
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
