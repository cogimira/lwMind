// 图的节点
import Uid from "./util/uuid";
import { GraphEdge } from "./graph-edge";
import EventEmitter from "events";
import global from './global';
export class GraphNode extends EventEmitter {
  constructor(uuid, type, x, y, r, label) {
    super();
    this.uuid = uuid || Uid();
    this.x = x;
    this.y = y;
    this.r = r;
    // 节点的一种类型
    this.type = type;
    this.label = label || "默认值";
    // 边
    this.directOutEdges = [];
    this.directInEdges = [];
  }

  linkToTheNode(targetNode, edgeType) {
    let edge = new GraphEdge(null, this, targetNode, edgeType);
    let hasSameLink = this.findSameEdgeAndTargetNode(edgeType, targetNode);
    // 如果是一条重复的边，就不要连接了
    if (hasSameLink) {
      return;
    }
    this.directOutEdges.push(edge);
    targetNode.directInEdges.push(edge);
  }

  // 查找相同的类型，并且指向相同节点的边
  findSameEdgeAndTargetNode(edgeType, targetNode) {
    for (let i = 0; i < this.directOutEdges.length; i++) {
      let directedEdge = this.directOutEdges[i];
      if (edgeType === directedEdge.edgeType) {
        let directedNode = directedEdge.endNode;
        if (
          targetNode === directedNode &&
          targetNode.uuid === directedNode.uuid
        ) {
          return targetNode;
        }
      }
    }
    return null;
  }

  render(renderer) {
    let canvasRender = global.canvasRender;
    if(!canvasRender) {
      return;
    }
    canvasRender.renderNode(this);
  }
}
