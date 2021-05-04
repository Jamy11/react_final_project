import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NavbarHome from './navbar/NavbarHome';
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
              <Route exact='/' component={Home} />
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
