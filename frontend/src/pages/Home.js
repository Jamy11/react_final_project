import React,{useState} from 'react'
import Projects from '../components/Projects';
import useFetch from '../components/useFetch';

const Home = () => {
     
  const [project,setProject] = useState([]);
  const [STATUS,setStatus] = useState();
  const url ='http://127.0.0.1:8000/api/';


  useFetch(setProject,url,setStatus);
  //console.log(project); 

    return (
        <div className="bg-gray-400">
            <Projects project={project}/>
        </div>
    )
}

export default Home
