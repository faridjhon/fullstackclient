import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders';
import Admin from './Components/Admin';
import Checkout from './Components/Home/Checkout';


import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
    <Router>
      <Header/>
      <Switch>
         <Route path="/Home">
          <Home />
        </Route> 
        <PrivateRoute path="/Orders">
          <Orders />
        </PrivateRoute> 
        <PrivateRoute path="/Admin">
          <Admin />
        </PrivateRoute> 
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        
        <PrivateRoute path="/product/:id">
                <Checkout/>
             </PrivateRoute>  
              

      </Switch>      
    </Router>
    </UserContext.Provider>
  );
}

export default App;