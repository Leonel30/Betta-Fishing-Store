import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
// import useProducts from "../../hooks/useProducts";
import {collection,getDocs} from 'firebase/firestore'

import { db } from '../firebase/config'
import { MainCarousel } from "../Carousel/MainCarousel";


const ItemListContainer = () => {

  const [loading,setLoading] = useState(true)
  
  
  const [products,setProducts] = useState([])
  
  
  const { id } = useParams();

  const productRef = collection(db,'items')

  getDocs(productRef)
  .then((prod)=>{
    const miProduct = (prod.docs.map((prod)=>({id:prod.id,...prod.data()})));
    setProducts(miProduct)
  })
  .finally(()=>(setLoading(false)))


  return (
    <div>
      <div className="title text-center py-1">
        <h1>Bienvenidos a nuestra tienda:</h1>
      </div>
      <div>
        < MainCarousel />
      </div>
      <div className="title text-center py-5">
        <h2>Nuestros Productos:</h2>
      </div>

      <div >
        {loading ?
         (
          <h1 class="mt-0 vh-50 row justify-content-center align-items-center">
            Cargando...🐠🐟🐡
          </h1>
        ) : (
          <ItemList products={products} id={id} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
