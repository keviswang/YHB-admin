<template>
    <div>
        <Row>
            <Col :xs="24" :sm="12" :md="6" v-for="x in tableArr" :key="x.id"   class="inputList">
            <DatePicker class="ww" v-if="x.kind == 'date'" :id="x.id" :type="x.type" :options="options1" :placeholder="x.placeholder" style="width: 90%"></DatePicker>
            <Input v-if="x.kind == 'textInput'" :id="x.id" :placeholder="x.placeholder" style="width: 90%">
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
            value1: "",
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
    }
}
</script>

<style lang="scss" scoped>
    @import "static/css/scss/media-queries";
    // @import './mediaRes.scss';
    .inputList{
        
        @include medias(xsm) {
            background:#fff;
        }
    }
</style>