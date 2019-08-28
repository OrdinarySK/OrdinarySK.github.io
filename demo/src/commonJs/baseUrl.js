/**
 * 定义整个项目的所有的静态请求地址的全局js文件
 *
 */

const baseUrl = {};    //创建一个基础地址的对象

baseUrl.cesiumInitUrl = "https://assets02.agi.com/stk-terrain/v1/tilesets/world/tiles";   //备用地址 https://www.supermapol.com/realspace/services/3D-stk_terrain/rest/realspace/datas/info/data/path
//baseUrl.cesiumInitMyaccessToken = "pk.eyJ1IjoiYW5hbHl0aWNhbGdyYXBoaWNzIiwiYSI6ImNpd204Zm4wejAwNzYyeW5uNjYyZmFwdWEifQ.7i-VIZZWX8pd1bTfxIVj9g";   // cesium 初始化的时候的获取mapbox.statellite的Token
baseUrl.cesiumInitCiaWebTileUrl = "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=220f7f003eac60017c5aa3cdd7414b9e";  // 调用天地图的墨卡托Wmts服务接口地址
baseUrl.cesiumInitImgWebTileUrl = "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=220f7f003eac60017c5aa3cdd7414b9e"

export default baseUrl;   //导出模块

