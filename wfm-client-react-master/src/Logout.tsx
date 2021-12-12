import React from "react";

const Logout = ({token, performLogout}:any) => {
    if (token !== "NA") {
        return <button type="button" className="glyphicon glyphicon-log-out" onClick={()=>{performLogout()}}>Logout</button>;
      }
return (<></>)
    
}

export default Logout;