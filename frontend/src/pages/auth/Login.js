import React,{useState,useContext} from 'react'
import useFetch from '../../components/useFetch'
import {useHistory} from 'react-router-dom'
import {userContext} from '../../components/userContext'

const Login = () => {
  const {setLoggedUser,setLoggedAdmin,setLogout} = useContext(userContext)
  const [newUser,setnewUser] = useState({
      
      "email": "",
      "password": "",
      
  });

  const changeUser = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      let user={...newUser,[name] : value};
      setnewUser(user);
      
  }
  //console.log(newUser);

  const history = useHistory();

  // useEffect(()=>{
  //   if(localStorage.getItem('user-info')){
  //     history.push('/dashboard');
  //   }
  // },[])

  const onsubmit = async(e) =>{
    e.preventDefault();
    if(newUser.email != '' && newUser.password){

      let result = await fetch('http://127.0.0.1:8000/api/login',{
        method:'POST',
        headers:{
          'Content-Type': "application/json",
          'Accept': "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await result.json()

      // console.log(data[0].user_type)
      if(!data.isEmpty){
        setLogout(false);
        setnewUser({'email':'','password':''})


        if(data[0].user_type === 'user'){
          localStorage.setItem('user-info',JSON.stringify(data))
          setLoggedUser(true)
          history.push('/user/dashboard');
          
        }
        else{
          localStorage.setItem('user-info',JSON.stringify(data))
          setLoggedAdmin(true)
          history.push('/admin/dashboard');
          
        }
      }
      


    }
    else{
      return false;
    }
  }

    return (
        <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" onSubmit={onsubmit} >
            
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
                autoComplete="on"
                onChange={changeUser}/>
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
                onChange={changeUser}/>
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
