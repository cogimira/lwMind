(function(t){function e(e){for(var i,s,o=e[0],h=e[1],c=e[2],d=0,g=[];d<o.length;d++)s=o[d],a[s]&&g.push(a[s][0]),a[s]=0;for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(t[i]=h[i]);l&&l(e);while(g.length)g.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var h=n[o];0!==a[h]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],h=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=h;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"canvasContainer",attrs:{id:"app"}},[n("canvas",{ref:"canvas",attrs:{id:"canvas"}})])},r=[],s=(n("ac6a"),n("5df3"),n("4f7f"),n("d225")),o=n("b0b4"),h=n("308d"),c=n("6bb5"),l=n("013f"),d=n("4e2b"),g=n("faa1"),u=n.n(g),f=function(t){function e(t){var n;return Object(s["a"])(this,e),n=Object(h["a"])(this,Object(c["a"])(e).call(this)),t||(t=document),n.sourceTarget=t,n.targetSet=new Set,n.tapBind=n.tap.bind(Object(l["a"])(n)),n.dragStartBind=n.dragStart.bind(Object(l["a"])(n)),n.draggingBind=n.dragging.bind(Object(l["a"])(n)),n.dragEndBind=n.dragEnd.bind(Object(l["a"])(n)),n.pcDragging=!1,n.pcMouseMove=n.mouseMove.bind(Object(l["a"])(n)),n.isPC()?(t.addEventListener("mouseup",function(t){n.pcDragging=!1,n.dragEndBind(t)}),t.addEventListener("mousemove",function(t){n.pcDragging?n.draggingBind(t):n.pcMouseMove(t)}),t.addEventListener("click",function(t){n.tapBind(t)}),t.addEventListener("mousedown",function(t){n.pcDragging=!0,n.dragStartBind(t)})):(t.addEventListener("click",function(t){n.tapBind(t)}),t.addEventListener("touchstart",function(t){n.dragStartBind(t.targetTouches[0])}),t.addEventListener("touchmove",function(t){n.draggingBind(t.targetTouches[0]),t.preventDefault()}),t.addEventListener("touchend",function(t){n.dragEndBind(t.changedTouches[0])})),n}return Object(d["a"])(e,t),Object(o["a"])(e,[{key:"isPC",value:function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,i=0;i<e.length;i++)if(t.indexOf(e[i])>0){n=!1;break}return n}},{key:"addListenTarget",value:function(t){this.targetSet.add(t)}},{key:"deleteListenTarget",value:function(t){this.targetSet.delete(t)}},{key:"tap",value:function(t){this.targetSet.forEach(function(e){e.tap&&"function"===typeof e.tap&&e.tap(t)})}},{key:"dragStart",value:function(t){this.targetSet.forEach(function(e){e.dragStart&&"function"===typeof e.dragStart&&e.dragStart(t)})}},{key:"dragging",value:function(t){this.targetSet.forEach(function(e){e.dragging&&"function"===typeof e.dragging&&e.dragging(t)})}},{key:"dragEnd",value:function(t){this.targetSet.forEach(function(e){e.dragEnd&&"function"===typeof e.dragEnd&&e.dragEnd(t)})}},{key:"mouseUp",value:function(t){this.targetSet.forEach(function(e){e.mouseUp&&"function"===typeof e.mouseUp&&e.mouseUp(t)})}},{key:"mouseMove",value:function(t){this.targetSet.forEach(function(e){e.mouseMove&&"function"===typeof e.mouseMove&&e.mouseMove(t)})}},{key:"mouseDown",value:function(t){this.targetSet.forEach(function(e){e.mouseDown&&"function"===typeof e.mouseDown&&e.mouseDown(t)})}},{key:"click",value:function(t){this.targetSet.forEach(function(e){e.click&&"function"===typeof e.click&&e.click(t)})}}]),e}(u.a),v={eventOffsetDom:function(t,e){var n=e.getBoundingClientRect(),i=t.clientX,a=t.clientY;return{x:i-n.left,y:a-n.top}}},y=(n("6c7b"),function(){function t(e){Object(s["a"])(this,t),this.canvas=e,this.context=e.getContext("2d"),this.ratio=this.getPixelRatio(this.context),this.translate={x:0,y:0},this.lastTranslate={x:0,y:0}}return Object(o["a"])(t,[{key:"startDrag",value:function(t,e){this.lastTranslate={x:this.translate.x,y:this.translate.y}}},{key:"reduceDragging",value:function(t,e){this.translate={x:this.lastTranslate.x+t,y:this.lastTranslate.y+e}}},{key:"dragging",value:function(t,e){this.context.translate(-this.translate.x,-this.translate.y),this.context.translate(this.lastTranslate.x+t,this.lastTranslate.y+e),this.translate.x=t+this.lastTranslate.x,this.translate.y=e+this.lastTranslate.y}},{key:"getPixelRatio",value:function(t){var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e}},{key:"renderNode",value:function(t){this.context.save(),this.context.translate(t.x,t.y),this.context.beginPath(),this.context.arc(0,0,t.r/2,0,2*Math.PI),this.context.fill(),this.context.restore()}},{key:"clear",value:function(){this.context.save(),this.context.translate(-this.translate.x,-this.translate.y),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.restore()}},{key:"renderMindRoot",value:function(t){if(this.renderMindNode(t),t.children.length)for(var e=0;e<t.children.length;e++)this.renderMindRoot(t.children[e])}},{key:"renderMindNode",value:function(t){if(this.context.save(),this.context.translate(t.showObjRect.x,t.showObjRect.y),this.context.fillStyle=t.color,this.context.beginPath(),this.context.rect(0,0,t.showObjRect.width,t.showObjRect.height),this.context.fill(),t.selected&&(this.context.strokeStyle="pink",this.context.strokeWidth="8",this.context.stroke()),this.context.restore(),this.context.save(),this.context.translate(t.showObjRect.x,t.showObjRect.y),this.context.beginPath(),this.context.fillStyle="white",this.context.font="18px serif",this.context.textAlign="center",this.context.fillText(t.text,t.showObjRect.width/2,t.showObjRect.height/2+9),this.context.fill(),this.context.restore(),t.parent){this.context.save(),this.context.translate(t.showObjRect.x,t.showObjRect.y+t.showObjRect.height/2),this.context.strokeStyle="pink",this.context.beginPath(),this.context.moveTo(0,0);var e=t.parent.showObjRect,n={x:e.x+e.width-t.showObjRect.x,y:e.y+e.height/2-(t.showObjRect.y+t.showObjRect.height/2)};this.context.bezierCurveTo(-60,0,n.x+15,n.y,n.x,n.y),this.context.lineTo(n.x,n.y),this.context.stroke(),this.context.restore()}}}]),t}()),x=function(){function t(){Object(s["a"])(this,t),this.roots=[]}return Object(o["a"])(t,[{key:"addRoot",value:function(t){t.parent||this.roots.push(t)}},{key:"render",value:function(t){for(var e=0;e<this.roots.length;)this.roots[e].render(t)}}]),t}(),p=(n("d263"),function(){function t(e,n,i,a){Object(s["a"])(this,t),this.x=e||0,this.y=n||0;var r=["red","black","green","pink","blue","orange"];this.color=r[parseInt(Math.random()*r.length)],this.text=parseInt(20*Math.random())+"",this.width=i||50,this.height=a||20,this.marginVertical=5,this.marginHorizontal=40,this.selected=!1,this.marginWidth=this.width+2*this.marginHorizontal,this.marginHeight=this.height+2*this.marginVertical,this.parent=null,this.children=[],this.showObjRect={x:this.x,y:this.y,width:this.width,height:this.height},this.fixed=!1}return Object(o["a"])(t,[{key:"getMarginRect",value:function(){return{x:this.x-this.marginHorizontal,y:this.y-this.marginHeight/2+this.height/2,width:this.marginWidth,height:this.marginHeight}}},{key:"getChildrenMarginHeight",value:function(){for(var t=0,e=0;e<this.children.length;e++){var n=this.children[e];n.fixed||(t+=n.marginHeight)}return t}},{key:"addChild",value:function(t){this.children.push(t),t.parent&&(t.parent.marginHeight-=t.marginHeight,t.parent.deleteChild(t)),t.parent=this,this.recursionCalMarginRect(t),this.calLayout(this,1)}},{key:"recursionCalMarginRect",value:function(t){if(t.parent){var e=t.parent.getChildrenMarginHeight();if(!(e<=t.parent.marginHeight)){var n=t.parent;n.marginHeight=e,this.recursionCalMarginRect(n)}}}},{key:"afterDeleteChildRect",value:function(t,e){var n=t.getChildrenMarginHeight();if(0==t.children.length)t.marginHeight=t.height+2*t.marginVertical;else{var i=t.height+2*t.marginVertical;t.marginHeight=n>i?n:i}t.parent&&this.afterDeleteChildRect(t.parent,e)}},{key:"calLayoutIgnoreChild",value:function(t){this.calLayoutNoChild(this,t,1)}},{key:"deleteChild",value:function(t){for(var e=this.getChildrenMarginHeight(),n=0;n<this.children.length;n++)t==this.children[n]&&this.children.splice(n,1);this.afterDeleteChildRect(this,e),this.calLayout(this,1)}},{key:"calMarginRect",value:function(){for(var t={width:this.width+2*this.marginHorizontal,height:this.height+2*this.marginVertical},e=0,n=0;n<this.children.length;n++){var i=this.children[n];e+=i.marginHeight}return t.height=t.height>e?t.height:e,t}},{key:"addDefualtChild",value:function(){var e=new t;this.addChild(e),this.calLayout(this,1)}},{key:"calLayoutNoChild",value:function(t,e,n){for(var i=t.getChildrenMarginHeightNoChild(e),a=t.x+t.marginWidth,r=t.y+t.height/2-i/2,s=0,o=0;o<t.children.length;o++){var h=t.children[o];e===h||h.fixed||(h.showObjRect.x=a,h.x=a,h.showObjRect.y=r+s+h.marginHeight/2-h.height/2,h.y=h.showObjRect.y,s+=h.marginHeight)}for(var c=0;c<t.children.length;c++)e===t.children[c]||t.children[c].fixed||this.calLayout(t.children[c],++n)}},{key:"getChildrenMarginHeightNoChild",value:function(t){for(var e=0,n=0;n<this.children.length;n++){var i=this.children[n];t===i||i.fixed||(e+=i.marginHeight)}return e}},{key:"calLayout",value:function(t,e){for(var n=t.getChildrenMarginHeight(),i=t.x+t.marginWidth,a=t.y+t.height/2-n/2,r=0,s=0;s<t.children.length;s++){var o=t.children[s];o.fixed||(o.showObjRect.x=i,o.x=i,o.showObjRect.y=a+r+o.marginHeight/2-o.height/2,o.y=o.showObjRect.y,r+=o.marginHeight)}for(var h=0;h<t.children.length;h++)t.children[h].fixed||this.calLayout(t.children[h],++e)}},{key:"render",value:function(t){t.renderMindRoot(this)}}]),t}()),b=function(){function t(){Object(s["a"])(this,t)}return Object(o["a"])(t,[{key:"positionInRect",value:function(t,e){var n={x:t.x-e.x,y:t.y-e.y};return n.x>0&&n.x<e.width&&n.y>0&&n.y<e.height}},{key:"collisionTree",value:function(t,e){var n={x:e.x,y:e.y,width:e.width,height:e.height};if(this.positionInRect(t,n))return e;if(e.children.length)for(var i=0;i<e.children.length;i++){var a=e.children[i],r=this.collisionTree(t,a);if(r)return r}}}]),t}(),m=function(){function t(e,n){Object(s["a"])(this,t),this.graphStage=e,this.draggingTarget=n,this.startPosition=null,this.oldPosition={x:this.draggingTarget.x,y:this.draggingTarget.y}}return Object(o["a"])(t,[{key:"dragging",value:function(t){var e={x:t.x-this.startPosition.x,y:t.y-this.startPosition.y};this.draggingTarget.x=this.oldPosition.x+e.x,this.draggingTarget.y=this.oldPosition.y+e.y,this.draggingTarget.showObjRect.x=this.oldPosition.x+e.x,this.draggingTarget.showObjRect.y=this.oldPosition.y+e.y,this.graphStage.canvasRender.clear(),this.draggingTarget.calLayout(this.draggingTarget,1),this.draggingTarget.parent&&this.draggingTarget.parent.calLayoutIgnoreChild(this.draggingTarget),this.graphStage.rootMindNode.render(this.graphStage.canvasRender)}},{key:"dragEnd",value:function(t){this.draggingTarget.fixed=!0}}]),t}(),w=function(t){function e(t,n){var i;return Object(s["a"])(this,e),i=Object(h["a"])(this,Object(c["a"])(e).call(this)),i.container=n.container,i.canvas=t,i.canvasEventer=new f(t),i.mindGraph=new x,i.canvasEventer.addListenTarget(Object(l["a"])(i)),i.canvasEventer.addListenTarget(i.mindGraph),i.canvasRender=new y(t),i.mindGraph.mindRender=i.canvasRender,i.interaction=new b,i.selected=new Set,i.nodeDragger=null,i.test(),i}return Object(d["a"])(e,t),Object(o["a"])(e,[{key:"test",value:function(){var t=new p(10,window.innerHeight/2-10,50,20);this.mindGraph.addRoot(t),this.rootMindNode=t,t.render(this.canvasRender),window.rootMindNode=t}},{key:"dragging",value:function(t){var e=v.eventOffsetDom(t,this.canvas);if(this.isDragging){var n={x:e.x-this.startPosition.x,y:e.y-this.startPosition.y};this.canvasRender.clear(),this.canvasRender.dragging(n.x,n.y),this.rootMindNode.render(this.canvasRender)}this.nodeDragger&&this.nodeDragger.dragging(e)}},{key:"reRender",value:function(){this.canvasRender.clear(),this.rootMindNode.render(this.canvasRender)}},{key:"dragStart",value:function(t){this.startPosition=v.eventOffsetDom(t,this.canvas);var e=Object.assign({},this.startPosition);e.x-=this.canvasRender.translate.x,e.y-=this.canvasRender.translate.y;var n=this.interaction.collisionTree(e,this.rootMindNode);n?(this.nodeDragger=new m(this,n),this.nodeDragger.startPosition=this.startPosition):(this.isDragging=!0,this.canvasRender.startDrag(this.startPosition.x,this.startPosition.y))}},{key:"dragEnd",value:function(t){var e=v.eventOffsetDom(t,this.canvas);if(this.isDragging){this.isDragging=!1;var n={x:e.x-this.startPosition.x,y:e.y-this.startPosition.y};this.canvasRender.reduceDragging(n.x,n.y)}this.nodeDragger&&(this.nodeDragger.dragEnd(e),this.nodeDragger=null)}},{key:"tap",value:function(t){var e=v.eventOffsetDom(t,this.canvas);e.x-=this.canvasRender.translate.x,e.y-=this.canvasRender.translate.y;var n=this.interaction.collisionTree(e,this.rootMindNode);n?(n.addDefualtChild(),this.selected.forEach(function(t){t.selected=!1}),this.selected.clear(),n.selected=!0,this.selected.add(n),this.reRender()):this.selected.size>0&&(this.selected.forEach(function(t){t.selected=!1}),this.reRender(),this.selected.clear())}}]),e}(u.a),R={name:"app",data:function(){return{isFullScreen:!1}},methods:{toggleFullScreen:function(){this.isFullScreen?(this.$refs.canvasContainer.exitFullscreen?this.$refs.canvasContainer.exitFullscreen():this.$refs.canvasContainer.webkitCancelFullScreen?this.$refs.canvasContainer.webkitCancelFullScreen():this.$refs.canvasContainer.mozCancelFullScreen?this.$refs.canvasContainer.mozCancelFullScreen():document.msExitFullscreen&&this.$refs.canvasContainer.msExitFullscreen(),this.isFullScreen=!this.isFullScreen):(this.$refs.canvasContainer.requestFullscreen?this.$refs.canvasContainer.requestFullscreen():this.$refs.canvasContainer.webkitRequestFullScreen?this.$refs.canvasContainer.webkitRequestFullScreen():this.$refs.canvasContainer.mozRequestFullScreen?this.$refs.canvasContainer.mozRequestFullScreen():this.$refs.canvasContainer.msRequestFullscreen&&this.$refs.canvasContainer.msRequestFullscreen(),console.log("已全屏！"),this.isFullScreen=!this.isFullScreen)}},mounted:function(){document.body.addEventListener("touchmove",function(t){t.preventDefault()});var t=document.getElementById("canvas");t.setAttribute("width",document.body.offsetWidth),t.setAttribute("height",window.innerHeight);var e=document.getElementById("app");new w(t,{container:e})},components:{}},k=R,O=(n("034f"),n("2877")),j=Object(O["a"])(k,a,r,!1,null,null,null),S=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(S)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.a46a897e.js.map