export default {
    eventOffsetDom(e, dom) {
      if(e.center) {
        return Object.assign({}, e.center);
      }
        let domRects = dom.getBoundingClientRect();
        let clientX = e.clientX;
        let clientY = e.clientY;
        return {
          x: clientX - domRects.left,
          y: clientY - domRects.top
        }
      }
}