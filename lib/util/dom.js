export default {
    eventOffsetDom(e, dom) {
        let domRects = dom.getBoundingClientRect();
        let clientX = e.clientX;
        let clientY = e.clientY;
        return {
          x: clientX - domRects.left,
          y: clientY - domRects.top
        }
      }
}