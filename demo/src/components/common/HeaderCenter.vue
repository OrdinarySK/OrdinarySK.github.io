<template>
    <div class="centerContent">
        <div class="proLogo">
            <img :src="imgSrc">
        </div>
        <div class="proName">
            <div class="proNameTitle">{{proNameTitle}}</div>
        </div>
        <div class="splitLine">
        </div>
        <div class="proTime">
            <div class="proTimeClock">{{proTimeClock}}</div>
            <div class="proTimeDate">{{proTimeDate}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderCenter',
    props:{
        proNameTitle: String,
    },
    data(){
        return{
            imgSrc: require('../../assets/images/zjlogo.png'), //相对于html路径
            proTimeClock: '',
            proTimeDate: '',
            timer:null
        }
    },
    mounted() {
        //钩子涉及到dom，设置css时需要渲染后才能生效，一般不用beforeMounte
        this.getDate();
        this.timer = setInterval(this.getDate ,1000)
    },
    beforeDestroy(){
        clearInterval(this.timer);
        this.timer = null;
    },
    methods: {
        getDate: function(){
            let date = new Date()
            let hour = date.getHours()
            let minute = date.getMinutes()
            let second = date.getSeconds()
            let month = date.getMonth() + 1
            let today = date.getDate()
            let time = this.timeToString(hour) + ":" + this.timeToString(minute) + ":" + this.timeToString(second)
            let year = date.getFullYear() + "-" + this.timeToString(month) + "-" +  this.timeToString(today)
            let weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
            let week = weekday[date.getDay()]
            this.proTimeClock = time
            this.proTimeDate = year+ ' ' + week
        },

        //修改数字时间显示
        timeToString: function(nowTime){
            if(nowTime<10){
                return "0" + nowTime;
            }else{
                return ''+ nowTime;
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .centerContent
            width: 6.42rem
            height: 6.48vh

            .proLogo
                float:left
                width:.47rem
                height : 4.44vh
                margin-top: 1.1vh
                margin-left: .59rem
                img
                    width: .47rem
                    height : 4.44vh
            .proName
                float:left
                margin-top: 1.11vh
                margin-left: .15rem
                margin-right: .15rem
                font-family: '方正正纤黑简体'
                .proNameTitle
                    height: 1.85vh
                    width:  2.2rem
                    font-size: .2rem
                    margin-top: 10px
                .proNameProd
                    width: 2.2rem
                    height: 1.85vh
                    color: #000
                    line-height: 1.85vh
                    font-size: .14rem
                    background : #59E1FE
                    margin-top: 0.6vh
                    text-indent : 0.06rem
            .splitLine
                width: .02rem
                height: 4.44vh
                background: #59E1FE
                float:left
                margin-top: .12rem
                margin-right: .15rem
            .proTime
                float:left
                margin-top: .12rem
                font-family: Courier
                .proTimeClock
                    width: 1.26rem
                    height: 2.13vh
                    line-height: 2.13vh
                    font-family: Courier
                    font-size: .3rem
                    margin-bottom : 0.11rem
                .proTimeDate
                    font-size: .16rem
                    line-height : 1.48vh
                    color: #59E1FE
                    letter-spacing: 0rem
</style>