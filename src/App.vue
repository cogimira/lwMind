<template>
  <div id="app">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import {GraphStage} from '../lib/graph-stage';
export default {
  name: 'app',
  methods : {

  },
  mounted () {
    let canvas = document.getElementById("canvas");
    canvas.setAttribute("width", document.body.offsetWidth);
    canvas.setAttribute("height", window.innerHeight);
    let width = canvas.width,height=canvas.height;
    if (window.devicePixelRatio) {

                canvas.style.width = width + "px";
                canvas.style.height = height + "px";
                canvas.height = height * window.devicePixelRatio;
                canvas.width = width * window.devicePixelRatio;
                canvas.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    // let width = canvas.offsetWidth;
    // let height = canvas.offsetHeight;
    // canvas.width = width * 2;
    // canvas.height = height * 2;
    // canvas.style.width = width + "px";
    // canvas.style.height = height + "px";
    let appContainer = document.getElementById("app");
    new GraphStage(canvas, {container: appContainer});
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  /* zoom: 0.5; */
  /* margin-top: 20px; */
}
</style>
