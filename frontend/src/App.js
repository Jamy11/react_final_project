import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import axiosFetch from './components/axiosFetch';
import Projects from './components/Projects';
import useFetch from './components/useFetch';
import NavbarHome from './navbar/NavbarHome';
import AdminDashboard from './pages/admin/AdminDashboard';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import {userContext} from './components/userContext'
import NavbarUser from './navbar/NavbarUser';
import UserDashboard from './pages/user/UserDashboard';
import {LogOut} from './pages/LogOut';
import Register from './pages/auth/Register';

function App() {
  const [logout,setLogout] = useState(true);
  const [loggedUser,setLoggedUser] = useState(false);
  const [loggedAdmin,setLoggedAdmin] = useState(false);

console.log(loggedUser)
console.log(loggedAdmin)


  return (
    <div>
      <Router>
        {logout && <NavbarHome/>}
        {loggedUser && <NavbarUser/>}
        {loggedAdmin && <NavbarHome/>}



          <Switch>
                <Route path='/' exact  component={Home}/>

              <userContext.Provider value={{setLoggedUser,setLoggedAdmin,setLogout}}>
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />

                <Route path='/user/dashboard' exact component={UserDashboard} />
                <Route path='/admin/dashboard' exact component={AdminDashboard} />

                {/* <Route path='/view/:id' exact component={ViewProj}/> */}

                <Route path='/logout' exact component={LogOut}/>
              </userContext.Provider>      
          </Switch>


      </Router>
      
    </div>
  );
}

export default App;
