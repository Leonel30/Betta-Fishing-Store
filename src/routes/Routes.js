import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from '../components/AboutUs/AboutUs';
import Cart from '../components/Cart/Cart';
import { Checkout } from '../components/Checkout/Checkout';
import Footer from '../components/Footer/Footer';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import NavBar from '../components/NavBar/NavBar';
import NotFound from "../components/NotFound/NotFound";


const Rout = ()=>{
    return (
        
       <BrowserRouter>
       <NavBar/>
       
        <Routes>
            <Route  path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element ={<Checkout/>}/>
            <Route path="/sobreNosotros" element = {<AboutUs />}/>  
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
        </BrowserRouter>   
    )
} 

export default Rout