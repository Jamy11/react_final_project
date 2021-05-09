import React from 'react'
import {useHistory} from 'react-router-dom'
const UserDashboard = () => {
    
    const user = JSON.parse(localStorage.getItem('user-info'))[0];

    return (
        <div className='container mx-auto px-4'>
            <h1 className={'lg:text-4xl sm:text-3xl font-medium'}>User DashBoard</h1>
            
            
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Addrss: {user.adress}</h2>
            <h2>Subscription: {user.subscription_id == 1? 'Basic' : user.subscription_id == 2 ? "Standard" : 'Premium'}</h2>
            <br/>

        </div>
    )
}

export default UserDashboard
