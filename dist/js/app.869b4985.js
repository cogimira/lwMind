(function(t){function e(e){for(var n,s,h=e[0],o=e[1],c=e[2],d=0,g=[];d<h.length;d++)s=h[d],a[s]&&g.push(a[s][0]),a[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(g.length)g.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,h=1;h<i.length;h++){var o=i[h];0!==a[o]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var h=window["webpackJsonp"]=window["webpackJsonp"]||[],o=h.push.bind(h);h.push=e,h=h.slice();for(var c=0;c<h.length;c++)e(h[c]);var l=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),a=i.n(n);a.a},"03cf":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=i("5c96"),r=i.n(a),s=(i("0fae"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"canvasContainer",attrs:{id:"app"}},[i("canvas",{ref:"canvas",attrs:{id:"canvas"}}),t._m(0),t._m(1),i("div",{staticClass:"bottom-tool"},[i("el-row",[i("el-col",{attrs:{span:4}},[i("div",{staticClass:"grid-content bg-purple"},[t._v("同级主题")])]),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"grid-content bg-purple-light"},[t._v("子主题")])]),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"grid-content bg-purple"},[i("i",{staticClass:"el-icon-s-opportunity"})])]),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"grid-content bg-purple-light"},[t._v("瀑布模型")])]),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"grid-content bg-purple"},[i("i",{staticClass:"el-icon-notebook-2"})])]),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"grid-content bg-purple-light"},[i("i",{staticClass:"el-icon-menu"})])])],1),i("el-row",[i("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:4},placeholder:"请输入内容"},model:{value:t.textarea2,callback:function(e){t.textarea2=e},expression:"textarea2"}})],1),i("el-row",{staticClass:"text-row"},[i("el-col",{attrs:{span:4}},[i("div",{staticClass:"text-content"},[t._v("B")])]),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"text-content"},[t._v("颜色")])]),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"text-content"},[t._v("背景")])])],1)],1)])}),h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tool-top-left"},[i("i",{staticClass:"el-icon-arrow-left"}),i("i",{staticClass:"el-icon-refresh-left"}),i("i",{staticClass:"el-icon-refresh-right"}),i("i",{staticClass:"el-icon-document"}),i("i",{staticClass:"el-icon-more"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tool-top-right"},[i("span",[i("i",{staticClass:"el-icon-setting"})]),i("span",[i("i",{staticClass:"el-icon-files"})])])}],o=(i("ac6a"),i("5df3"),i("4f7f"),i("d225")),c=i("b0b4"),l=i("308d"),d=i("6bb5"),g=i("013f"),u=i("4e2b"),f=i("faa1"),v=i.n(f),x={eventOffsetDom:function(t,e){if(t.center)return Object.assign({},t.center);var i=e.getBoundingClientRect(),n=t.clientX,a=t.clientY;return{x:n-i.left,y:a-i.top}}},y=i("c8b5"),p=i.n(y),w=function(t){function e(t){var i;return Object(o["a"])(this,e),i=Object(l["a"])(this,Object(d["a"])(e).call(this)),t||(t=document),i.hammer=new p.a(t),i.initHammer(),i.sourceTarget=t,i.targetSet=new Set,i.tapBind=i.tap.bind(Object(g["a"])(i)),i.dragStartBind=i.dragStart.bind(Object(g["a"])(i)),i.draggingBind=i.dragging.bind(Object(g["a"])(i)),i.dragEndBind=i.dragEnd.bind(Object(g["a"])(i)),i.mousewheelBind=i.mousewheel.bind(Object(g["a"])(i)),i.pinchBind=i.pinch.bind(Object(g["a"])(i)),i.pinchendBind=i.pinchend.bind(Object(g["a"])(i)),i.startTouchs=[],i.touchsMove=[],i.twoFingerStart=[],i.pcDragging=!1,i.pcMouseMove=i.mouseMove.bind(Object(g["a"])(i)),i.isPC()&&(t.addEventListener("mousewheel",function(t){i.mousewheelBind(t)}),t.addEventListener("mouseup",function(t){i.pcDragging=!1,i.dragEndBind(t)}),t.addEventListener("mousemove",function(t){i.pcDragging?i.draggingBind(t):i.pcMouseMove(t)}),t.addEventListener("click",function(t){i.tapBind(t)}),t.addEventListener("mousedown",function(t){i.pcDragging=!0,i.dragStartBind(t)})),i}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"initHammer",value:function(){var t=this;this.hammer.get("pinch").set({enable:!0}),this.hammer.on("tap",function(e){console.log(e),t.tapBind(e)}),this.hammer.on("pinch",function(e){console.log(e),t.pinchBind(e)}),this.hammer.on("panstart",function(e){t.dragStartBind(e)}),this.hammer.on("panmove",function(e){t.draggingBind(e)}),this.hammer.on("panend",function(e){t.dragEndBind(e)}),this.hammer.on("pinchend",function(e){t.pinchendBind(e)})}},{key:"isPC",value:function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],i=!0,n=0;n<e.length;n++)if(t.indexOf(e[n])>0){i=!1;break}return i}},{key:"addListenTarget",value:function(t){this.targetSet.add(t)}},{key:"deleteListenTarget",value:function(t){this.targetSet.delete(t)}},{key:"mousewheel",value:function(t){this.targetSet.forEach(function(e){e.mousewheel&&"function"===typeof e.mousewheel&&e.mousewheel(t)})}},{key:"pinch",value:function(t){this.targetSet.forEach(function(e){e.pinch&&"function"===typeof e.pinch&&e.pinch(t)})}},{key:"tap",value:function(t){this.targetSet.forEach(function(e){e.tap&&"function"===typeof e.tap&&e.tap(t)})}},{key:"pinchend",value:function(t){this.targetSet.forEach(function(e){e.pinchend&&"function"===typeof e.pinchend&&e.pinchend(t)})}},{key:"dragStart",value:function(t){this.targetSet.forEach(function(e){e.dragStart&&"function"===typeof e.dragStart&&e.dragStart(t)})}},{key:"dragging",value:function(t){this.targetSet.forEach(function(e){e.dragging&&"function"===typeof e.dragging&&e.dragging(t)})}},{key:"dragEnd",value:function(t){this.targetSet.forEach(function(e){e.dragEnd&&"function"===typeof e.dragEnd&&e.dragEnd(t)})}},{key:"mouseUp",value:function(t){this.targetSet.forEach(function(e){e.mouseUp&&"function"===typeof e.mouseUp&&e.mouseUp(t)})}},{key:"mouseMove",value:function(t){this.targetSet.forEach(function(e){e.mouseMove&&"function"===typeof e.mouseMove&&e.mouseMove(t)})}},{key:"mouseDown",value:function(t){this.targetSet.forEach(function(e){e.mouseDown&&"function"===typeof e.mouseDown&&e.mouseDown(t)})}},{key:"click",value:function(t){this.targetSet.forEach(function(e){e.click&&"function"===typeof e.click&&e.click(t)})}}]),e}(v.a),m=(i("d263"),i("6c7b"),function(){function t(e){Object(o["a"])(this,t),this.canvas=e,this.context=e.getContext("2d"),this.context.font="18px Microsoft YaHei",this.ratio=this.getPixelRatio(this.context),this.scale=1,this.translate={x:0,y:0},this.lastTranslate={x:0,y:0}}return Object(c["a"])(t,[{key:"startDrag",value:function(){this.lastTranslate={x:this.translate.x,y:this.translate.y}}},{key:"reduceDragging",value:function(t,e){this.translate={x:this.lastTranslate.x+t,y:this.lastTranslate.y+e}}},{key:"scaleBigger",value:function(){this.scale+=.02}},{key:"dragging",value:function(t,e){this.translate.x=t+this.lastTranslate.x,this.translate.y=e+this.lastTranslate.y}},{key:"getPixelRatio",value:function(t){var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e}},{key:"renderNode",value:function(t){this.context.save(),this.context.translate(t.x,t.y),this.context.beginPath(),this.context.arc(0,0,t.r/2,0,2*Math.PI),this.context.fill(),this.context.restore()}},{key:"clear",value:function(){this.context.save(),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.restore()}},{key:"recursionRenderMindRoot",value:function(t){if(this.renderMindNode(t),t.children.length)for(var e=0;e<t.children.length;e++)this.recursionRenderMindRoot(t.children[e])}},{key:"renderMindRoot",value:function(t){this.context.save(),this.context.translate(this.translate.x,this.translate.y),this.context.scale(this.scale,this.scale),this.recursionRenderMindRoot(t),this.context.restore()}},{key:"renderHorizonLine",value:function(t){this.context.save(),this.context.translate(0,this.translate.y),this.context.scale(this.scale,this.scale),this.context.translate(0,t),this.context.strokeStyle="red",this.context.lineWidth=3,this.context.beginPath(),this.context.moveTo(0,0),this.context.lineTo(this.canvas.width,0),this.context.stroke(),this.context.restore()}},{key:"renderMindNode",value:function(t){if(this.context.save(),this.context.translate(t.showObjRect.x,t.showObjRect.y),this.context.fillStyle="rgba(176,224,230, 0.7)",this.context.beginPath(),this.context.rect(0,0,t.showObjRect.width,t.showObjRect.height),this.context.fill(),t.selected&&(this.context.strokeStyle="#005757",this.context.strokeWidth="18",this.context.stroke()),t.fixed&&(this.context.beginPath(),this.context.fillStyle="#007979",this.context.arc(t.showObjRect.width+2,t.showObjRect.height/2,10,0,2*Math.PI),this.context.fill()),this.context.restore(),this.context.save(),this.context.translate(t.showObjRect.x,t.showObjRect.y),this.context.beginPath(),this.context.fillStyle="#642100",this.context.textAlign="center",this.context.fillText(t.text,t.showObjRect.width/2,t.showObjRect.height/2+7),this.context.fill(),this.context.restore(),t.parent){this.context.save(),this.context.translate(t.showObjRect.x,t.showObjRect.y+t.showObjRect.height/2),this.context.strokeStyle="pink",this.context.beginPath(),this.context.moveTo(0,0);var e=t.parent.showObjRect,i={x:e.x+e.width-t.showObjRect.x,y:e.y+e.height/2-(t.showObjRect.y+t.showObjRect.height/2)};this.context.bezierCurveTo(-60,0,i.x+15,i.y,i.x,i.y),this.context.lineTo(i.x,i.y),this.context.stroke(),this.context.restore()}t.fixed}}]),t}()),b=function(){function t(e){Object(o["a"])(this,t),this.mindNode=e,this.parent=null,this.children=[],this.text=this.mindNode.text,this.showObj={x:0,y:0,width:80,height:40}}return Object(c["a"])(t,[{key:"addChild",value:function(t){this.children.push(t),t.parent=this}},{key:"layout",value:function(t){for(var e=t.width,i=e/this.children.length,n=0;n<this.children.length;n++){var a=t.x+n*i*.8+n*i*.2+.1*i;this.children[n].showObj.x=a,this.children[n].showObj.y=t.y,this.children[n].showObj.width=.8*i,this.children[n].showObj.height=t.height}}}]),t}(),R={pointInRect:function(t,e){var i={x:t.x-e.x,y:t.y-e.y};return i.x>0&&i.x<e.width&&i.y>0&&i.y<e.height}},k=function(){function t(e,i,n){Object(o["a"])(this,t),this.graphStage=e,this.canvasRender=i,this.canvas=this.canvasRender.canvas,this.context=this.canvasRender.context,this.rootNode=n,this.waterfallRoot=null,this.scale=1,this.translate={x:0,y:0},this.copyWaterfallFrom(n)}return Object(c["a"])(t,[{key:"copyWaterfallFrom",value:function(t){var e=new b(t);this.waterfallRoot=e;for(var i=0;i<t.children.length;i++){var n=t.children[i],a=new b(n);this.waterfallRoot.addChild(a)}}},{key:"clear",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"tap",value:function(t){if(R.pointInRect(t,this.waterfallRoot.showObj)){var e=this.waterfallRoot.mindNode;return e.parent?(this.rootNode=e.parent,this.waterfallRoot=null,this.scale=1,this.translate={x:0,y:0},this.copyWaterfallFrom(this.rootNode),void this.render()):void 0}for(var i=!1,n=0;n<this.waterfallRoot.children.length;n++){var a=this.waterfallRoot.children[n];if(R.pointInRect(t,a.showObj)){var r=a.mindNode;this.rootNode=r,this.waterfallRoot=null,this.scale=1,this.translate={x:0,y:0},this.copyWaterfallFrom(this.rootNode),this.render(),i=!0;break}}i||this.graphStage.goTreeModel()}},{key:"render",value:function(){this.clear(),this.waterfallRoot.layout({x:0,y:.3*this.canvas.height,width:this.canvas.width,height:.6*this.canvas.height}),this.renderChildren(this.waterfallRoot.children),this.renderRootNode(this.waterfallRoot)}},{key:"renderRootNode",value:function(t){this.context.save(),this.context.fillStyle=t.mindNode.color,this.context.beginPath(),this.context.rect(t.showObj.x,t.showObj.y,t.showObj.width,t.showObj.height),this.context.fill(),this.context.restore(),this.context.save(),this.context.translate(t.showObj.x,t.showObj.y),this.context.beginPath(),this.context.fillStyle="white",this.context.font="18px serif",this.context.textAlign="center",this.context.fillText(t.text,t.showObj.width/2,t.showObj.height/2+9),this.context.fill(),this.context.restore()}},{key:"renderChildren",value:function(t){for(var e=0;e<t.length;e++){this.context.save();var i=t[e];this.context.translate(i.showObj.x+i.showObj.width/2,i.showObj.y),this.context.strokeStyle="pink",this.context.lineWidth=8,this.context.beginPath(),this.context.moveTo(0,0);var n=i.parent.showObj,a={x:n.x+n.width-(i.showObj.x+i.showObj.width/2),y:n.y+n.height/2-i.showObj.y};this.context.lineTo(0,a.y),this.context.lineTo(a.x,a.y),this.context.stroke(),this.context.restore()}for(var r=0;r<t.length;r++){var s=t[r];this.context.save(),this.context.fillStyle=t[r].mindNode.color,this.context.beginPath(),this.context.rect(s.showObj.x,s.showObj.y,s.showObj.width,s.showObj.height),this.context.fill(),this.context.restore(),this.context.save(),this.context.translate(s.showObj.x,s.showObj.y),this.context.beginPath(),this.context.fillStyle="white",this.context.font="18px serif",this.context.textAlign="center",this.context.fillText(s.text,s.showObj.width/2,s.showObj.height/2+9),this.context.fill(),this.context.restore(),s.mindNode.children.length&&(this.context.save(),this.context.fillStyle="black",this.context.translate(s.showObj.x+s.showObj.width/2,s.showObj.y+s.showObj.height+20),this.context.beginPath(),this.context.arc(0,0,20,0,2*Math.PI,!0),this.context.fill(),this.context.restore())}}}]),t}(),C=function(){function t(){Object(o["a"])(this,t),this.roots=[]}return Object(c["a"])(t,[{key:"addRoot",value:function(t){t.parent||this.roots.push(t)}},{key:"render",value:function(t){for(var e=0;e<this.roots.length;)this.roots[e].render(t)}}]),t}(),O={recursionCancleFixed:function(t,e){if(t.fixed=!1,e=e||1,t.children.length>0)for(var i=0;i<t.children.length;i++)e>1&&(t.children[i].fixed=!1),this.recursionCancleFixed(t.children[i],e++)},clearMarginFromRoot:function(t){var e=[t];while(e.length>0){var i=e.splice(0,1)[0];if(i.children.length)for(var n=0;n<i.children.length;n++)e.push(i.children[n]);i.marginHeight=i.getDefualtMarginHeight()}},reLayoutFromRootNode:function(t){this.clearMarginFromRoot(t);var e=[t];while(e.length>0){var i=e.splice(0,1)[0];if(i.children.length)for(var n=0;n<i.children.length;n++)e.push(i.children[n]);i.marginHeight=i.calMarginRect().height,this.recursionReCalParentsMarginHeight(i,t)}t.calLayout(t,1)},recursionReCalParentsMarginHeight:function(t,e){t.parent&&t!==e&&(t.parent!==e?(t.parent.marginHeight=t.parent.getChildrenMarginHeight(),this.recursionReCalParentsMarginHeight(t.parent,e)):t.parent.marginHeight=t.parent.getChildrenMarginHeight())}},j=function(){function t(e,i,n,a){Object(o["a"])(this,t),this.x=e||0,this.y=i||0;this.color="re d",this.text="默认文字",this.width=100,this.height=30,this.marginVertical=5,this.marginHorizontal=40,this.selected=!1,this.marginWidth=this.width+2*this.marginHorizontal,this.marginHeight=this.height+2*this.marginVertical,this.parent=null,this.children=[],this.showObjRect={x:this.x,y:this.y,width:this.width,height:this.height},this.fixed=!1}return Object(c["a"])(t,[{key:"setWidth",value:function(t){this.width=t,this.marginWidth=this.width+2*this.marginHorizontal,this.marginHeight=this.height+2*this.marginVertical,this.showObjRect={x:this.x,y:this.y,width:this.width,height:this.height}}},{key:"inserChildBefore",value:function(t,e){if(t&&e){for(var i=[],n=0;n<this.children.length;n++)this.children[n]!==e&&(this.children[n]!==t?i.push(this.children[n]):(i.push(e),i.push(t)));this.children=i,this.parent&&this.parent.calLayout(this.parent,1)}}},{key:"pointInWhichChild",value:function(t){}},{key:"pointUpWhichChild",value:function(t){for(var e=0;e<this.children.length;e++)if(!this.children[e].fixed){var i=this.children[e].showObjRect;if(t.y<i.y)return{target:this.children[e],insertRect:{x:this.children[e].getMarginRect().x,y:this.children[e].y}}}}},{key:"getChildrenNoFixedMaringRect",value:function(t){var e=0;e=t?this.getChildrenMarginHeightNoChild(t):this.getChildrenMarginHeight();for(var i=null,n=0;n<this.children.length;n++)if(!this.children[n].fixed){i=this.children[n];break}if(i){var a=i.getMarginRect();return{x:a.x,y:a.y,width:a.width,height:e}}return null}},{key:"getMarginRect",value:function(){return{x:this.x-this.marginHorizontal,y:this.y-this.marginHeight/2+this.height/2,width:this.marginWidth,height:this.marginHeight}}},{key:"reLayout",value:function(t){O.recursionCancleFixed(t),O.reLayoutFromRootNode(t)}},{key:"recalFathersMarginHeight",value:function(){this.parent&&(this.parent.marginHeight=this.getChildrenMarginHeight(),this.parent.recalFathersMarginHeight())}},{key:"getChildrenMarginHeight",value:function(){for(var t=0,e=0;e<this.children.length;e++){var i=this.children[e];i.fixed||(t+=i.marginHeight)}return t}},{key:"addChild",value:function(t){this.children.push(t),t.parent?(t.parent.marginHeight-=t.marginHeight,t.parent.deleteChild(t),t.parent=this,t.recursionCalMarginRect(t),this.parent&&t.noFixCalParentLayout()):(t.parent=this,t.recursionCalMarginRect(t),this.parent&&t.noFixCalParentLayout())}},{key:"noFixCalParentLayout",value:function(){this.calLayout(this,1),this.parent&&this.parent.noFixCalParentLayout()}},{key:"recursionCalLayout",value:function(t){t=t||this,t.fixed||!t.parent?t.calLayout(t,1):t.parent.recursionCalLayout(t.parent)}},{key:"getDefualtMarginHeight",value:function(){return this.height+2*this.marginVertical}},{key:"recursionCalMarginRect",value:function(t){if(t.parent){var e=t.parent.getChildrenMarginHeight();if(e<=t.parent.getDefualtMarginHeight()){var i=t.parent;i.marginHeight=t.parent.getDefualtMarginHeight()}else{var n=t.parent;n.marginHeight=e,this.recursionCalMarginRect(n)}}}},{key:"afterDeleteChildRect",value:function(t,e){var i=t.getChildrenMarginHeight();if(0==t.children.length)t.marginHeight=t.height+2*t.marginVertical;else{var n=t.height+2*t.marginVertical;t.marginHeight=i>n?i:n}t.parent&&this.afterDeleteChildRect(t.parent,e)}},{key:"calLayoutIgnoreChild",value:function(t){this.calLayoutNoChild(this,t,1)}},{key:"deleteChild",value:function(t){for(var e=this.getChildrenMarginHeight(),i=0;i<this.children.length;i++)t==this.children[i]&&this.children.splice(i,1);this.afterDeleteChildRect(this,e),this.calLayout(this,1)}},{key:"calMarginRect",value:function(){for(var t={width:this.width+2*this.marginHorizontal,height:this.height+2*this.marginVertical},e=0,i=0;i<this.children.length;i++){var n=this.children[i];e+=n.marginHeight}return t.height=t.height>e?t.height:e,t}},{key:"addDefualtChild",value:function(){var e=new t;this.addChild(e),this.calLayout(this,1)}},{key:"calLayoutNoChild",value:function(t,e,i){for(var n=t.getChildrenMarginHeightNoChild(e),a=t.x+t.marginWidth,r=t.y+t.height/2-n/2,s=0,h=0;h<t.children.length;h++){var o=t.children[h];e===o||o.fixed||(o.showObjRect.x=a,o.x=a,o.showObjRect.y=r+s+o.marginHeight/2-o.height/2,o.y=o.showObjRect.y,s+=o.marginHeight)}for(var c=0;c<t.children.length;c++)e===t.children[c]||t.children[c].fixed||this.calLayout(t.children[c],++i)}},{key:"getChildrenMarginHeightNoChild",value:function(t){for(var e=0,i=0;i<this.children.length;i++){var n=this.children[i];t===n||n.fixed||(e+=n.marginHeight)}return e}},{key:"calMarginHeight",value:function(t){var e=t.getChildrenMarginHeight(),i=this.height+2*this.marginVertical;if(t.marginHeight=e>i?e:i,t.children.length>0)for(var n=0;n<t.children.length;n++)this.calMarginHeight(t.children[n])}},{key:"calLayout",value:function(t,e){for(var i=t.getChildrenMarginHeight(),n=t.x+t.marginWidth,a=t.y+t.height/2-i/2,r=0,s=0;s<t.children.length;s++){var h=t.children[s];h.fixed||(h.showObjRect.x=n,h.x=n,h.showObjRect.y=a+r+h.marginHeight/2-h.height/2,h.y=h.showObjRect.y,r+=h.marginHeight)}for(var o=0;o<t.children.length;o++)t.children[o].fixed||this.calLayout(t.children[o],++e)}},{key:"render",value:function(t){t.renderMindRoot(this)}}]),t}(),M=function(){function t(){Object(o["a"])(this,t)}return Object(c["a"])(t,[{key:"positionInRect",value:function(t,e){var i={x:t.x-e.x,y:t.y-e.y};return i.x>0&&i.x<e.width&&i.y>0&&i.y<e.height}},{key:"collisionTreeNoTarget",value:function(t,e,i,n){var a=[e];while(a.length>0){var r=a.splice(0,1)[0];if(r.children.length)for(var s=0;s<r.children.length;s++)r!==i&&a.push(r.children[s]);this.positionInRect(t,r.showObjRect)&&n.push(r)}return n}},{key:"collisionTree",value:function(t,e){var i={x:e.x,y:e.y,width:e.width,height:e.height};if(this.positionInRect(t,i))return e;if(e.children.length)for(var n=0;n<e.children.length;n++){var a=e.children[n],r=this.collisionTree(t,a);if(r)return r}}}]),t}(),S=function(){function t(e,i){Object(o["a"])(this,t),this.graphStage=e,this.draggingTarget=i,this.startPosition=null,this.oldPosition={x:this.draggingTarget.x,y:this.draggingTarget.y}}return Object(c["a"])(t,[{key:"dragging",value:function(t){this.graphStage.canvasRender.clear();var e={x:t.x-this.startPosition.x,y:t.y-this.startPosition.y};e.x=e.x/this.graphStage.canvasRender.scale,e.y=e.y/this.graphStage.canvasRender.scale,this.draggingTarget.x=this.oldPosition.x+e.x,this.draggingTarget.y=this.oldPosition.y+e.y,this.draggingTarget.showObjRect.x=this.oldPosition.x+e.x,this.draggingTarget.showObjRect.y=this.oldPosition.y+e.y;var i={x:this.graphStage.canvasRender.translate.x,y:this.graphStage.canvasRender.translate.y,k:this.graphStage.canvasRender.scale},n=this.graphStage.viewPoint2GlobalPoint(t.x,t.y,i);if(this.draggingTarget.fixed=!0,this.draggingTarget.parent?(this.draggingTarget.recursionCalMarginRect(this.draggingTarget),this.draggingTarget.parent.recursionCalLayout(),this.draggingTarget.reLayout(this.draggingTarget,1)):this.draggingTarget.calLayout(this.draggingTarget,1),this.draggingTarget.parent){var a=this.draggingTarget.parent.getChildrenNoFixedMaringRect(this.draggingTarget);if(a){var r=Object.assign({},a);if(r.width*=2,R.pointInRect(n,r)){var s=this.draggingTarget.parent.pointUpWhichChild(n);s?(this.graphStage.canvasRender.renderHorizonLine(s.insertRect.y),this.nearBefore=s):this.nearBefore=null}else this.nearBefore=null}}var h=this.graphStage.interaction,o=[];this.graphStage.rootMindNode.render(this.graphStage.canvasRender),h.collisionTreeNoTarget(n,this.graphStage.rootMindNode,this.draggingTarget,o);for(var c=null,l=0;l<o.length;l++)if(o[l]!==this.draggingTarget){c=o[l];break}c?(console.log(c.text),this.targetCollision=c):this.targetCollision=null,this.graphStage.rootMindNode.render(this.graphStage.canvasRender)}},{key:"dragEnd",value:function(t){t.x,this.startPosition.x,t.y,this.startPosition.y;if(this.targetCollision)return console.log(this.targetCollision.text),this.draggingTarget.fixed=!1,this.targetCollision.addChild(this.draggingTarget),this.graphStage.canvasRender.clear(),this.targetCollision.reLayout(this.targetCollision),void this.graphStage.rootMindNode.render(this.graphStage.canvasRender);if(this.nearBefore&&this.draggingTarget.parent){this.draggingTarget.fixed=!1,this.draggingTarget.parent.inserChildBefore(this.nearBefore.target,this.draggingTarget),this.graphStage.canvasRender.clear();var e=this.draggingTarget.parent;while(e.parent&&0==e.parent.fixed)e=e.parent;e.reLayout(e),this.graphStage.rootMindNode.render(this.graphStage.canvasRender)}}}]),t}(),P=function(t){function e(t,i,n){var a;return Object(o["a"])(this,e),a=Object(l["a"])(this,Object(d["a"])(e).call(this)),a.offset=n.offset,a.container=t,a.nodeTarget=i,a.data=n,a.createMenu(),a}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"createMenu",value:function(){var t=this;this.div=document.createElement("div"),this.div.style.width="180px",this.div.style.height=35*this.data.menuData.length+12*this.data.menuData.length-12+"px",this.div.style.lineHeight="35px",this.div.style.background="gray",this.div.style.fontSize="20px",this.div.style.borderRadius="4px",this.div.style.cursor="pointer",this.div.style.textAlign="left",this.div.style.position="absolute",this.div.style.left=this.offset.x+"px",this.div.style.top=this.offset.y+"px";for(var e=function(e){var i=document.createElement("div");i.style.textIndent="5px",i.style.background="black",i.style.color="white",i.style.cursor="pointer",i.style.borderRadius="4px",i.style.margin="6px",i.innerText=t.data.menuData[e].label;var n=t;i.onclick=function(){n.emit("menuCommand",n.data.menuData[e].command)},t.div.appendChild(i)},i=0;i<this.data.menuData.length;i++)e(i);this.container.appendChild(this.div)}},{key:"dispose",value:function(){this.container.removeChild(this.div)}}]),e}(v.a),T=function(){function t(e,i){Object(o["a"])(this,t),this.width=e,this.height=i,this.translate={x:0,y:0},this.scale=1}return Object(c["a"])(t,[{key:"setTranslate",value:function(t){this.translate=Object.assign({},t)}},{key:"scaleAtPosition",value:function(t,e,i){var n=this.scale,a=i/n,r={x:this.translate.x-t,y:this.translate.y-e},s={x:t+r.x*a,y:e+r.y*a};this.translate=Object.assign({},s),this.scale=i}}]),t}(),D=(i("f400"),function(){function t(){var e=this;Object(o["a"])(this,t),this.keyDownMap=new Map,this.keyDownSet=new Set,this.checkKeys=new Set,this.keys={a:65,b:66,c:67,d:68,ctr:17,e:69,s:83,w:87,command:91,option:18,shift:16},this.initCheckKey(),document.addEventListener("keydown",function(t){e.checkKeys.has(t.keyCode)&&e.keyDownSet.add(t.keyCode)}),document.addEventListener("keyup",function(t){e.keyDownSet.delete(t.keyCode)})}return Object(c["a"])(t,[{key:"initCheckKey",value:function(){for(var t in this.keys)this.checkKeys.add(this.keys[t])}},{key:"checkKeysDown",value:function(t){for(var e=!0,i=0;i<t.length;i++){var n=t[i];if(!this.keys[n])return!1;var a=this.keys[n];if(!this.keyDownSet.has(a))return e=!1,e}return e}}]),t}()),H=new D,E=(v.a,i("e257"),v.a,i("03cf"),function(t){function e(t,i,n){var a;Object(o["a"])(this,e),a=Object(l["a"])(this,Object(d["a"])(e).call(this)),a.targetTap=n,a.position=i,a.container=t,a.containerWidth=t.offsetWidth,a.containerHeight=t.offsetHeight,a.menuWidth=160,a.inputDom=null;var r=document.createElement("canvas");return a.context=r.getContext("2d"),a.context.font="19px Microsoft YaHei",a.showInput(),a}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"sureClick",value:function(){var t=this.inputDom.value;this.emit("submit",{value:t,offset:{x:this.position.x,y:this.position.y},eventInput:this.inputDom})}},{key:"cancleClick",value:function(t){this.emit("cancle"),t.preventDefault()}},{key:"showInput",value:function(){var t=this,e=document.createElement("div");e.setAttribute("id","container-div"),e.style.left=parseInt(this.position.x)+"px",e.style.top=parseInt(this.position.y)+"px";var i=document.createElement("input");i.setAttribute("id","graph-input"),i.setAttribute("autofocus","autofocus"),i.setAttribute("value",this.targetTap.text),this.inputDom=i,this.inputDom.autofocus="autofocus",this.inputDom.style.width=parseInt(this.context.measureText(this.targetTap.text).width)+"px",this.inputDom.onblur=function(e){t.sureClick(e)},this.inputDom.oninput=function(e){var i=t.inputDom.value,n=parseInt(t.context.measureText(i).width);t.inputDom.style.width=n+"px"};var n=document.createElement("span");n.innerHTML="确定",n.setAttribute("class","graph_ui-input-button"),this.bindMouseListener(n,"click",this.sureClick.bind(this)),e.appendChild(i),e.appendChild(n),this.containerDiv=e,this.container.appendChild(this.containerDiv)}},{key:"bindMouseListener",value:function(t,e,i){t.addEventListener(e,i,!1)}},{key:"dispose",value:function(){try{this.container.removeChild(this.containerDiv)}catch(t){}}}]),e}(v.a)),L=function(t){function e(t,i){var n;return Object(o["a"])(this,e),n=Object(l["a"])(this,Object(d["a"])(e).call(this)),n.container=i.container,n.canvas=t,n.canvasEventer=new w(t),n.mindGraph=new C,n.canvasEventer.addListenTarget(Object(g["a"])(n)),n.canvasEventer.addListenTarget(n.mindGraph),n.canvasRender=new m(t),n.mindGraph.mindRender=n.canvasRender,n.interaction=new M,n.selected=new Set,n.nodeDragger=null,n.nodeSelectMenu=null,n.editModel="tree",n.viewMartixs=new T(n.canvas.width,n.canvas.height),n.start(),n}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"start",value:function(){var t=new j(10,window.innerHeight/2-10,50,20);this.mindGraph.addRoot(t),this.rootMindNode=t,t.render(this.canvasRender),window.rootMindNode=t}},{key:"dragging",value:function(t){if("waterfall"!==this.editModel){var e=x.eventOffsetDom(t,this.canvas);if(this.isDragging){var i={x:e.x-this.startPosition.x,y:e.y-this.startPosition.y};this.canvasRender.clear(),this.canvasRender.dragging(i.x,i.y),this.rootMindNode.render(this.canvasRender)}this.nodeDragger&&this.nodeDragger.dragging(e)}}},{key:"reRender",value:function(){this.canvasRender.clear(),this.rootMindNode.calLayout(this.rootMindNode),this.rootMindNode.render(this.canvasRender)}},{key:"pinch",value:function(t){if("waterfall"!==this.editModel){var e=t.center;if(this.oldPinchScale){var i=t.scale-this.oldPinchScale;this.canvasRender.scale*=i+1}this.oldPinchScale=t.scale,this.viewMartixs.scaleAtPosition(e.x,e.y,this.canvasRender.scale),this.canvasRender.translate.x=this.viewMartixs.translate.x,this.canvasRender.translate.y=this.viewMartixs.translate.y,this.canvasRender.clear(),this.rootMindNode.render(this.canvasRender)}}},{key:"pinchend",value:function(){this.oldPinchScale=null}},{key:"mousewheel",value:function(t){if("waterfall"!==this.editModel){var e=(new Date).getTime();if(this.lastTime){if(this.lastTime-e<200)return;this.lastTime=e}var i=x.eventOffsetDom(t,this.canvas);t.deltaY<0?this.canvasRender.scale*=1.05:this.canvasRender.scale*=.95,this.viewMartixs.scaleAtPosition(i.x,i.y,this.canvasRender.scale),this.canvasRender.translate.x=this.viewMartixs.translate.x,this.canvasRender.translate.y=this.viewMartixs.translate.y,this.canvasRender.clear(),this.rootMindNode.render(this.canvasRender)}}},{key:"dragStart",value:function(t){if("waterfall"!==this.editModel){this.clearMenu(),this.startPosition=x.eventOffsetDom(t,this.canvas);var e=Object.assign({},this.startPosition),i={x:this.canvasRender.translate.x,y:this.canvasRender.translate.y,k:this.canvasRender.scale},n=this.viewPoint2GlobalPoint(e.x,e.y,i);e.x=n.x,e.y=n.y;var a=this.interaction.collisionTree(e,this.rootMindNode);a?(this.nodeDragger=new S(this,a),this.nodeDragger.startPosition=this.startPosition):(this.isDragging=!0,this.canvasRender.startDrag(this.startPosition.x,this.startPosition.y))}}},{key:"dragEnd",value:function(t){if("waterfall"!==this.editModel){var e=x.eventOffsetDom(t,this.canvas);if(this.isDragging){this.isDragging=!1;var i={x:e.x-this.startPosition.x,y:e.y-this.startPosition.y};this.canvasRender.reduceDragging(i.x,i.y),this.viewMartixs.setTranslate(this.canvasRender.translate)}this.nodeDragger&&(this.nodeDragger.dragEnd(e),this.nodeDragger=null)}}},{key:"viewPoint2GlobalPoint",value:function(t,e,i){var n={x:(t-i.x)/i.k,y:(e-i.y)/i.k};return n}},{key:"clearMenu",value:function(){this.nodeSelectMenu&&(this.nodeSelectMenu.dispose(),this.nodeSelectMenu=null),this.editPan&&(this.editPan.dispose(),this.editPan=null)}},{key:"goTreeModel",value:function(){this.editModel="tree",this.reRender()}},{key:"tap",value:function(t){var e=this,i=x.eventOffsetDom(t,this.canvas),n=Object.assign({},i),a=Object.assign({},i);if("waterfall"===this.editModel)return H.checkKeysDown(["command"])?void this.goTreeModel():void this.waterfallRender.tap(n);n.x+=10,n.y+=10;var r={x:this.canvasRender.translate.x,y:this.canvasRender.translate.y,k:this.canvasRender.scale},s=this.viewPoint2GlobalPoint(i.x,i.y,r);i.x=s.x,i.y=s.y;var h=this.interaction.collisionTree(i,this.rootMindNode);h?(this.clearMenu(),this.nodeSelectMenu=new P(this.container,h,{offset:n,menuData:[{command:"edit",label:"编辑"},{command:"addChild",label:"添加下级"},{command:"layout",label:"排列"},{command:"waterfallEdit",label:"瀑布编辑模式"}]}),this.nodeSelectMenu.on("menuCommand",function(t){if(e.clearMenu(),"layout"===t&&(h.reLayout(h),e.reRender()),"waterfallEdit"===t){e.editModel="waterfall";var i=new k(e,e.canvasRender,h);e.waterfallRender=i,i.render()}"addChild"===t&&(h.addDefualtChild(),e.reRender()),"edit"===t&&(e.editPan=new E(e.container,a,h),e.editPan.on("submit",function(t){var i=t.value,n=e.canvasRender.context.measureText(i).width;h.setWidth(n+20),h.text=i,h.reLayout(h),e.clearMenu(),e.reRender()}))}),H.checkKeysDown(["command"])&&(h.addDefualtChild(),this.clearMenu()),this.selected.forEach(function(t){t.selected=!1}),this.selected.clear(),h.selected=!0,this.selected.add(h),this.reRender()):(this.clearMenu(),this.selected.size>0&&(this.selected.forEach(function(t){t.selected=!1}),this.reRender(),this.selected.clear()))}}]),e}(v.a),F={name:"app",data:function(){return{isFullScreen:!1,textarea2:"sdcsdc"}},methods:{toggleFullScreen:function(){this.isFullScreen?(this.$refs.canvasContainer.exitFullscreen?this.$refs.canvasContainer.exitFullscreen():this.$refs.canvasContainer.webkitCancelFullScreen?this.$refs.canvasContainer.webkitCancelFullScreen():this.$refs.canvasContainer.mozCancelFullScreen?this.$refs.canvasContainer.mozCancelFullScreen():document.msExitFullscreen&&this.$refs.canvasContainer.msExitFullscreen(),this.isFullScreen=!this.isFullScreen):(this.$refs.canvasContainer.requestFullscreen?this.$refs.canvasContainer.requestFullscreen():this.$refs.canvasContainer.webkitRequestFullScreen?this.$refs.canvasContainer.webkitRequestFullScreen():this.$refs.canvasContainer.mozRequestFullScreen?this.$refs.canvasContainer.mozRequestFullScreen():this.$refs.canvasContainer.msRequestFullscreen&&this.$refs.canvasContainer.msRequestFullscreen(),console.log("已全屏！"),this.isFullScreen=!this.isFullScreen)}},mounted:function(){document.body.addEventListener("touchmove",function(t){t.preventDefault()});var t=document.getElementById("canvas");t.setAttribute("width",document.body.offsetWidth),t.setAttribute("height",window.innerHeight);var e=document.getElementById("app");new L(t,{container:e})},components:{}},N=F,B=(i("034f"),i("2877")),I=Object(B["a"])(N,s,h,!1,null,null,null),W=I.exports;n["default"].use(r.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(W)}}).$mount("#app")},"64a9":function(t,e,i){},e257:function(t,e,i){}});
//# sourceMappingURL=app.869b4985.js.map