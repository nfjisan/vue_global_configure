const store = {
    state: {
        modalTitle: '',
        formObject : {},
        dataList : {},
        httpRequest : false,
        updateId : '',
        formType : 1,
    },
    mutations: {
        modalTitle(state, value){
            state.modalTitle = value
        },
        formObject(state, value){
            state.formObject = value
        },

        dataList(state, value){
            state.dataList = value
        },

        httpRequest(state, value){
            state.httpRequest = value
        },
        formType(state, value){
            state.formType = value
        },
        updateId(state, value){
            state.updateId = value
        },
    },
    getters : {
        dataList(state) {
            return state.dataList;
        },
        formObject(state) {
            return state.formObject;
        },
        httpRequest(state) {
            return state.httpRequest;
        },
        formType(state) {
            return state.formType;
        },
        updateId(state) {
            return state.updateId;
        },
    },
    actions: {},
};

export default store;
