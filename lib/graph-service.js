// 代表一条边
import EventEmitter from "events";
import {GraphNode} from './graph-node';
import graphMind from './graph-mind';

class GraphService extends EventEmitter{
    constructor(){
        super();
    }

     addNodeAtPosition(x, y) {
        let graphNode = new GraphNode(null, null, x, y, 15);
        graphMind.nodeMap.set(graphNode.uuid, graphNode);
    }
}

export default new GraphService();