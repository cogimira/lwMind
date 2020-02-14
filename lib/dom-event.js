import EventEmitter from "events";
// import Hammer from 'hammerjs';

export class DomEvent extends EventEmitter {
  constructor(dom) {
    super();
    if(!dom) {
        dom = document;
    }
    // this.hammer = new Hammer(dom);
    this.targetSet = new Set();
    let mup = this.mouseUp.bind(this);
    let mmv = this.mouseMove.bind(this);
    let md = this.mouseDown.bind(this);
    let click = this.click.bind(this);
    if(this.isPC()) {
      dom.addEventListener("mouseup", mup);
      dom.addEventListener("mousemove", mmv);
      dom.addEventListener("click", click);
      dom.addEventListener("mousedown", md);
    } else {
      // dom.addEventListener("click", click);
      dom.addEventListener("touchstart", (e) => {
        md(e.targetTouches[0]);
      })
      dom.addEventListener("touchmove", (e) => {
        mmv(e.targetTouches[0]);
      })
      // dom.addEventListener("touchmove", (e) => {
      //   click(e.targetTouches[0]);
      // })
      dom.addEventListener("touchend", (e) => {
        mup(e.changedTouches[0]);
      })
      // dom.addEventListener("touchend", (e) => {
      //   click(e.targetTouches[0]);
      // })
      // this.hammer.get('pan').set({direction: Hammer.DIRECTION_ALL}) // 要设定方向才会开启垂直方向的移动
      // this.hammer.on('panstart', (e) => {
      //   // console.log(e);
      //   md(e.srcEvent);
      // })
      // // 上拉
      // this.hammer.on('panup', (e) => {
      //   // console.log(e);
      //   mmv(e.srcEvent);
      // })
      // this.hammer.on('panend', (e) => {
      //   // console.log(e);
      //   mup(e.srcEvent);
      // })
      // // 移动端
      // this.hammer.on('press', function(ev) {
      //   // console.log(ev);
      // });
      // this.hammer.on('tap', (e) => {
      //   // console.log(e);
      //   click(e.srcEvent);
      // })
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
