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
        this.div.style.width = '60px';
        this.div.style.height = 14 * this.data.menuData.length + "px";
        this.div.style.lineHeight =  '14px';
        this.div.style.fontSize =  '12px';
        
        this.div.style.textAlign =  'left';
        this.div.style.position =  'absolute';
        this.div.style.left =  this.offset.x + 'px';
        this.div.style.top =  this.offset.y + 'px';
        for(let i = 0; i < this.data.menuData.length; i++) {
            let menuDiv = document.createElement("div");
            menuDiv.style.background =  'orange';
            menuDiv.style.borderBottom =  '1px solid gray';
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