<template>
    <div class="rightContent">
        <div class="searchD">
            <input type="text" v-model = "keyword" style="color:white" placeholder="请输入城市或站点">
        </div>
        <GeminiScrollbar
            class="my-scroll-bar" v-show="keyword">
            <div class="search-content" >
            <ul class="searchUl">
                <li class="search-item"
                    v-for="(item,index) of list" :key="index"
                    @click="handleClickTo(item)"
                >
                    <span class="iconfont searchIcon" style="margin-left:20px">&#xe60b;</span>
                    <span class="searchIcon" style="margin-left:10px;font-size:15px">{{item.cname}}</span>
                </li>
            </ul>
            <div class="noSearch" v-show="hasNoData" style="line-height: 40px; font-size:16px;text-indent:20px">
                没有搜索到你想要的结果
            </div>
        </div>
        </GeminiScrollbar>

    </div>
</template>
<script>
import axios from 'axios'
import {getCitysByName, getCityXY} from '../../api/common/index'
import { clearTimeout, setTimeout } from 'timers';
export default {
    name: 'HeaderSearch',
    data(){
        return{
            keyword:"",
            list: [],
            timer: null,
            cities: null
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }

    },
    methods: {
        // getCitysByName(){
        //     let params ={cname: }
        //     getCitysByName(params).then((res) =>{

        //     })
        // }
        handleClickTo(item){
            let that = this;
            let params = {gbcode:item.gbcode};
            getCityXY(params).then((res) =>{
                if(res && res.status == 200){
                    console.log(res.data);
                    that.$cmpjs.onCenter(res.data.centerx, res.data.centery, 50000.0)
                }
            })
        }
    },
        watch: {
            keyword(value){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyword){
                    this.list = []
                    return
                }
                let params={cname: value}
                getCitysByName(params).then((res) =>{
                    console.log(res.data);
                    if(res && res.status == 200){
                        this.cities = res.data;
                    }else{
                        console.log("获取城市失败");
                    }

                })

                this.timer = setTimeout(() =>{
                    const result = [];
                    for(let i = 0; i < this.cities.length; i++){
                        result.push(this.cities[i]);
                    }
                    this.list = result;

                }, 100)
            }
        },
    mounted(){

    }
}
</script>
<style lang="stylus" scoped>
    .rightContent
            width: 6.38rem
            height: 6.48vh
            position: relative
            .searchD
                width: 2.22rem
                height: 2.77vh
                margin-left: 3.16rem
                border : 1px solid #59E1FE
                margin-top: .21rem
                margin-bottom: .19rem
                border-top-left-radius: .15rem
                border-bottom-left-radius: .15rem
                border-top-right-radius: .15rem
                border-bottom-right-radius: .15rem
                input
                    width: 1.6rem
                    display:inline-block
                    height:80%
                    margin-top:-5px
                    background: transparent
                    border: none
                    outline : none
                    margin-top: .05rem
                    margin-left: .2rem
                    color:white
                    font-size: .16rem
                .lineY
                    display: inline-block
                    width:1px
                    height: 1.76vh
                    background :#7D7D7D
                    margin-top:5px
                    vertical-align: top
                .iconfont
                    color:#00CCFF
                    margin-left:11px
            .my-scroll-bar
                width:260px
                height:320px
                background: #1C2630
                border: 1px solid #59E1FE
                position: absolute
                top: .6rem
                right: .8rem
                .search-content
                    .search-item
                        line-height:30px
                        cursor: pointer
</style>


