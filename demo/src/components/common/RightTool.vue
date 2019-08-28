<template>
    <div class="rightTool">
        <div class="toolBar">
            <!--下方工具条-->
            <div class="defaultTool">
                <div class="iconfont" @click="zoomIn">&#xe614;</div>
                <div class="iconfont" @click="zoomOut">&#xe664;</div>
                <div class="iconfont" @click="onCenter">&#xe65b;</div>
                <div class="iconfont" @click="qiehuan" v-html="iconD"></div>
                <!-- <div class="iconfont" >&#xe75a;</div>
                <div class="iconfont" >&#xe82e;</div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RightTool',
    data(){
        return{


                isIndex: 0,
                chartsShow: false,
                iconD:"&#xe606",
                qiehuan2D:"&#xe604",
                qiehuan3D:"&#xe606",
                isThree: true
        }
    },
    mounted(){

    },
    methods:{
        // 二三维切换
            qiehuan: function(){
                if(this.isThree){
                    this.iconD = this.qiehuan2D
                    this.threeTwo()
                    this.isThree = false
                    this.$cmpjs.onCenter(108.354167,32.7083333,8000000.0)
                }else{
                    this.iconD = this.qiehuan3D
                    this.twoThree()
                    this.isThree = true
                    this.$cmpjs.onCenter(108.354167,32.7083333,8000000.0)
                }
            },

            //地图缩放
            zoomIn: function(){
                this.$cmpjs.zoomIn();

            },
            zoomOut: function(){
                this.$cmpjs.zoomOut();
            },
            //定位，视角
            onCenter: function(){
                this.$cmpjs.onCenter(108.354167,32.7083333,8000000.0);
            },
            //量测
            drawPolyline: function(){
                this.$cmpjs.drawPolyline();
            },
            measureArea: function(){
                this.$cmpjs.measureArea();
            },
            //清除
            clearMeasure: function(){
                this.$cmpjs.clearMeasure();
            },
            //增加marker
            addMarkers: function(){
                this.$cmpjs.addMarkers();
            },
            addPloy: function(){
                this.$cmpjs.addPloy();
            },
            //测试23D切换
            threeTwo: function(){
                this.$cmpjs.threeToTwo();
            },
            twoThree: function(){
                this.$cmpjs.twoToThree();
            },
            rotate: function(){
                this.$cmpjs.rotate();
            }
    }
}
</script>

<style lang="stylus" scoped>
    .rightTool
        width:.46rem
        height: 87.8vh
        position: absolute
        top: 6.57vh;
        right:0
        background: rgba(7,23,42,0.49)
        font-size: .12rem
        cursor:pointer
        .toolBar
            .toolBtn
                width:100%
                font-size:.12rem
                dl.active
                    color: #4A4A4A
                    background: #16D0FF
                dl
                    width:100%
                    height : .6rem
                    background : #3A536E
                    padding-top: .1rem
                    margin-bottom : .01rem
                    color: #fff
                    dt
                        width: 0.24rem
                        height: 0.24rem
                        line-height :0.24rem
                        font-size: .24rem
                        margin: 0 auto
                        margin-bottom: .07rem
                        text-align : center
                    dd
                        width: 100%
                        text-align : center
                        margin-bottom:.07rem
        .defaultTool
            position: absolute
            bottom: 0
            color: #fff
            div
                width: .45rem
                height: .45rem
                line-height : .45rem
                text-align : center
                background : #3A536E
                margin-bottom : .01rem
</style>


