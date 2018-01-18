<template>
    <div class="inputList">
        <Row>
            <Col v-for="(x,index) in tableArr" :xs="x.colSize.xs" :sm="x.colSize.sm" :md="x.colSize.md" :lg="x.colSize.lg" :key="x.id" >
            <!-- <Row style="line-height:32px;">
                <Col v-if="x.kind == 'date'" :xs="2" :sm="6" :lg="6" class="leftTitle">
                    <span style="">{{x.name}}</span>
                </Col>
                <Col :xs="22" :sm="18" :lg="18" style="max-width:90%"> -->
                <DatePicker v-model="tableArr[index].val" class="timeinput" v-if="x.kind == 'date'" :id="x.id" :type="x.type" :options="options1" :placeholder="x.placeholder" style="width: 100%;padding:0;" format="yyyy-MM-dd" @on-change="asd(tableArr[index].val=$event)"></DatePicker>
                <!-- </Col>
                </Row> -->

                <Input v-model="tableArr[index].val" v-if="x.kind == 'textInput'" :id="x.id" :placeholder="x.placeholder" style="width: 100%" @on-change="met(x,index)">
                <span slot="prepend">{{x.name}}</span>
                </Input>
            </Col>
            
        </Row>
        <Button icon="ios-search" type="primary" class="searchBtn" @click="commit">搜索</Button>
    </div>
</template>

<script>
// import 'static/css/scss/media-queries.scss'
export default {
    name: "",
    props: {
        tableArr: Array
    },
    data() {
        return {
            value: "",
            options1: {
                shortcuts: [
                    {
                        text: "Today",
                        value() {
                            return new Date();
                        },
                        onClick: picker => {
                            this.$Message.info("Click today");
                        }
                    },
                    {
                        text: "Yesterday",
                        value() {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            return date;
                        },
                        onClick: picker => {
                            this.$Message.info("Click yesterday");
                        }
                    },
                    {
                        text: "One week",
                        value() {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            return date;
                        },
                        onClick: picker => {
                            this.$Message.info("Click a week ago");
                        }
                    }
                ]
            }
        };
    },
    mounted() {
        // console.log(this.tableArr);
    },
    methods: {
        commit() {
            //根据this.tableArr[y].id找到所有节点下的input并获取value
            let dataArr = [];
            let putDataObj = new Object();
            for (let y in this.tableArr) {
                putDataObj[this.tableArr[y].id] = document
                    .getElementById(this.tableArr[y].id)
                    .getElementsByTagName("input")[0].value;
            }
            this.$store.commit("SET_SERCHDATA", putDataObj); //提交到store下 mutations状态下的SET_SERCHDATA方法 并将putDataObj存储到state下;
        },
        met(x, index) {},
        asd($event) {}
    },
    computed: {}
};
</script>

<style lang="scss" scoped>
@import "static/css/scss/media-queries";
.inputList {
    position: relative;
    text-align: center;
    .ivu-input-group {
        margin: 0 auto;
    }
    
    .searchBtn{
    padding: .375rem .6875rem;
    width: 5rem;
    }
    @include inputList();
}

</style>