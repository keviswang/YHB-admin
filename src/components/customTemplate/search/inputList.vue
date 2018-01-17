<template>
    <div>
        <Row :gutter="26">
            <Col v-for="x in tableArr" :xs="x.colSize.xs" :sm="x.colSize.sm" :lg="x.colSize.lg" :key="x.id" class="inputList">
            <DatePicker  class="timeinput" v-if="x.kind == 'date'" :id="x.id" :type="x.type" :options="options1" :placeholder="x.placeholder" style="width: 100%;height:100%;"></DatePicker>
            <Input v-if="x.kind == 'textInput'" :id="x.id" :placeholder="x.placeholder" style="width: 100%" @on-change="met">
            <span slot="prepend">{{x.name}}</span>
            </Input>
            </Col>
        </Row>
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
        
    },
    methods: {
        met() {
            console.log(this.tableArr);
            for(let x in this.tableArr) {
                
            }
        }
       
    },
    computed: {}
};
</script>

<style lang="scss" scoped>
@import "static/css/scss/media-queries";
.inputList {
    text-align: center;
    .ivu-input-group {
        margin: 0 auto;
    }
    @include medias();
    
}
</style>