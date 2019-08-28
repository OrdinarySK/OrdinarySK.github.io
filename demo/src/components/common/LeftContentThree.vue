<template>
    <div class="leftContentThree">
        <!--第二部分-->
        <div class="assessDetail">
            <div class="bestCityTitle">
                <!--宽窄竖线-->
                <div class="doubleLine lf">
                    <div class="wide lf"></div>
                    <div class="narrow lf"></div>
                </div>
                <!--最优城市-->
                <div class="bestCityP lf">
                    <div class="bestCityName lf">全国2011-2016年极端气象数据统计</div>
                </div>
            </div>
            <div class="threeLine">
                <div class="firstLine lf"></div>
                <div class="secondLine lf"></div>
                <div class="thirdLine lf"></div>
            </div>
            <div class="bestCharts">
                <div id="bestCharts"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { getExtremeData } from '../../api/common/index'
    let echarts = require('echarts');
    export default {
        name: 'LeftContentThree',
        data(){
            return{
                chartsCity:[],
                chartsList1:[],
                chartsList2:[],
                chartsList3:[],
                chartsList4:[],
                chartsList5:[]
            }
        },
        mounted(){
            // this.getProvinceData()
            this.getProvinceDataInfo()
        },

    methods: {
        // getProvinceData(){
        //     axios.get(this.$comjs.CountrySumDataUrl).then(
        //         this.getProvinceDataInfo
        //     )
        // },
        getProvinceDataInfo(){

            getExtremeData().then((res) =>{
                if(res && res.status == 200){
                    var chartsCity  = [];
            var charList = [];
            charList[0] = [];
            charList[1] = [];
            charList[2] = [];
            charList[3] = [];
            charList[4] = [];
            for(var i=0;i<5;i++){
                for(var j=0;j<6;j++){
                    charList[i][j]=res.data[i][j].country_sum;
                }
            }

            let bestCharts = echarts.init(document.getElementById('bestCharts'));
            let option1 = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                color:['#27CB8F', '#0BD74E', '#0D83D6', '#FF680D', '#A1A1A1'],
                legend: {
                    data: ['大暴雨', '高温天气','强热带风暴','寒潮','大风'],
                    textStyle :{
                        color: '#fff'
                    },
                    top: 10,
                    itemWidth: 24,
                    itemHeight: 16,
                    itemGap: 6,
                },
                    grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'category',
                    data: ["2011","2012","2013","2014","2015","2016"],
                    axisLine: { //坐标轴轴线相关设置。数学上的x轴
                        show: true,
                        lineStyle: {
                            color: '#fff',
                        },
                    },
                    axisLabel: { //坐标轴刻度标签的相关设置
                        textStyle: {
                            fontSize : 12,
                            color: '#fff',
                            //margin:81,
                        },
                        interval:0,
                        rotate:0 //字体旋转
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#fff',
                        }
                    },
                },
                yAxis: {
                    type: 'value',

                    axisLabel: { //坐标轴刻度标签的相关设置
                        textStyle: {
                            color: '#fff',
                            //margin:15,
                        },
                    },
                    axisLine: { //坐标轴轴线相关设置。数学上的x轴
                        show: true,
                        lineStyle: {
                            color: '#fff',
                        },
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#fff',
                        }
                    },
                },
                series: [
                    {
                        name: '大暴雨',
                        type: 'bar',
                        stack: '总量',
                        data: charList[0],
                        //data: [262, 361, 360, 299, 332, 448]
                    },
                    {
                        name: '高温天气',
                        type: 'bar',
                        stack: '总量',
                        data: charList[1],
                        // data: [499, 588, 458, 726, 564, 762]
                    },
                    {
                        name: '强热带风暴',
                        type: 'bar',
                        stack: '总量',
                        data: charList[2]
                        // data: [459, 569, 604, 467, 538, 621]
                    },
                    {
                        name: '寒潮',
                        type: 'bar',
                        stack: '总量',
                        data: charList[3]
                        // data: [1143, 1163, 1397, 1328, 1064, 1059]
                    },
                    {
                        name: '大风',
                        type: 'bar',
                        stack: '总量',
                        data: charList[4]
                        // data: [7460, 8436, 8270, 7435, 8853, 9112]
                    }
                ]
            };
            if(document.documentElement.clientWidth <= 1594){
                option1.legend.itemWidth = 12;
                option1.legend.itemHeight = 8;
                option1.legend.itemGap=2;

                option1.xAxis.axisLabel.textStyle.fontSize = 9;
                option1.xAxis.axisLabel.rotate = -40;

            }else{
                option1.legend.itemWidth = 24;
                option1.legend.itemHeight = 16;
                option1.legend.itemGap=6;

                option1.xAxis.axisLabel.textStyle.fontSize = 12;
                option1.xAxis.axisLabel.rotate = 0;
            }
            bestCharts.setOption(option1);
            window.addEventListener("resize", function () {
                if(document.documentElement.clientWidth <= 1594){
                    option1.legend.itemWidth = 12;
                    option1.legend.itemHeight = 8;
                    option1.legend.itemGap=2;

                    option1.xAxis.axisLabel.textStyle.fontSize = 9;
                    option1.xAxis.axisLabel.rotate = -40;
                }else{
                    option1.legend.itemWidth = 24;
                    option1.legend.itemHeight = 16;
                    option1.legend.itemGap=6;

                    option1.xAxis.axisLabel.textStyle.fontSize = 12;
                    option1.xAxis.axisLabel.rotate = 0;
                }
                bestCharts.setOption(option1);
                bestCharts.resize();
            });
                }else{
                    console.log("获取数据失败");
                }
            })

         }
        }

    }
</script>

<style lang="stylus" scoped>
    /* 样式穿透 .leftContentTwo >>> .littleLine */
    /* 所有样式 */
    .leftContentThree
        width: 4.03rem
        height: 32.1vh
        color: white
        background :rgba(7,23,42,0.49)
        .assessDetail
            .bestCityTitle
                width: 100%
                height: 5vh
                padding-top: 1.8vh
                .doubleLine
                    width: .11rem
                    height: 1.9vh
                    .wide
                        width: .07rem
                        height: 1.9vh
                        background : #41E6FD
                    .narrow
                        width: .02rem
                        height: 1.9vh
                        background : #41E6FD
                        margin-left: .02rem
                .bestCityName
                    font-size: .18rem
                    font-family: FZZXHJW--GB1-0
                    margin-left: .12rem
            .threeLine
                width: 100%
                height: .03rem
                .firstLine
                    width: 3.4rem
                    height: .03rem
                    background : #41E6FD
                .secondLine
                    width: .08rem
                    height: .03rem
                    background: #333
                    margin-left: .06rem
                    margin-right: .04rem
                .thirdLine
                    width: .44rem
                    height: .03rem
                    background: #FFFFFF
            .bestCharts
                #bestCharts
                    width: 21vw
                    height: 27vh
</style>


