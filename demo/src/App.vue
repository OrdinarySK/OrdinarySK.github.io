<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">-->
    <router-view/>
    <!-- <cesiumContainer></cesiumContainer> -->
  </div>
</template>

<script>
import cesiumContainer from '@/components/cesium/CesiumContainer'
export default {
  name: 'App',
  components:{
    cesiumContainer
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
} */
</style>
