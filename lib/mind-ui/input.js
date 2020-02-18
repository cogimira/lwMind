import EventEmitter from "events";
import "./css/input.css";

export class Input extends EventEmitter {
  constructor(container, position) {
    super();
    this.position = position;
    this.container = container;
    this.containerWidth = container.offsetWidth;
    this.containerHeight = container.offsetHeight;
    this.menuWidth = 160;
    this.inputDom = null;
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
    this.inputDom = input;

    let input_button = document.createElement("span");
    input_button.innerHTML = "确定";

    let cancle_button = document.createElement("span");
    cancle_button.innerHTML = "取消";

    cancle_button.setAttribute("class", "graph_ui-cancle-button");
    input_button.setAttribute("class", "graph_ui-input-button");
    this.bindMouseListener(input_button, "click", this.sureClick.bind(this));
    this.bindMouseListener(cancle_button, "click", this.cancleClick.bind(this));

    containerDiv.appendChild(input);
    containerDiv.appendChild(input_button);
    containerDiv.appendChild(cancle_button);

    this.containerDiv = containerDiv;
    this.container.appendChild(this.containerDiv);
  }
  //   liDom.addEventListener('click', callback, false);
  bindMouseListener(dom, type, callback) {
    dom.addEventListener(type, callback, false);
  }

  dispose() {
    this.container.removeChild(this.containerDiv);
  }
}
