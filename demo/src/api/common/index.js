import request from 'axios'
//获取行政区划的省市县三级
// export default{
//     getXzqhTree: function(params){
//         return request.get('/api/dzyj/zhzs/getXzqhTree');
//     }
// }
/**
 *
 * @param {获取行政区域规划的省市县三级联动} params
 */
export function getXzqhTree(params){
    return request.get('http://localhost:8082/demo/ggys/getXzqhTree', {params:params});
}

// 根据城市名字模糊查询城市
export function getCitysByName(params){
    return request.get('http://localhost:8082/demo/ggys/getCitysByName', {params:params});
}

// 根据行政区划码获取行政区域的中心点经纬度
export function getCityXY(params){
    return request.get('http://localhost:8082/demo/ggys/getCityXY', {params:params});
}


//获取2011年-2016年的几年的极端统计
export function getExtremeData(){
    return request.get('http://192.168.86.162:8082/demo/UserController/getCountrySumData');
}