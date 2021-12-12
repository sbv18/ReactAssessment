import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import  WfmGrid  from '../../WFM/WFMBase';
import { setSelectedSoftlock } from '../Actions/Actions';

export default connect(
    (state:any)=>{
        return {
            empList: state.empData.managerData,
            username:state.loginData.username,
            token:state.loginData.token,
            openModal:state.empData.openModal
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            getEmployee:(manager:any)=>{
                return {type: "GET_WFM_EMP_ACTION",data:manager}
            },
            setSelectedSoftlock: setSelectedSoftlock
        },dispatch)
    }
)(WfmGrid)