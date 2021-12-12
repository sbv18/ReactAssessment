import React from "react";
import { Route, Redirect } from "react-router-dom";
import ManagerHome from "./Managers/Home";
import WFMHome from "./WFM/Home";


const ProtectedRoute = ({...rest }:any) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
      rest.token !== "NA"? rest.usertype==="manager"?(
          <ManagerHome/>
        ):(<WFMHome/>) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;
