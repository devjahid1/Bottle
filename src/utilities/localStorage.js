const getStoredCart = () =>{
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        return JSON.parse(storedCart);
    }
    return []
}

const saveToLS =cart=>{
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify)
}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    saveToLS(cart)
}


const removeFromLS = id => {
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveToLS(remaining);
}

export {addToLS, getStoredCart, removeFromLS}