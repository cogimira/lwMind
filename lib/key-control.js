class KeyControl {
  constructor() {
    this.keyDownMap = new Map();
    this.keyDownSet = new Set();
    this.checkKeys = new Set();
    this.keys = {
      a: 65,
      b: 66,
      c: 67,
      d: 68,
      ctr: 17,
      e: 69,
      s: 83,
      w: 87,
      command: 91,
      option: 18,
      shift: 16
    };
    this.initCheckKey();
    document.addEventListener("keydown", e => {
      // console.log(e.keyCode);
      if (this.checkKeys.has(e.keyCode)) {
        this.keyDownSet.add(e.keyCode);
        // console.log(this.keyDownSet);
      }
    });
    document.addEventListener("keyup", e => {
      this.keyDownSet.delete(e.keyCode);
      //   // console.log(this.keyDownSet);
    });
  }

  initCheckKey() {
    for (let i in this.keys) {
      this.checkKeys.add(this.keys[i]);
    }
  }

  // 检查传入键是不是同时按下
  checkKeysDown(keyAry) {
    let allKeysDown = true;
    for (let i = 0; i < keyAry.length; i++) {
      let key = keyAry[i];
      if (!this.keys[key]) {
        // 当检查到传入了不检查的键
        return false;
      }
      let keyCode = this.keys[key];
      if (!this.keyDownSet.has(keyCode)) {
        allKeysDown = false;
        return allKeysDown;
      }
    }
    if (allKeysDown) {
      // console.log(keyAry.join(' - '));
    }
    return allKeysDown;
  }
}

export default new KeyControl();
