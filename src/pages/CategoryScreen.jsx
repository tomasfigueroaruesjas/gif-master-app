import React, { useEffect, useState } from "react";
import InfoCategory from '../components/InfoCategory'
import { getGifSearch } from '../helpers/fetchApi'
import { useParams } from 'react-router-dom';

const CategoryScreen = () => {
  const {id} = useParams();
  let datos = {};
  const [cantidad, setCantidad] = useState(18)

  useEffect(() => {
    getGifSearch(id, 18).then(resp => {
      let arr = [];
      resp.forEach((element) => {
        const { title, id } = element;
        const { url } = element.image.original
        arr.push({title, id, url})
      })

    })
  }, [])


  switch(id) {
    case "entertainment":
      datos = {
        categoria: "Entertainment",
        imagen:
          "https://media.giphy.com/avatars/entertainment/Poc7fb6dD9q5/200h.gif",
        texto: "Get the latest GIFs from movies, TV, music, celebrities.",
      };
      break;

    case "sports":
      datos = {
        categoria: "Sports",
        imagen:
          "https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif",
        texto:
          "Your go-to for any and all sports GIFs! LeBron, Ronaldo, Gronk, Serena...We've got them all!",
      };
      break;
    case "reactions":
      datos = {
        categoria: "Reactions",
        imagen:
          "https://media.giphy.com/channel_assets/reactions/k2ybPvSfRQuK/200h.gif",
        texto: "Don't tell it to me, GIF it to me!",
      };
      break;
  }

  console.log(id)
  return (
    <div className="container">
      <div className="row">
        {/* Información de categorias  */}
        <InfoCategory datos={datos} />
        {/* Tarjetas de giofs  */}
      </div>
    </div>
  );
};

export default CategoryScreen;
