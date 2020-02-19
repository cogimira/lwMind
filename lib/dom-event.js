import EventEmitter from "events";
import domUtil from "./util/dom";
import Hammer from 'hammerjs';

export class DomEvent extends EventEmitter {
  constructor(dom) {
    super();
    if(!dom) {
        dom = document;
    }
    this.hammer = new Hammer(dom);
    this.initHammer();
    this.sourceTarget = dom;
    this.targetSet = new Set();

    // 点击
    this.tapBind = this.tap.bind(this);
    this.dragStartBind = this.dragStart.bind(this);
    this.draggingBind = this.dragging.bind(this);
    this.dragEndBind = this.dragEnd.bind(this);
    this.mousewheelBind = this.mousewheel.bind(this);

    this.pinchBind = this.pinch.bind(this);

    // 管理移动端双指
    this.startTouchs = [];
    this.touchsMove = [];

    this.twoFingerStart = [];
    

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
      // dom.addEventListener("touchstart", (e) => {
      //  if(e.targetTouches.length > 1) {
      //    return;
      //  }
      //  this.hasStartDrag = true;
      //   this.dragStartBind(e.targetTouches[0]);
      // })
      // dom.addEventListener("touchmove", (e) => {
      //   if(e.targetTouches.length > 1) {
      //     this.hasStartDrag = false;
      //     return;
      //   }
      //   this.draggingBind(e.targetTouches[0]);
      //   e.preventDefault(); 
      // })
      // dom.addEventListener("touchend", (e) => {
        
      //   if(this.hasStartDrag && e.touches.length == 0) {
      //     this.dragEndBind(e.changedTouches[0]);
      //   }
      //   if(e.touches.length == 0) {
      //     console.log("没有手指在屏幕上面了");
      //     this.hasStartDrag = false;
      //   }
      // })
    }
    
  }

  initHammer() {
    this.hammer.get('pinch').set({ enable: true });
    this.hammer.on('doubletap', (e) => {
      console.log(e);
      document.getElementsByTagName("title")[0].innerText = "doubletap";
    })

    this.hammer.on('pinch', (e) => {
      console.log(e);
      // document.getElementsByTagName("title")[0].innerText = JSON.stringify(e.center) + e.scale;
      this.pinchBind(e);
    })

    this.hammer.on("panstart", (e) => {
      this.dragStartBind(e);
    });

    this.hammer.on("panmove", (e) => {
      this.draggingBind(e);
    });

    this.hammer.on("panend", (e) => {
      this.dragEndBind(e);
    });
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

  pinch(e) {
    this.targetSet.forEach(element => {
      if (element.pinch && typeof element.pinch === "function") {
        element.pinch(e);
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
