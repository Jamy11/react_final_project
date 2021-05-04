import React, {useState, useEffect, useMemo} from 'react';
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom'
import axiosFetch from './components/axiosFetch';
import Projects from './components/Projects';
import useFetch from './components/useFetch';
import NavbarHome from './navbar/NavbarHome';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import AdminDashboard from "./pages/admin/Dashboard";
import NavbarAdmin from "./navbar/NavbarAdmin";
import {UserContext} from "./components/UserContext";
import AdminProfile from "./pages/admin/Profile";
import Logout from "./pages/auth/Logout";


function App() {
  const [logout,setLogout] = useState(true);
  const [loggedUser,setLoggedUser] = useState(false);
  const [loggedAdmin,setLoggedAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div>
      <Router>
        {logout && <NavbarHome/>}
        {loggedUser && <NavbarHome/>}
        {loggedAdmin && <NavbarAdmin/>}
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={() =>
                  <Login
                    callbacks={{setLogout, setLoggedAdmin, setLoggedUser, setCurrentUser}}
                  />}/>
              <Route path="/404" component={() => "Oops! 404 Not Found!"} />
              {!logout ?
                  <UserContext.Provider value={currentUser}>
                      <Route exact path='/admin/dashboard' component={AdminDashboard} />
                      <Route exact path='/user/dashboard' component={() => "Hola user"} />
                      <Route exact path='/admin/profile' component={AdminProfile} />
                      <Route exact path='/logout' component={() => <Logout callbacks={
                          {setLogout, setLoggedAdmin, setLoggedUser, setCurrentUser}
                      } />}
                      />
                  </UserContext.Provider>
                  : <Redirect to="/404" />
              }
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
