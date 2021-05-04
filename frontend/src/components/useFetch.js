import {useEffect} from 'react'

const useFetch = (set,url,updateStatus) => {

    const getData = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        set(data);
    }

    useEffect(()=>{
        getData()
    },[updateStatus])
}

export default useFetch