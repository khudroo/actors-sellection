import React from 'react'
import './MainWrapper.css'
import { useState,useEffect } from 'react'
import ActorContainer from '../ActorContainer/ActorContainer';
import CartContainer from '../CartContainer/CartContainer';

export default function MainWrapper() {
    const [actors, setActors] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
      fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => setActors(data))
    }, []);


    const handleAddToCart = (actor) =>{
        const newCart = [...cart, actor];
        setCart(newCart);
    }

    // console.log(actors)
    return (
        <div className="container main-wrapper">

            <div className="actor-container-parent">
                {
                    actors.map(actor => <ActorContainer 
                    actor={actor}
                    key={actor.id}
                    handleAddToCart = {handleAddToCart}
                    
                    ></ActorContainer>)
                }
            </div>
            <div className="cart-container-parent">
                <CartContainer cart={cart}></CartContainer>
            </div>
            
        </div>
    )
}
