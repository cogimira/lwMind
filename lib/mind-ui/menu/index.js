import EventEmitter from 'events';
import './style.css';

function guid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function createMenu(data, className, menuDirection, menu) {
  createMenu.cache = createMenu.cache || {};
  if (createMenu.ulDom) {
    const allLi = createMenu.ulDom.getElementsByTagName('li');
    for (let i = 0; i < allLi.length; i++) {
      const id = allLi[i].getAttribute('__guid__');
      if (id) {
        allLi[i].addEventListener('click', createMenu.cache[id], false);
      }
    }
    createMenu.cache = {};
    if (createMenu.ulDom.parentNode) {
      createMenu.ulDom.parentNode.removeChild(createMenu.ulDom);
    }

    createMenu.ulDom = null;
  }

  function create(data, level) {
    const ulDom = document.createElement('ul');
    if(menuDirection.h == -1) {
      ulDom.style.left = '-160px';
    }
    if(menuDirection.v == -1 && level == 1) {
      let top = data.length * 30;
      ulDom.style.top = (menu.nodeData.offset.y - top) + 'px';
    } else if(menuDirection.v == -1 && level > 1) {
      let top = -1 * data.length * 30 + 30;
      ulDom.style.top = top + 'px';
    }
    data.forEach(one => {
      const liDom = document.createElement('li');
      liDom.innerHTML = '<a href="javascript:;">' + one.label + '</a>';

      if (Array.isArray(one.children)) {
        let newLevel = ++level;
        const children = create(one.children, newLevel);
        liDom.appendChild(children);
      } else if (typeof one.callback === 'function') {
        const id = guid();
        liDom.setAttribute('__guid__', id);
        const callback = function() {
          createMenu.ulDom.style.display = 'none';
          one.callback();
        };
        createMenu.cache[id] = callback;
        liDom.addEventListener('click', callback, false);
        liDom.data = one;
      }

      ulDom.appendChild(liDom);
    });
    return ulDom;
  }

  createMenu.ulDom = create(data, 1);
  if (createMenu.ulDom.children.length === 0) {
    return null;
  }
  createMenu.ulDom.className = className;
  return createMenu.ulDom;
}
/**
 * 由于每次右击的位置不同，需要重新创建菜单
 */

export class Menu extends EventEmitter {
  constructor(container, menuData, data) {
    super();
    this.containerWidth = container.offsetWidth;
    this.containerHeight = container.offsetHeight;
    this.menuWidth = 160;
    this.menuMaxOffsetLeft = this.containerWidth - this.menuWidth * 4;
    this.menuMaxOffsetTop = this.containerHeight - 30 * 6;
    this.menuDirection = {
      h : 1,
      v: 1
    };
    this.menuData = menuData;
    this.container = container;
    this.nodeData = data;
    this.menuDom = null;
    this.showMenu();
  }

  showMenu() {
    if(this.nodeData.offset.x > this.menuMaxOffsetLeft) {
      this.menuDirection.h = -1;
    }
    if(this.nodeData.offset.y > this.menuMaxOffsetTop) {
      this.menuDirection.v = -1;
    }
    this.menuDom = createMenu(this.menuData, 'graph-context-menu', this.menuDirection, this);
    if(this.nodeData.offset.x > this.menuMaxOffsetLeft) {
      this.menuDom.style.left = (this.nodeData.offset.x - this.menuWidth) + 'px';
      
    } else {
      this.menuDom.style.left = this.nodeData.offset.x + 'px';
    }
    if(this.nodeData.offset.y <= this.menuMaxOffsetTop) {
      this.menuDom.style.top = this.nodeData.offset.y + 'px';
    } 
    
    this.container.appendChild(this.menuDom);
  }

  dispose() {
    this.container.removeChild(this.menuDom);
  }
}