// const token= localStorage.getItem("token") ? localStorage.getItem("token") : "NA"
// const username =  localStorage.getItem("username") ? localStorage.getItem("username") : "NA"

export const managerEmpReducer = (state={openModal:false, managerData:[]}, action)=>{
    switch(action.type){
        case "GET_EMP_SUCCESS":
            console.log(action.data)
            return  Object.assign({}, state, {managerData: action.data.managerData});
        case "SELECT_EMP_ACTION":
                console.log(action.data)
                return Object.assign({}, state, {
                    openModal: action.data.openModal, 
                    buttonLabel: action.data.buttonLabel, 
                    selectedEmployee: action.data.selectedEmployee});
        case "SET_MODAL_ACTION":
                console.log(action.data)
                return Object.assign({}, state, { 
                    openModal: action.data.openModal
                        });
        case "UPDATE_EMP_SUCCESS":
                console.log(action.data)
                return Object.assign({}, state, { 
                    openModal: action.data.openModal,
                    managerData: action.data.managerData
                        });
        case "SELECT_LOCK_ACTION":
                console.log(action.data)
                return Object.assign({}, state, {
                    openModal: true, 
                    buttonLabel: action.data.buttonLabel, 
                    selectedSoftlock: action.data.selectedSoftlock});
        case "UPDATE_LOCK_SUCCESS":
                console.log(action.data)
                return Object.assign({}, state, {
                    openModal: action.data.openModal, 
                    managerData: action.data.managerData
                });
        default:
            return state
    }
}