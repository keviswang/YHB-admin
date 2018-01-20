const table = {
    state: {
        putData:''
    },
    mutations: {
        SET_SERCHDATA:(state,data) => {
            if( state.putData == '') {
                state.putData = data
            }
            
        }
    },
    action: {

    }
}
export default table;