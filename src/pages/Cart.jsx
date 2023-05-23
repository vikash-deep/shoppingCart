import { CartContext } from "../Cartcontext";
import { useContext, useEffect, useState } from "react";
import productList from "../data/productData";


const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);


  useEffect(() => {
    if (!cart.items) {
      return;
    }
    setCartProducts(productList);
  }, [cart])

  const getQty = (productId) => {
    return cart.items[productId]
  }

  const increment = (productId) => {
    const oldQty = cart.items[productId];
    const _cart = { ...cart};
    _cart.items[productId] = oldQty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  }

  const decrement=(productId)=>{
    const oldQty = cart.items[productId];
    if(oldQty===1){
      return;
    }
    const _cart = { ...cart};
    _cart.items[productId] = oldQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  }

  const getSum=(productId,productPrice)=>{
   return getQty(productId)*productPrice;
  }


  return (

    cartProducts.length?   //to check whether cart has item ,else it will show empty cart image
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold">cart items</h1>

      <ul>
        {
          cartProducts.map((product) => {
            return <li key={product.id} className="mb-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-16" src="/images/peproni.png" alt="" />
                  <span className="font-bold ml-4 w-48">{product.name}</span>
                </div>
                <div>
                  <button onClick={()=>decrement(product.id)} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                  <b className="px-4">{getQty(product.id)}</b>
                  <button onClick={()=>increment(product.id)} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
                </div>
                <span>₹ {getSum(product.id,product.price)}</span>
                <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
              </div>
            </li>
          })
        }
      </ul>

      <hr className="my-6" />
      <div className="text-right"><b>Grand Total:</b> ₹ 1000</div>
      <div className="text-right mt-6">
        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none ">Order Now</button>
      </div>
    </div>
    :
    <img className="h-auto mx-auto"  src="/images/emptycart.png" alt="" />
  )
}

export default Cart