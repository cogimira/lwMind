import EventEmitter from "events";
import './css/pan.css'
// import panHtml from './html/pan.js'
// window.panHtml = panHtml;

export class EditPan extends EventEmitter {
    constructor(container, options) {
        super();
        this.container = container;
        this.options = options;
        
    }

    showPan() {
        let containerDiv = document.createElement("div");
        
    }

    dispose() {

    }
}