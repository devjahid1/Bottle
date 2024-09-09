import { useEffect } from "react";
import { useState } from "react";
import Botell from "../Botell/Botell";
import './Bottle.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localStorage";
import Cat from "../Cert/Cat";


const Bottle = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])


    useEffect(()=>{
        if(bottles.length){
            const storedCart = getStoredCart();

            const savedCart = [];
            for(const id of storedCart){
                const bottle = bottles.find(bottle=>bottle.id === id)
                if(bottle){
                    if(bottle){
                        savedCart.push(bottle)
                    }
                }
            }
            setCart(savedCart)
        }
    }, [bottles])

    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from LS 
        removeFromLS(id);
    }

    return (
        <div>
            <h2>Total Bottles: {bottles.length}</h2>
           <Cat cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cat>
                <div className="bottle-container">
                {
              bottles.map(bottle => <Botell handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Botell>)
            }
                </div>
        </div>
    );
};

export default Bottle;