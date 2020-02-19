export class DebugPan {
    constructor(container) {
        this.container = container;
        this.showPan();
    }

    showPan() {
        let containerDiv = document.createElement("div");
        containerDiv.style.position = "absolute";
        containerDiv.style.right = 0;
        containerDiv.style.top = 0;
        containerDiv.style.width = "30%";
        containerDiv.style.height = "100%";
        containerDiv.style.background = 'black';
        containerDiv.style.color = 'white';

        this.containerDiv = containerDiv;

        let containerDivInner = document.createElement("div");
        this.containerDivInner = containerDivInner;
        this.containerDiv.appendChild(containerDivInner);
        
        this.container.appendChild(this.containerDiv);
    }

    setText(text) {
        this.containerDivInner.innerText = text;
    }

    refreshInner() {
        this.containerDiv.removeChild(this.containerDivInner);

        let containerDivInner = document.createElement("div");
        this.containerDivInner = containerDivInner;
        this.containerDiv.appendChild(containerDivInner);
    }

    showObj(obj){
        this.refreshInner();
        for(let i in obj) {
            let divItem = document.createElement("div");
            let spanHeader = document.createElement("span");
            spanHeader.innerText = i +":";
            spanHeader.style.display = "inline-block";
            spanHeader.style.background = "orange";
            spanHeader.style.color = "black";
            spanHeader.style.float = "left";
            // spanHeader.style.border = "1px solid white";
            divItem.style.marginBottom = "2px";

            let spanValue = document.createElement("span");
            spanValue.style.display = "inline-block";
            spanValue.innerText =JSON.stringify(obj[i]);
            
            divItem.appendChild(spanHeader);
            divItem.appendChild(spanValue);
            this.containerDivInner.appendChild(divItem);
        }
    }
}