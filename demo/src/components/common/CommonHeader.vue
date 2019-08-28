<template>
    <div class="commonHeader">
    <div class="leftContent"></div>
    <header-center :proNameTitle="proNameTitle"></header-center>
    <header-search></header-search>
    </div>
</template>

<script>
import HeaderCenter from './HeaderCenter'
import HeaderSearch from './HeaderSearch'
export default {
    name: 'CommonHeader',
    data(){
        return {
            proNameTitle: '全国极端气象观测平台'
        }
    },
    components:{
        HeaderCenter,
        HeaderSearch
    },
    mounted: function(){
        //生命周期钩子函数
    },
    methods:{

    }

}
</script>

<style lang="stylus" scoped>
    .commonHeader
        width :100%
        height : 6.57vh
        font-size : .20rem
        position : absolute
        top : 0
        left : 0
        z-index:2
        display: flex
        background :rgba(7,23,42,0.49)
        border-bottom : 1px solid #2FDEFC
        color : white
        .leftContent
            width: 6.38rem
            height: 6.48vh
</style>

