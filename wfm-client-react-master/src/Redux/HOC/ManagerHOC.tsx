import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ManagerGrid from '../../Managers/Manager';
import { setSelectedEmployee } from '../Actions/Actions';

export default connect(
    (state:any)=>{
        return {
            empList: state.empData.managerData,
            openModal: state.empData.openModal,
            username:state.loginData.username,
            token:state.loginData.token
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            getEmployee:(manager:any)=>{
                return {type: "GET_MGR_EMP_ACTION",data:manager}
            },
            setSelectedEmployee: setSelectedEmployee,

        },dispatch)
    }
)(ManagerGrid)