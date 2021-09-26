import React from 'react'
import './CartContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function CartContainer(props) {
    const {cart} = props;

    let total = 0;
    for(const actor of cart){
        total = total + actor.minimum_charge;
    }

    // let listOfActor = "";

    // for(const actor of cart){
    //     listOfActor = listOfActor + actor.name
    // }
    return (
        <div className="cart-container">
            <h2>Summary</h2>
            <p><FontAwesomeIcon icon={faUser} /> Actor Added : {props.cart.length}</p>
            <p>Total Cost : ${total}</p>
            <br />
            <div  key={Math.random()}>
                {
                    cart.map(actor => <p>{actor.name}</p>)
                }
            </div>
           
        </div>
    )
}
