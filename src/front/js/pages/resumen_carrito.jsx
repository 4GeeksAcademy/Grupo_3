import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Resumen = () => {
    const { store, actions } = useContext(Context);

    return(
        <>
        { !store.auth ? <Navigate to="/" /> :
            <ul>
                {store.carrito.map((item, index) => (
                <li key={index}>
                    <a className="dropdown-item" href="#">
                        <img width="50" src={item.product_info.url_img} alt="Img" />
                        {item.product_info.name}
                        {item.product_info.price}
                        <div>
                            <button onClick={() => aumentar(item)}>+</button>
                                {item.amount}
                            <button onClick={() => disminuir(item)}>-</button>
                        </div>
                        <button onClick={async () => {await actions.deleteCart(item.id);await actions.getCart}}>eliminar</button>
                    </a>
                </li>
                ))}
                <Link to="/select_sucursal">
                    <button> Continuar </button>
                </Link>
            </ul>
        }
        </>  
    )
}