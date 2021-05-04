import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';

const Login = ({callbacks}) => {
  const {setLogout, setLoggedAdmin, setLoggedUser, setCurrentUser} = callbacks;
  const history = useHistory();
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: ""
  });

  const validateUser = async (e) => {
    e.preventDefault();
    const data = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(loginCreds)
    });
    const responseData = await data.json();
    if(!responseData.isEmpty) {
      setLogout(false);
      setCurrentUser(responseData);
      if(responseData.user_type === 'admin') {
        setLoggedAdmin(true);
        history.push('/admin/dashboard');
      } else {
        setLoggedUser(true);
        history.push('/user/dashboard');
      }
    }
  };

  const handleChange = (e) => {
    let attrib = e.target.name;
    let value = e.target.value;
    setLoginCreds({...loginCreds, [attrib]: value});
  };

    return (
        <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <form onSubmit={validateUser} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            
            <div
              className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
              User Login
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                autoFocus
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
                autoComplete="current-password"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign In</button>
              <a
                className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2021 React Corp. All rights reserved.
          </p>
        </div>
      </div>
    )
}

export default Login
