// export default{
//     // 获取时间以及星期


//     changeXy (state, {x, y}){
//         state.x = x;
//         state.y = y;
//     }
// }
import * as types from "./mutation-types.js"

export default{
[types.CHANGE_XY](state, {x, y}){
    state.x = x;
    state.y = y;
}
};