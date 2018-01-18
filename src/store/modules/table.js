const table = {
    state: {
        putData:''
    },
    mutations: {
        SET_SERCHDATA:(state,data) => {
            state.putData = data
        }
    },
    action: {

    }
}
console.log(table.state.putData);
export default table;