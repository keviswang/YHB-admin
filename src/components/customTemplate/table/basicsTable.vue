<!--
 * 作者: yantao.peng 
 * 
 * 说明：列表渲染模板,只需父组件配置baseC、apiConfig即可
 * 
 * 最后修改时间: Friday, 12th January 2018 8:19:18 pm
 * 
-->

<template>
    <div class="basicsTable">
        <Table :loading="loading" :columns="baseC.columns" :data="data1"></Table>
    </div>
</template>

<script>
import api from "api/user/userList.js";
import { tableList } from "static/bil/formatting";
export default {
    name: "basicsTable",
    props: {
        baseC: Object,
        apiConfig: Object
    },
    data() {
        return {
            loading: false,
            data1: []
        };
    },
    mounted() {
        this.bignFunce(); //挂载后立即执行bignFunce()
    },
    methods: {
        bignFunce() {
            let count = this.apiConfig.count; //父组件参数，用来查询api对应接口,count：名为count的接口;
            let list = this.apiConfig.list; //父组件参数，用来查询api对应接口,list：名为list的接口;
            this.backFunce(count).then(port => {
                //执行backFunce方法,根据传参返回对应接口方法;
                // console.log(port);
                this.getCount(port).then(count => {
                    //执行getCount()方法,根据方法参数请求后台接口并返回页数,port:返回的接口方法;
                    if (count > 0) {
                        this.backFunce(list).then(port => {
                            //判断页数是否大于0，true则执行backFunce()方法来获取列表数据,port:返回的接口方法;
                            this.getList(port);
                        });
                    }
                });
            });
        },
        backFunce(needPort) {
            //needPort:需要匹配名称与之想同的方法并返回;
            return new Promise((resove, reject) => {
                for (let x in api) {
                    if (x == needPort) {
                        resove(api[x]);
                    }
                }
            }).catch(error => {
                reject(error);
            });
        },
        getCount(port) {
            let CountData = {
                pageSize: this.baseC.putData.pageSize
            };
            return new Promise((resove, reject) => {
                port(CountData)
                    .then(response => {
                        if (response.data.count > 0) {
                            //当后台返回页数大于0时开始执行获取列表函数
                            this.tots = response.data.num;
                            resove(response.data.count);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        getList(port) {
            this.loading = true;
            let datas;
            let keys = [];
            let ListData = {
                //向后台请求的参数
                page: this.baseC.page, //向后台请求第几页
                pageSize: this.baseC.putData.pageSize //每页几条
            };
            port(ListData).then(response => {
                if (response.data) {
                    //关闭loading
                    this.loading = false;
                }
                datas = response.data;
                for (let x in this.baseC.columns) {
                    keys.push(this.baseC.columns[x].key);
                }
                this.data1 = tableList(datas, keys);
            });
        }
    }
};
</script>

<style scoped>

</style>