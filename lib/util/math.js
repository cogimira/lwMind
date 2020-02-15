export default {
    pointInRect(point, rect) {
        let deltaVector = { x: point.x - rect.x, y: point.y - rect.y };
        if (
          deltaVector.x > 0 &&
          deltaVector.x < rect.width &&
          deltaVector.y > 0 &&
          deltaVector.y < rect.height
        ) {
            return true;
        } else {
            return false;
        }
      }
}