<template>
  <div id="app" ref="canvasContainer">
     <!-- <button id="button" @click="toggleFullScreen">全频切换</button> -->
    <canvas id="canvas" ref="canvas"> </canvas>
    <div class="tool-top-left">
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-refresh-left"></i>
      <i class="el-icon-refresh-right"></i>
      <i class="el-icon-document"></i>
      <i class="el-icon-more"></i>
    </div>
    <div class="tool-top-right">
      <span><i class="el-icon-setting"></i></span>
      <span> <i class="el-icon-files"></i> </span>
    </div>
    <div class="bottom-tool">
      <el-row>
        <el-col :span="4"
          ><div class="grid-content bg-purple">同级主题</div></el-col
        >
        <el-col :span="4"
          ><div class="grid-content bg-purple-light">子主题</div></el-col
        >
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <i class="el-icon-s-opportunity"></i></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light">瀑布模型</div></el-col
        >
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <i class="el-icon-notebook-2"></i></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light">
            <i class="el-icon-menu"> </i></div
        ></el-col>
      </el-row>
      <el-row>
        <el-input
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 4 }"
          placeholder="请输入内容"
          v-model="textarea2"
        >
        </el-input>
      </el-row>
      <el-row class="text-row">
        <el-col :span="4"><div class="text-content">B</div></el-col>
        <el-col :span="4"><div class="text-content">颜色</div></el-col>
        <el-col :span="4"><div class="text-content">背景</div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { GraphStage } from "../lib/graph-stage";
export default {
  name: "app",
  data() {
    return {
      isFullScreen: false,
      textarea2: "sdcsdc"
    };
  },
  methods: {
    toggleFullScreen() {
      if (!this.isFullScreen) {
        if (this.$refs.canvasContainer.requestFullscreen) {
          this.$refs.canvasContainer.requestFullscreen();
        } else if (this.$refs.canvasContainer.webkitRequestFullScreen) {
          this.$refs.canvasContainer.webkitRequestFullScreen();
        } else if (this.$refs.canvasContainer.mozRequestFullScreen) {
          this.$refs.canvasContainer.mozRequestFullScreen();
        } else if (this.$refs.canvasContainer.msRequestFullscreen) {
          // IE11
          this.$refs.canvasContainer.msRequestFullscreen();
        }
        console.log("已全屏！");
        
        this.isFullScreen = !this.isFullScreen;
      } else {
        if (this.$refs.canvasContainer.exitFullscreen) {
          this.$refs.canvasContainer.exitFullscreen();
        } else if (this.$refs.canvasContainer.webkitCancelFullScreen) {
          this.$refs.canvasContainer.webkitCancelFullScreen();
        } else if (this.$refs.canvasContainer.mozCancelFullScreen) {
          this.$refs.canvasContainer.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          this.$refs.canvasContainer.msExitFullscreen();
        }
        this.isFullScreen = !this.isFullScreen;
      }
    }
  },
  mounted() {
    document.body.addEventListener("touchmove", function(e) {
      e.preventDefault();
    });
    let canvas = document.getElementById("canvas");
    canvas.setAttribute("width", document.body.offsetWidth);
    canvas.setAttribute("height", window.innerHeight);
    let appContainer = document.getElementById("app");
    new GraphStage(canvas, { container: appContainer });
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
#button {
  position: absolute;
  left: 50px;
  top: 50px;
  background: orange;
}

canvas {
  background: white;
}

.tool-top-left {
  position: absolute;
  left: 5px;
  top: 15px;
  font-size: 22px;
  border-radius: 4px;
}

.tool-top-right {
  position: absolute;
  right: 5px;
  top: 15px;
  font-size: 22px;
}
.tool-top-left i {
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
}
.tool-top-right span {
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
}

.bottom-tool {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 20px;
}

.el-row {
  margin-bottom: 5px;
}

.grid-content {
  min-height: 35px;
  line-height: 35px;
  font-size: 16px;
  background: #17202a;
  color: white;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.text-content{
  min-height: 14px;
  font-size: 12px;
  color: #17202a;
}
.text-row{
  padding: 0;
}
</style>
