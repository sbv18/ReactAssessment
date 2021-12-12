import {connect} from 'react-redux';
import App from '../../App';

export default connect(
    (state:any)=>{
        return {
            token: state.loginData.token,
            usertype: state.loginData.usertype
        }
    },
    null
)(App)