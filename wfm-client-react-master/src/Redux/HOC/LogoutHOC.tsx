import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Logout from '../../Logout';

export default connect(
    (state:any)=>{
        return {
            token: state.loginData.token,
            usertype: state.loginData.usertype
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            performLogout:()=>{
                localStorage.removeItem("username")
                localStorage.removeItem("usertype")
                localStorage.removeItem("token")
                return {type: "LOGOUT_SUCCESS", data: 
                {
                   username:"NA",
                   usertype:"NA",
                   token: "NA"
                }}
            }
        },dispatch)
    }
)(Logout)