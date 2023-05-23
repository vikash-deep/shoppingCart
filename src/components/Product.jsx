import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../Cartcontext";

const Product = (props) => {
  const [isAdding,setIsAdding]=useState(false)
  const { name, price, size } = props.pizzaProp;
  const { pizzaProp } = props;
  const { cart, setCart } = useContext(CartContext);


  const addtoCart = (event, product) => {
    
    event.preventDefault();
    let _cart = { ...cart }; //{items:{}}
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[pizzaProp.id]) {
      _cart.items[pizzaProp.id] = _cart.items[pizzaProp.id] + 1;
    } else {
      _cart.items[pizzaProp.id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);

    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);

  }

  return (
    <Link to={`/products/${pizzaProp.id}`}>
      <div >
        <img src="/images/peproni.png" alt="pizza" />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{name}</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            {size}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>₹{price}</span>
          <button disabled={isAdding} onClick={(e) => { addtoCart(e, pizzaProp) }} className={`${isAdding?'bg-green-500 py-1 px-4 rounded-full font-bold':'bg-yellow-500 py-1 px-4 rounded-full font-bold'}`}>
            ADD{isAdding?'ED':''}
          </button>
        </div>
      </div>
    </Link>


  );
};

export default Product;
