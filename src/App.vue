<template>
  <div id="app" ref="canvasContainer">
    <button id="button" @click="toggleFullScreen">全频切换</button>
    <canvas id="canvas" ref="canvas"> </canvas>
  </div>
</template>

<script>
import { GraphStage } from "../lib/graph-stage";
export default {
  name: "app",
  data() {
    return {
      isFullScreen: false
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
  /* zoom: 0.5; */
  /* margin-top: 20px; */
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
</style>
