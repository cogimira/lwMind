// 管理canvas是窗口的矩阵

export class ViewMartixs {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.translate = {
            x: 0,
            y: 0,
        }
        this.scale = 1;
    }

    setTranslate(translate) {
        this.translate = Object.assign({}, translate);
    }

    scaleAtPosition(x, y, newScale) {
        let oldScale = this.scale;
        let scaleRat = newScale / oldScale;
        let deltaVector = {
            x: this.translate.x - x,
            y: this.translate.y - y
        }
        let newTranslate = {
            x: x + deltaVector.x * scaleRat,
            y: y + deltaVector.y * scaleRat
        }

        this.translate = Object.assign({}, newTranslate);
        this.scale = newScale;
    }


}