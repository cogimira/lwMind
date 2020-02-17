import EventEmitter from "events";

export class NodeSelectMenu extends EventEmitter{
    constructor(container, nodeTarget, data) {
        super();
        this.offset = data.offset;
        this.container = container;
        this.nodeTarget = nodeTarget;
        this.data = data;

        this.createMenu();
    }

    
    createMenu() {
        this.div = document.createElement("div");
        this.div.style.width = '180px';
        this.div.style.height = (35 * this.data.menuData.length + this.data.menuData.length * 12 - 12) + "px";
        this.div.style.lineHeight =  '35px';
        this.div.style.background =  'gray';
        this.div.style.fontSize =  '20px';
        this.div.style.borderRadius =  '4px';
        this.div.style.cursor= 'pointer';
        
        this.div.style.textAlign =  'left';
        this.div.style.position =  'absolute';
        this.div.style.left =  this.offset.x + 'px';
        this.div.style.top =  this.offset.y + 'px';
        for(let i = 0; i < this.data.menuData.length; i++) {
            let menuDiv = document.createElement("div");
            menuDiv.style.textIndent =  '5px';
            menuDiv.style.background =  'black';
            menuDiv.style.color =  'white';
            menuDiv.style.cursor= 'pointer';
            menuDiv.style.borderRadius =  "4px";
            menuDiv.style.margin =  '6px';
            menuDiv.innerText = this.data.menuData[i].label;
            let that = this;
            // let command = this.data.menuData[i].command;
            menuDiv.onclick = function(){
                that.emit("menuCommand", that.data.menuData[i].command);
            }
            this.div.appendChild(menuDiv);
        }
        this.container.appendChild(this.div);
    }

    dispose(){
        this.container.removeChild(this.div);
    }
}