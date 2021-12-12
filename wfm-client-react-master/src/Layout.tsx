
import React from "react";
import LogoutHOC from "./Redux/HOC/LogoutHOC";

const Layout = ({children}:any) => {

    return (
        <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-6 mb-2 mb-md-0 text-dark text-decoration-none">
       <h3>Welcome</h3>
      </a>
      <div className="col-md-3 text-end">
        <LogoutHOC></LogoutHOC>
      </div>
    </header>
	{children}
  </div>
    );
}


export default Layout;
