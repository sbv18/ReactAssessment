import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import WfmModal from '../../WFM/WfmPopup';
import { setShowModal } from '../Actions/Actions';

export default connect(
    (state:any)=>{
        return {
            buttonLabel: state.empData.buttonLabel,
            selectedSoftlock: state.empData.selectedSoftlock,
            token:state.loginData.token
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            setShowModal: setShowModal,
            buttonAction: (token, managerstatus, selectedSoftlock)=>{
                return {
                    type: "UPDATE_LOCK_ACTION",
                    data:{
                            selectedSoftlockId:selectedSoftlock.lockid,
                            manager:selectedSoftlock.wfm_manager,
                            managerstatus: managerstatus,
                            token:token
                          }
                    }
            }
        },dispatch)
    }
)(WfmModal)