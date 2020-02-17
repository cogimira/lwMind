export class WaterfallMindMode {
    constructor(mindNode) {
        this.mindNode = mindNode;
        this.parent = null;
        this.children = [];

        this.text = this.mindNode.text;

        this.showObj = {
            x: 0,
            y: 0,
            width: 200,
            height: 100
        }
    }

    addChild(child) {
        this.children.push(child); 
        child.parent = this;
    }

    layout(rect) {
        let width = rect.width;
        let everyWidth = width / this.children.length;
        for(let i = 0; i < this.children.length; i++) {
            let x =  rect.x + i * everyWidth * 0.8 + i * everyWidth * 0.2 + everyWidth * 0.1;
            this.children[i].showObj.x = x;
            this.children[i].showObj.y = rect.y;
            this.children[i].showObj.width = everyWidth * 0.8;
            this.children[i].showObj.height = rect .height;

        }
    }
}