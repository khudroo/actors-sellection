import React from 'react'
import './ActorContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function ActorContainer(props) {
    const {name, img, role, country, minimum_charge}= props.actor;
    return (
        <div className="actor-container">
            <img src={img} alt="profile img" />
            <h4>Name : {name}</h4>
            <p>Role : {role}</p>
            <p>Country : {country}</p>
            <h5>Minimum Charge :  ${minimum_charge}</h5>
            <br />
            <button 
            onClick={() => props.handleAddToCart(props.actor)}
            className="btn"
            ><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>

        </div>
    )
}
