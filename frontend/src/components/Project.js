import React from 'react'
import {Link} from 'react-router-dom'

const Project = ({pro}) => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">{pro.id}</span>
                <span className="block text-indigo-600">Title: {pro.title}</span>
                <span className="block text-indigo-400">Description: {pro.description}</span>
                <br/>
                <Link to={`/view/${pro.id}`}><button type="submit" className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    View
                    </button></Link>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <span className="block text-indigo-400">Required Money: {pro.req_money}</span>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Project
