import EventEmitter from "events";

// import Hammer from 'hammerjs';

export class DomEvent extends EventEmitter {
  constructor(dom) {
    super();
    if(!dom) {
        dom = document;
    }
    // this.hammer = new Hammer(dom);
    this.sourceTarget = dom;
    this.targetSet = new Set();

    // 点击
    this.tapBind = this.tap.bind(this);
    this.dragStartBind = this.dragStart.bind(this);
    this.draggingBind = this.dragging.bind(this);
    this.dragEndBind = this.dragEnd.bind(this);
    this.mousewheelBind = this.mousewheel.bind(this);

    // 管理移动端双指
    this.startTouchs = [];
    this.touchsMove = [];
    

    this.pcDragging = false; // 支持pc端是否在拖拽当中

    this.pcMouseMove = this.mouseMove.bind(this);
    if(this.isPC()) {
      dom.addEventListener("mousewheel", (e) => {
        this.mousewheelBind(e);
      })
      dom.addEventListener("mouseup", (e) => {
        this.pcDragging = false;
        this.dragEndBind(e);
      });
      dom.addEventListener("mousemove", (e) => {
        if(this.pcDragging) {
          this.draggingBind(e);
        } else {
          this.pcMouseMove(e);
        }
      });
      dom.addEventListener("click", (e) => {
        this.tapBind(e);
      });
      dom.addEventListener("mousedown", (e) => {
        this.pcDragging = true;
        this.dragStartBind(e);
      });
    } else {
      dom.addEventListener("click", (e) => {
        this.tapBind(e);
      });
      dom.addEventListener("touchstart", (e) => {
        
        this.dragStartBind(e.targetTouches[0]);
      })
      dom.addEventListener("touchmove", (e) => {
        this.draggingBind(e.targetTouches[0]);
        e.preventDefault(); 
      })
      dom.addEventListener("touchend", (e) => {
        this.dragEndBind(e.changedTouches[0]);
      })
    }
    
  }

  isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
  addListenTarget(target) {
    this.targetSet.add(target);
  }

  deleteListenTarget(target) {
    this.targetSet.delete(target);
  }

  mousewheel(e) {
    this.targetSet.forEach(element => {
      if (element.mousewheel && typeof element.mousewheel === "function") {
        element.mousewheel(e);
      }
    });
  }

  // 敲击屏幕，pc端相当于点击，
  tap(e) {
    this.targetSet.forEach(element => {
      if (element.tap && typeof element.tap === "function") {
        element.tap(e);
      }
    });
  }

  // 在元素上面拖拽
  dragStart(e) {
    this.targetSet.forEach(element => {
      if (element.dragStart && typeof element.dragStart === "function") {
        element.dragStart(e);
      }
    });
  }

  // 拖拽
  dragging(e) {
    this.targetSet.forEach(element => {
      if (element.dragging && typeof element.dragging === "function") {
        element.dragging(e);
      }
    });
  }

  // 结束拖拽
  dragEnd(e) {
    this.targetSet.forEach(element => {
      if (element.dragEnd && typeof element.dragEnd === "function") {
        element.dragEnd(e);
      }
    });
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
