<template>
  <div class="hello">

    <cesium-container></cesium-container>
    <common-header></common-header>
    <div class="commonLeft">
      <left-contentThree></left-contentThree>
    </div>
    <!-- <linkage></linkage> -->
    <right-tool></right-tool>
    <common-bottom></common-bottom>

  </div>
</template>

<script>
import cesiumContainer from '../components/cesium/CesiumContainer'
import Linkage from '../components/common/Linkage'
import CommonHeader from '../components/common/CommonHeader'
import RightTool from '../components/common/RightTool'
import CommonBottom from '../components/common/CommonBottom'
import LeftContentThree from '../components/common/LeftContentThree'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    cesiumContainer,
    Linkage,
    CommonHeader,
    RightTool,
    CommonBottom,
    LeftContentThree
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.commonLeft{
  position: absolute;
  left: 0;
  top: 6.57vh;
  z-index:2;
  width: 4.02rem;
  height: 87.8vh;
  background-color: rgba(7,23,42,0.49)
}
</style>
