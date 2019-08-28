// 定义全局的控制cesium的全局方法,cesium页面获取焦点是才能鼠标缩放，二维地图也是一样
import Cesium from 'cesium/Cesium'
import baseUrl from './baseUrl'
import Vue from 'vue'
const Http = new Vue()
const cmpjs = {};  //定义一个全局对象，里面包含cesium的各种操作


// 定义cesium所需要的对象、容器、坐标、量测、 marker（标记)
cmpjs.viewer = null;   // 定义cesium的viewer初始化为null
cmpjs.url = "";
cmpjs.x = null;        //定义坐标x为null
cmpjs.y = null;        //定义坐标y为null
cmpjs.entity = null;


// 三维球体的初始化
cmpjs.cesiumInit = function() {


    //此处也可以定义一个自己发布的服务的内部局域网的TerrainProvider地图服务
    cmpjs.viewer = new Cesium.Viewer('cesiumContainer',{
        animation: false,   // 是否创建动画小器件， 左下角仪表盘
        baseLayerPicker: false,  //是否显示图层切换选择器
        fullscreenButton: false,     //是否显示全屏按钮
        geocoder: false, //是否显示geocoder小器件，右上角查询按钮
        homeButton: false,   //是否显示Home按钮
        infoBox: false,   //是否显示信息框
        sceneModePicker: false,   //是否显示3D/2D选择器
        selectionIndicator: false,  //是否显示选取指示器组件
        timeline: false, //是否显示时间轴
        navigationHelpButton: false,   //是否显示右上角的帮助按钮
        scene3DOnly: true, // 如果设置为true, 则所有的几何图形以3D模式绘制以节约GPU资源
        imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
            url: baseUrl.cesiumInitImgWebTileUrl,   //调用天地图服务的接口地址
            layer: "tdtAnnoLayer",
            style: "default",     //设置样式为默认
            format: "image/jpeg",   //设置图片格式
            tileMatrixSetID: "GeoogleMapsCompatible",
            show: false,
        })
    });

    //隐藏cesium自身的icon
    cmpjs.viewer._cesiumWidget._creditContainer.style.display="none";

    //多层服务， 追加显示
    cmpjs.viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
        url: baseUrl.cesiumInitCiaWebTileUrl,    //天地图的Cia图层接口
        layer: 'tdtAnnoLayer',                   //定义图层
        style: 'default',
        format: 'image/jpeg',
        tileMatrixSetID: 'GoogleMapsCompatible',
        show: false
    }))

    /**
     * 下列属性，只能控制鼠标的滚轮的放大缩小，无法控制ZoomIn与zoomOut
     *
     */
    cmpjs.viewer.scene.screenSpaceCameraController.minimumZoomDistance = 5000;  //相机的高度的最小值
    cmpjs.viewer.scene.screenSpaceCameraController.maximumZoomDistance = 22000000;   //相机高度的最大值

    cmpjs.addBindboad();
    this.setPointAdress(cmpjs.viewer);


};

cmpjs.setPointAdress = function(viewer){
    const  centerPoint = [108.354167,32.7083333,8000000.0];
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(...centerPoint), // 设置初始位置
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-90.0),
            roll: 0
        }
    })
}

/**
 * 2D与3D的切换方法
 */
cmpjs.threeToTwo = function() {
    let scene = cmpjs.viewer.scene;
    scene.morphTo2D()
},

/**
 * 2D切3D
 */
cmpjs.twoToThree = function(){
    let scene = cmpjs.viewer.scene;
    scene.morphTo3D()
}

/**
 * 向左旋转
 */
cmpjs.rotate = function() {
    cmpjs.viewer.camera.rotateLeft(Cesium.Math.toDegrees(0.005).toFixed(2));
}

/**
 * 放大
 */
cmpjs.zoomIn = function (){
    cmpjs.viewer.camera.zoomIn(100000.0);
    var height = cmpjs.viewer.camera.positionCartographic.height;
    //滚动时事件穿透， 鼠标在元素上时仍可缩放地球
    // if(height < 10000){
    //     $('div[id^="popup-fylzStation2"]').show();
    //     $('div[id^="popup-fylzStation1"]').hide();
    //     $('div[id^="popup-fylzCity"]').hide();
    // }
    // if(height > 100000 && height < 600000){
    //     $('div[id^="popup-fylzStation2"]').show();
    //     $('div[id^="popup-fylzStation1"]').hide();
    //     $('div[id^="popup-fylzCity"]').hide();
    // }
    // if(height > 600000){
    //     $('div[id^="popup-fylzStation2"]').show();
    //     $('div[id^="popup-fylzStation1"]').hide();
    //     $('div[id^="popup-fylzCity"]').hide();
    // }
},

/**
 * 缩小
 */
cmpjs.zoomOut=function(){
    cmpjs.viewer.camera.zoomOut(100000.0);
    var height=cmpjs.viewer.camera.positionCartographic.height;
    console.log(height)
    //滚动时事件穿透，鼠标在元素上时仍可缩放地球
    // if(height<100000){
    //     $('div[id^="popup-fylzStation2"]').show();
    //     $('div[id^="popup-fylzStation1"]').hide();
    //     $('div[id^="popup-fylzCity"]').hide();
    // }
    // if(height>100000 && height< 600000){
    //     $('div[id^="popup-fylzStation2"]').hide();
    //     $('div[id^="popup-fylzStation1"]').show();
    //     $('div[id^="popup-fylzCity"]').hide();
    // }
    // if(height>600000){
    //     $('div[id^="popup-fylzStation2"]').hide();
    //     $('div[id^="popup-fylzStation1"]').hide();
    //     $('div[id^="popup-fylzCity"]').show();
    // }
},
/**
 * 定位以及视角
 */
cmpjs.onCenter = function(x, y, h){
    cmpjs.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(x, y, h),  //设置位置
        duration: 0,
        orientation: {
            heading: Cesium.Math.toRadians(0.0),    //方向
            pitch: Cesium.Math.toRadians(-90.0),   //倾斜角度
            roll: 0.0
        }
    });
},
/**
 * 量测功能，距离量测
 */
cmpjs.drawPolyline = function() {
    cmpjs.measureSurface = new mars3d.Measure({
        viewer: cmpjs.viewer,
        terrain: false
    });

    //测量长度
    cmpjs.measureSurface.measureLength();


},
/**
 * 面积量测
 */
cmpjs.measureArea = function() {
    let measureSurface = new mars3d.Measure({
        viewer: cmpjs.viewer,
        terrain: false
    });
    measureSurface.measureArea();    //测量面积
},
/**
 * 高度测量
 */
cmpjs.measureHeight = function() {
    let measureHeight = new mars3d.Measure({
        viewer: cmpjs.viewer,
        terrain: false
    });
    measureSurface.measureHeight();   //测量高度
},

/**
 * 清楚测量结果
 */
cmpjs.clearMeasure = function(){
    cmpjs.measureSurface.clearMeasure();    //清除测量结果
};

cmpjs.addBindboad = function(){
    let markerArr = [];
    let markerArr1 = [];
    console.log(Http.$axios);


    Http.$axios.get('/api/demo/UserController/ProvinceStationData').then((res) =>{
        console.log(res);
        debugger;
        for(let i = 0; i < res.data[0].length; i++){
            markerArr1[i] = {};
            markerArr1[i].x = res.data[0][i].longitude;
            markerArr1[i].y = res.data[0][i].latitude;
            markerArr1[i].province = res.data[0][i].province;
            markerArr1[i].markerId = i;
        }
    })

}

export default cmpjs;