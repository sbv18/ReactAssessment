export const setShowModal=(value: boolean) => {
    return {
        type: "SET_MODAL_ACTION",
        data:{
                   openModal:value
              }
        }
}


export const setSelectedEmployee=({openModal, buttonLabel, selectedEmployee}:any) => {
    return {
        type: "SELECT_EMP_ACTION",
        data:{
            openModal: openModal, 
            buttonLabel: buttonLabel, 
            selectedEmployee: selectedEmployee
              }
        }
}

export const setSelectedSoftlock=({buttonLabel, selectedSoftlock}:any) => {
    return {
        type: "SELECT_LOCK_ACTION",
        data:{
                buttonLabel: buttonLabel, 
                selectedSoftlock: selectedSoftlock
            }
        }
}

