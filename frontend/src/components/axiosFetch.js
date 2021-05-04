import React from 'react'
import axios from 'axios'
const axiosFetch = async(set,url) => {
    axios.get(url)
      .then(res => {
        const persons = res.data;
        set({ persons });
      })
}

export default axiosFetch
