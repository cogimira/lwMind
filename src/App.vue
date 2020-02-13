<template>
  <div id="app">
    <canvas id="canvas"> </canvas>
  </div>
</template>

<script>
import { GraphStage } from "../lib/graph-stage";
export default {
  name: "app",
  methods: {},
  mounted() {
    let canvas = document.getElementById("canvas");
    canvas.setAttribute("width", document.body.offsetWidth);
    canvas.setAttribute("height", window.innerHeight * 2);
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
</style>
