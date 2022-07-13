import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { GifCards } from "../components";
import useCategory from "../hooks/useCategory";

const SearchScreen = () => {
  const { termino } = useParams();
  const gifs = useCategory(termino, 18)
  const cantidadInicial = 18
  const [cantidad, setCantidad] = useState(cantidadInicial)

  useEffect(() => {
    setCantidad(cantidadInicial);
  }, [id]) 

  function showMore() {
    cantidad < 50 && setCantidad(cantidad + 6)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* Tarjetas con los gif encontrados en la búsqueda  */}
          <GifCards categoria={termino} showMore={showMore} gifs={gifs}  />
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
