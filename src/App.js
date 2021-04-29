
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/./Header/Header';
import Login from './Component/Login/Login';
import AddProducts from './Component/./AddProducts/AddProducts';
import Checkout from './Component/CheckOut/Checkout';
import Privateroute from './Component/Privateroute/Privateroute';
import { createContext, useState } from 'react';
import Orders from './Component/Orders/Orders';

export const userContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState([])
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Header/>
        <Switch>
          <Privateroute path="/admin">
            <AddProducts />
          </Privateroute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Privateroute path="/checkout/:_id">
            <Checkout />
          </Privateroute>
          <Privateroute path="/order">
            <Orders/>
          </Privateroute>
        </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
