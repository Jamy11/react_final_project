import React,{useState} from 'react'

const Register = () => {

    const [newRegUser,setnewRegUser] = useState({
        "name": '',
        "email": "",
        "password": "",
        "address": "",
        "image": null,
        "subscription_id":null,
        "expire_date":null,
        "user_type": 'user',


        
    });
    const changeUser = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        let user={...newRegUser,[name] : value};
        setnewRegUser(user);
    }

    const addUser = async(user)=>{
        const res = await fetch('http://127.0.0.1:8000/api/register',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        const data = await res.json()
        
    }

    const onsubmit =(e)=>{
        e.preventDefault();

        addUser(newRegUser)
        alert('User Added. Login now.');
    }

    return (
        <div>
             <div
              className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
              Register
            </div>
            <div >
                <div className="w-full max-w-md"></div>
                    <form action="" className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" onSubmit={onsubmit}>
                        <div>
                            <label htmlFor="" className="block text-gray-700 text-sm font-normal mb-2">Name</label>
                            <input type="text" name="name" id="" onChange={changeUser} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div> 
                            <label htmlFor="" className="block text-gray-700 text-sm font-normal mb-2"> Email</label>
                            <input type="text" name="email" id="" onChange={changeUser} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div>
                            <label htmlFor="" className="block text-gray-700 text-sm font-normal mb-2">Adress</label>
                            <input type="text" name="adress" id="" onChange={changeUser} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div>
                            <label htmlFor="" className="block text-gray-700 text-sm font-normal mb-2">Password</label>
                            <input type="text" name="password" id="" onChange={changeUser} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div>
                        <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            
            </div>
    )
}

export default Register
