import EventEmitter from "events";
import "./css/input.css";

export class Input extends EventEmitter {
  constructor(container, position, targetTap) {
    super();
    this.targetTap = targetTap;
    this.position = position;
    this.container = container;
    this.containerWidth = container.offsetWidth;
    this.containerHeight = container.offsetHeight;
    this.menuWidth = 160;
    this.inputDom = null;
    let canvas = document.createElement("canvas");
    this.context = canvas.getContext("2d");
    this.context.font = "19px Microsoft YaHei";
    this.showInput();
  }

  sureClick() {
    let value = this.inputDom.value;
    this.emit("submit", {
      value: value,
      offset: {
        x: this.position.x,
        y: this.position.y
      },
      eventInput: this.inputDom
    });
  }

  cancleClick(e) {
    // e.stopPropagation();
    this.emit("cancle");
    e.preventDefault();
  }

  showInput() {
    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "container-div");
    containerDiv.style.left = parseInt(this.position.x) + "px";
    containerDiv.style.top = parseInt(this.position.y) + "px";

    let input = document.createElement("input");
    input.setAttribute("id", "graph-input");
    input.setAttribute("autofocus", "autofocus");
    input.setAttribute("value", this.targetTap.text);
    // ="autofocus"
    this.inputDom = input;
    this.inputDom.autofocus = "autofocus";
    this.inputDom.style.width = parseInt(this.context.measureText(this.targetTap.text).width)+"px";
    this.inputDom.onblur = (e) => {
      // alert(this.inputDom.value);
      this.sureClick(e);
    }

    this.inputDom.oninput = (e) => {
      let value = this.inputDom.value;
      let width = parseInt(this.context.measureText(value).width);
      this.inputDom.style.width = width + "px";
    }

    let input_button = document.createElement("span");
    input_button.innerHTML = "确定";

    // let cancle_button = document.createElement("span");
    // cancle_button.innerHTML = "取消";

    // cancle_button.setAttribute("class", "graph_ui-cancle-button");
    input_button.setAttribute("class", "graph_ui-input-button");
    this.bindMouseListener(input_button, "click", this.sureClick.bind(this));
    // this.bindMouseListener(cancle_button, "click", this.cancleClick.bind(this));

    containerDiv.appendChild(input);
    containerDiv.appendChild(input_button);
    // containerDiv.appendChild(cancle_button);

    this.containerDiv = containerDiv;
    this.container.appendChild(this.containerDiv);
  }
  //   liDom.addEventListener('click', callback, false);
  bindMouseListener(dom, type, callback) {
    dom.addEventListener(type, callback, false);
  }

  dispose() {
    try{
      this.container.removeChild(this.containerDiv);
    } catch(err) {
      // console.error(err);
    }
  }
}
