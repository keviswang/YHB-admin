<template>
	<div>
		<Row :gutter="26">
			<Col v-for="(x,index) in tableArr" :xs="x.colSize.xs" :sm="x.colSize.sm" :lg="x.colSize.lg" :key="x.id" class="inputList">
			<DatePicker v-model="tableArr[index].val" class="timeinput" v-if="x.kind == 'date'" :id="x.id" :type="x.type" :options="options1" :placeholder="x.placeholder" style="width: 100%;height:100%;" format="yyyy-MM-dd" @on-change="asd($event,x,index)"></DatePicker>
			<Input v-model="tableArr[index].val" v-if="x.kind == 'textInput'" :id="x.id" :placeholder="x.placeholder" style="width: 100%" @on-change="met(x,index)">
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
    mounted() {},
    methods: {
        met(x, index) {
            let putDataObj = new Object();
            for (let y in this.tableArr) {
                putDataObj[this.tableArr[y].id] = this.tableArr[y].val;
            }
            console.log(putDataObj);
        },
        asd($event,x,index) {
            console.log($event,x,index);
			
            let putDataObj = new Object();
            for (let y in this.tableArr) {
                console.log(this.tableArr[index]);
                putDataObj[this.tableArr[y].id] = this.tableArr[index].val;
				
            }
			console.log(putDataObj);
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