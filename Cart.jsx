import { useContext } from "react";
import "./Cart.css";
import DataContext from "../state/DataContext";

function Cart() {

    const { cart } = useContext(DataContext);

    return (
        <div className="cart page">
            <h1>Got everything?</h1>
            <h4>Let's Proceed to Payment <b>{cart.length}</b> items.</h4>

            <div className="parent">
                <div className="list">
                    {cart.map(prod => <div className="prod-cart">
                        <img src={prod.image} alt="" />
                        <h5>{prod.title}</h5>
                        <label>{prod.price}</label>
                        <label>{prod.quantity}</label>
                        <label>{prod.total * prod.quantity}</label>
                        <button className='btn btn-sm btn-outline-danger'>
                            <i class="fa-regular fa-trash-can"> </i>
                        </button>
                    </div>
                    )}


                </div>
                <div className='side'>
                    <h4>Total</h4>
                    <h3>$9,999.00</h3>

                    <button className='btn btn-primary'>Proceed to payment</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;