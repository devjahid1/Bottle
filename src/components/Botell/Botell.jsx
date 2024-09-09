import './botell.css'
const Botell = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle;
    
    return (
        <div className='botell'>
            <img src={img} alt="" />
            <h3>Bottle Name: {name}</h3>
            <p>Price:${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Botell;