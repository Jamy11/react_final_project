import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import axiosFetch from './components/axiosFetch';
import Projects from './components/Projects';
import useFetch from './components/useFetch';
import NavbarHome from './navbar/NavbarHome';
import Login from './pages/auth/Login';
import Home from './pages/Home';


function App() {
  const [logout,setLogout] = useState(true);
  const [loggedUser,setLoggedUser] = useState(false);
  const [loggedAdmin,setLoggedAdmin] = useState(false);





  return (
    <div>
      <Router>
        {logout && <NavbarHome/>}
        {loggedUser && <NavbarHome/>}
        {loggedAdmin && <NavbarHome/>}
          <Switch>
              <Route path='/' exact  component={Home}/>
              <Route path='/login' exact component={Login} />
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
