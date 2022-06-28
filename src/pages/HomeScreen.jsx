import React, { useEffect, useState } from "react";
import banner from "../assets/banner.gif";
import { getGifTrending } from '../helpers/fetchApi';

const HomeScreen = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGifTrending().then((response) => {
      console.log(response);
      let arr = [];
      response.forEach((item) => {
        const {id, title} = item;
        const {url} = item.images.original;

        arr.push({id, title, url})
      })
      setGifs([...arr]);
    })

    setLoading(false);
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="w-100">
            <img className="img_banner" src={banner} alt="banner" />
          </div>
        </div>
      </div>
      <div className="row mt-5 ">
        <div className="col">
          <h3 className="text-white">
            <i className="fa fa-line-chart" aria-hidden="true"></i> Trending
          </h3>
        </div>
      </div>

      {loading ? (
        <div className="col-6 offset-3">
          <h3 className="text-white text-center"> AAAAAAA URA </h3>
        </div>
      ) : 
      (
        <div className=" galeria">
        { gifs.map((gif, index) => (
          <div className="mb-3" key={index}>
            <img src={gif.url} className="img_galeria" alt={gif.title} />
          </div>
        )) }
        </div>
      )}

      
    </div>
  );
};

export default HomeScreen;
