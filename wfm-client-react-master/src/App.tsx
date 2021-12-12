import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
import LoginHOC from './Redux/HOC/LoginHOC';
import Layout from './Layout';

const App=({token, usertype}:any)=>{
     return(
       <Layout>
    <Router>
      <Switch>
        <Route path="/login">
          <LoginHOC/>
        </Route>
        <ProtectedRoute path="/home" token={token} usertype={usertype}>
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="home" />
        </Route>
        <Route path="*">
          <Redirect exact from="/" to="home" />
        </Route>
      </Switch>
    </Router>
    </Layout>
     )
}
export default App;
