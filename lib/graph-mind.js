import global from './global';

class GraphMind {
    constructor(){
        this.nodeMap = new Map();
        this.edgeMap = new Map();
    }

    dragStart(e) {
        
    }

    tick(scale){
        this.nodeMap.forEach((node, uuid) => {
            if(global.canvasRender) {
                node.render(global.canvasRender);
            }
        });
    }
}

export default new GraphMind();