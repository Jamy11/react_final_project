import React from 'react'
import {Link} from 'react-router-dom'

const NavbarUser = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">


                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <button className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm m-3	'><Link to='/'>Home
                            </Link></button>
                            <button className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm m-3	'><Link to='/user/dashboard'>DashBoard
                            </Link></button>
                            <button className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm m-3	'><Link to='/edit'>Edit Bio
                            </Link></button>
                            <button className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm m-3	'><Link to='/upgradesubcription'>Upgrade Subscription
                            </Link></button>
                        </div>
                    </div>


                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <button className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm m-3	'>
                            <Link to='/logout'>Logut</Link></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavbarUser
