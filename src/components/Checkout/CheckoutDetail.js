import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContex'


export const CheckoutDetail = ({buyer, setValid, handleOrder}) => {

    const {items, TotalPrice} = useContext(CartContext)  // yo lo tengo como items.

    return (
        <div>
                    <div>
                        <h4>Datos del comprador</h4>
                        <ul>
                            <li key="name">Nombre: {buyer.name}</li>
                            <li key="tel">Teléfono: {buyer.tel}</li>
                            <li key="email">Email: {buyer.email}</li>
                        </ul>
                        <hr/>
                        <h4>Detalle de compra</h4>
                        <ul>
                            {items.map((item) => <li key={item.item.id}>{item.item.name} x {item.quantity}</li>)}
                        </ul>
                        <hr/>
                        <p>Total a pagar: <span>${TotalPrice()}</span></p>
                    </div>
                    
                    <div>
                        <button onClick={()=> setValid(false)}>Modificar datos</button>
                        <button onClick={handleOrder}>Confirmar compra</button>
                    </div>
                </div>
    )
}
