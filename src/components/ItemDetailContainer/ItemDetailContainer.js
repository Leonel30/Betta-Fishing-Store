import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../Item/ItemDetail";

import {collection,getDocs} from 'firebase/firestore'

import { db } from '../firebase/config'

const ItemDetailContainer = () => {

  const [loading,setLoading] = useState(true)

  const [products,setProducts] = useState([])

  const { id } = useParams();

  const [selectedItem, setSelectedItem] = useState(null);

  const productRef = collection(db,'items')

  getDocs(productRef)
  .then((prod)=>{
    const miProduct = (prod.docs.map((prod)=>({id:prod.id,...prod.data()})));
    setProducts(miProduct)
  })
  .finally(()=>(setLoading(false)))



  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

  return (
    <div>
      <div className="title text-center py-10 mt-0">
        {" "}
        <h1>Detalle del Producto:</h1>{" "}
      </div>
      <div className=" mt-0 vh-100 row justify-content-center align-items-center">
        {loading ? (
          <h1 className="mt-0 vh-50 row justify-content-center align-items-center">
            Cargando Producto...🐠🐟🐡
          </h1>
        ) : (
          <ItemDetail prod={selectedItem} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
