<template>
    <div>
        <search-top :tableArr="tables"></search-top>
        <basics-table :baseC="baseConfig" :apiConfig="apiName"></basics-table>
    </div>
</template>

<script>
// import { userList, userCount } from "api/list/allApi.js";
import SearchTop from "components/customTemplate/search/InputList";
import BasicsTable from "components/customTemplate/table/BasicsTable";
export default {
    name: "user",
    components: {SearchTop, BasicsTable },
    data() {
        return {
            baseConfig: {
                //向子组件传值 basicsTable配置
                loading: false,
                columns: [//列表头部需要的数据名称--title,与后台对应接受的参数名--key,列表项显示是位置--align;
                    { title: "用户账号", key: "userName", align: "center" },
                    { title: "真实姓名", key: "trueName", align: "center" },
                    { title: "创建时间", key: "createTime", align: "center" },
                    { title: "注册途径", key: "user_ek1", align: "center" },
                    { title: "身份证号码", key: "cardId", align: "center" }
                ],
                data: [],
                page: 1, //默认第一页
                tots: 0, //总计多少条  默认0
                putData: {
                    pageSize: 10 //每页显示多少条  默认10条
                }
            },
            apiName: {//需要调用的接口方法名称
                count: "count",
                list: "list"
            },
            //向子组件传值 search-top配置
            tables: [
				{kind:'date',id:'star',placeholder:"开始时间",type:'date'},
				{kind:'date',id:'end',placeholder:"结束时间",type:'date'},
				{kind:'textInput',name:'用户名称:',id:'userName',placeholder:"请输入用户名称"},
				{kind:'textInput',name:'手机号码:',id:'phone',placeholder:"请输入手机号码"},
			]
        };
    }
};
</script>

<style scoped>

</style>