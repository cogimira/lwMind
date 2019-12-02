// 代表一条边
import EventEmitter from "events";
import Uid from './util/uuid';
export class GraphEdge extends EventEmitter{
    constructor(uuid, startNode, endNode, type){
        super();
        this.uuid = uuid || Uid();
        this.startNode = startNode;
        this.endNode = endNode;

        // 边的类型
        this.type = type;
    }
}