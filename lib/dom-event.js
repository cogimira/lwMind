import EventEmitter from "events";

export class DomEvent extends EventEmitter {
  constructor(dom) {
    super();
    if(!dom) {
        dom = document;
    }
    this.targetSet = new Set();
    let mup = this.mouseUp.bind(this);
    let mmv = this.mouseMove.bind(this);
    let md = this.mouseDown.bind(this);
    let click = this.click.bind(this);
    dom.addEventListener("mouseup", mup);
    dom.addEventListener("mousemove", mmv);
    dom.addEventListener("mousedowm", md);
    dom.addEventListener("click", click);
  }
  addListenTarget(target) {
    this.targetSet.add(target);
  }

  deleteListenTarget(target) {
    this.targetSet.delete(target);
  }
  mouseUp(e) {
    this.targetSet.forEach(element => {
      if (element.mouseUp && typeof element.mouseUp === "function") {
        element.mouseUp(e);
      }
    });
  }
  mouseMove(e) {
    this.targetSet.forEach(element => {
      if (element.mouseMove && typeof element.mouseMove === "function") {
        element.mouseMove(e);
      }
    });
  }

  mouseDown(e) {
    this.targetSet.forEach(element => {
      if (element.mouseDown && typeof element.mouseDown === "function") {
        element.mouseDown(e);
      }
    });
  }

  click(e) {
    this.targetSet.forEach(element => {
      if (element.click && typeof element.click === "function") {
        element.click(e);
      }
    });
  }
}
