export class Mind {
  constructor() {
    this.roots = [];
  }

  addRoot(mindNode) {
    if (mindNode.parent) {
      return;
    }
    this.roots.push(mindNode);
  }

  render(renderer) {
      for(let i = 0; i < this.roots.length;) {
          this.roots[i].render(renderer);
      }
  }
}
