<template>
    <div id="cesiumContainer">

    </div>
</template>

<script>
import Cesium from 'cesium/Cesium'
export default {
    name: 'cesiumContainer',
    data () {
        return {

        }
    },
    components: {

    },

    methods:{
        // 获取显示实时经纬度
        getXy: function(){
            var that = this
          var handler3D = new Cesium.ScreenSpaceEventHandler(that.$cmpjs.viewer.scene.canvas);//初始化之后才能引入全局viewer,进入函数前初始化this,调用全局viewer
              handler3D.setInputAction(function(movement) {
              var pick= new Cesium.Cartesian2(movement.endPosition.x,movement.endPosition.y);
              if(pick){
                  var cartesian = that.$cmpjs.viewer.scene.globe.pick(that.$cmpjs.viewer.camera.getPickRay(pick), that.$cmpjs.viewer.scene);
                  if(cartesian){
                      //世界坐标转地理坐标（弧度）
                      var cartographic = that.$cmpjs.viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
                      if(cartographic){
                          //鼠标位置地球表面物体的真实海拔
                          var height =that.$cmpjs.viewer.scene.globe.getHeight(cartographic);
                          //视角海拔高度
                          var he = Math.sqrt(that.$cmpjs.viewer.scene.camera.positionWC.x * that.$cmpjs.viewer.scene.camera.positionWC.x + that.$cmpjs.viewer.scene.camera.positionWC.y * that.$cmpjs.viewer.scene.camera.positionWC.y + that.$cmpjs.viewer.scene.camera.positionWC.z * that.$cmpjs.viewer.scene.camera.positionWC.z);
                          var he2 = Math.sqrt(cartesian.x * cartesian.x + cartesian.y * cartesian.y + cartesian.z * cartesian.z);
                          //地理坐标（弧度）转经纬度坐标
                          var point=[ cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
                          if(!height){
                              height = 0;
                          }
                          if(!he){
                              he = 0;
                          }
                          if(!he2){
                              he2 = 0;
                          }
                          if(!point){
                              point = [0,0];
                          }

                          let x = point[0].toFixed(6);
                          let y = point[1].toFixed(6);
                            that.$store.commit('CHANGE_XY', {x, y});
                          //that.$store.commit('changeXy', {x, y})//通过vuex传递给其他组件
                          //coordinatesDiv.innerHTML = "<span id='cd_label' style='font-size:13px;text-align:center;font-family:微软雅黑;color:#edffff;'>"+"视角海拔高度:"+(he - he2).toFixed(2)+"米"+"&nbsp;&nbsp;&nbsp;&nbsp;海拔:"+height.toFixed(2)+"米"+"&nbsp;&nbsp;&nbsp;&nbsp;经度：" + point[0].toFixed(6) + "&nbsp;&nbsp;纬度：" + point[1].toFixed(6)+ "</span>";
                      }
                  }
              }
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        },

    },
    mounted() {
        this.$cmpjs.cesiumInit();
        this.getXy();
    },
}
</script>

<style>

#cesiumContainer{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.cesium-viewer-bottom{
        display:none;
    }
</style>

