import './cat.css'
const Cat = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
                    <div>
            <h2>Cart: {cart.length}</h2>
            <div className="cart-con">
            {cart.map(bottle=> <div  key={bottle.id}>
                    <img src={bottle.img}></img>
                    <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
        </div>
    );
};

export default Cat;