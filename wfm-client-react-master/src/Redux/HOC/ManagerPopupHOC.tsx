import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ManagerModal from '../../Managers/ManagerPopup';
import { setShowModal } from '../Actions/Actions';

export default connect(
    (state:any)=>{
        return {
            buttonLabel: state.empData.buttonLabel,
            selectedEmployee: state.empData.selectedEmployee,
            token:state.loginData.token
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            setShowModal: setShowModal,
            buttonAction: (token, selectedEmployee, message)=>{
                return {
                    type: "UPDATE_EMP_ACTION",
                    data:{
                            selectedEmployee:selectedEmployee,
                            message:message,
                            token:token
                          }
                    }
            }
        },dispatch)
    }
)(ManagerModal)