<template>
    <div class="commonBottom">
        <div class="fiveLine lf">
            <div class="firstLine"></div>
            <div></div>
            <div class="thirdLine"></div>
            <div></div>
        </div>
        <div class="xyMessage lf">
            <div class="lon lf">
                <span>经度:</span>
                <span>{{this.$store.state.x}}</span>
            </div>
            <div class="lat lf">
                <span>纬度:</span>
                <span>{{this.$store.state.y}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonBottom',
    data(){
        return {
            x: null,
            y: null
        }
    }
}
</script>

<style lang="stylus" scoped>

    .commonBottom
        width: 100%;
        height: 5.648vh;
        position: absolute;
        border-top:1px solid #00FFFF
        bottom: 0
        .fiveLine
            height: 1.85vh
            margin-left: .1rem
            margin-top: 1.759vh
            div
                float:left
                background:#59E1FE
                width: 0.04rem
                height: 1.85vh
            div.firstLine
                width: .2rem
                margin-right: 3px
            .thirdLine
                margin-left: .03rem
                margin-right: .03rem
        .xyMessage
            height: 1.85vh
            margin-left: .26rem
            margin-top: 1.759vh
            color: white
            font-size: .14rem
            .lat
                margin-left: .34rem
</style>


