<template>
    <div class="linkage">
        <el-form
        ref="form"
        :model="form"
        label-width="80px">
        <el-form-item>
            <el-select
            v-model="province"
            placeholder="选择省"
            size="mini">
            <el-option
            label="全国"
            value="">
            </el-option>
            <el-option
            v-for="item in provinceList"
            :label="item.cname"
            :key="item.gbcode"
            :value="item.gbcode">
            </el-option>
            </el-select>

            <el-select
            v-model="city"
            placeholder="选择市"
            size="mini">
            <el-option
            v-for="item in cityList"
            :key="item.gbcode"
            :label="item.cname"
            :value="item.gbcode">
            </el-option>
            </el-select>

            <el-select
            v-model="county"
            placeholder="选择县"
            size="mini">
            <el-option
            v-for="item in countyList"
            :key="item.gbcode"
            :label="item.cname"
            :value="item.gbcode">
            </el-option>
            </el-select>

        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {getXzqhTree} from '../../api/common/index'
export default {
    name: 'Linkage',
    data() {
        return {
            form:{},

            provinceList: [],
            province: "",

            cityList: [],
            city: "",

            countyList: [],
            county: '',
        }
    },
    methods: {
        //初始化省份
        InitProvince(){
            let params = {gbcode:"", maplevel:"7"};
            getXzqhTree(params).then((res) =>{
                console.log(res);
                if(res && res.status == 200){
                    this.provinceList = res.data;
                }else{
                    console.log("获取行政区划数据失败");
                }
            })
        }
    },
    watch: {
        // 监听省的数据变化
        province: function(provinceVal){
            let params = {gbcode:provinceVal ,maplevel:"9"};
            getXzqhTree(params).then((res) =>{
                if(res && res.status == 200){
                    this.cityList = res.data;
                    this.city = "";

                }else{
                    console.log("获取行政区域失败");
                }
            })
        },

        //监听市的数据变化
        city: function(cityVal){
            let params = {maplevel:"11" ,gbcode: cityVal};
            getXzqhTree(params).then((res) =>{
                if(res && res.status == 200){
                    this.countyList = res.data;
                    this.county = "";
                }else{
                    console.log("获取行政区划数据失败");
                }
            })
        }
    },
    mounted(){
       this.InitProvince();
    }
}
</script>

<style scoped>

</style>


