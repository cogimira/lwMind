import EventEmitter from "events";
import { DomEvent } from "./dom-event";
import keyControl from "./key-control";

export class GraphStage extends EventEmitter {
  constructor(canvas) {
    super();
    this.canvas = canvas;
    this.canvasEventer = new DomEvent();
    this.canvasEventer.addListenTarget(this);
  }

  mouseMove(e) {
    // console.log(this);
    // console.log(e);
  }

  mouseDown(e) {

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
