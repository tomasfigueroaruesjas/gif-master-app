import React, { useEffect, useState } from 'react'
import { getGifSearch } from '../helpers/fetchApi';

const useCategory = (categoria, cantidad) => {
    const [gifs, setGifs] = useState([]);
    useEffect(() => {
        getGifSearch(categoria, cantidad).then((resp) => {
          console.log(resp)
          let arr = [];
          resp.forEach((element) => {
            const { title, categoria } = element;
            const { url } = element.images.original;
            arr.push({title, categoria, url})
          })
          setGifs([...arr])
        })
    
    
      }, [categoria, cantidad])

  return gifs   // se retorna el state 
}

export default useCategory