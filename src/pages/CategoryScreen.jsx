import React from "react";
import InfoCategory from '../components/InfoCategory'
import { useParams } from 'react-router-dom';

const CategoryScreen = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div className="container">
      <div className="row">
        {/* Información de categorias  */}
        <InfoCategory />
        {/* Tarjetas de giofs  */}
      </div>
    </div>
  );
};

export default CategoryScreen;
