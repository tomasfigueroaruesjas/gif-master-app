import React, { useEffect, useState } from "react";
import {InfoCategory, GifCards} from '../components'
import { getGifSearch } from '../helpers/fetchApi'
import { useParams } from 'react-router-dom';
import useCategory from "../hooks/useCategory";

const CategoryScreen = () => {
  const {id} = useParams();
  const cantidadInicial = 18;
  let datos = {};
  const [cantidad, setCantidad] = useState(cantidadInicial)
  const gifs = useCategory(id, cantidad);

  useEffect(() => {
    setCantidad(cantidadInicial);
  }, [id]) 

  

  function showMore() {
    cantidad < 50 && setCantidad(cantidad + 6)
  }

  console.log(id)
  return (
    <div className="container">
      <div className="row">
        {/* Información de categorias  */}
        <InfoCategory id={id} />
        {/* Tarjetas de giofs  */}
        <GifCards categoria={id} gifs={gifs} showMore={showMore} />
      </div>
    </div>
  );
};

export default CategoryScreen;
