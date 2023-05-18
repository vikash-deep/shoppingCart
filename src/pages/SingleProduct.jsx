import { useParams, useNavigate } from "react-router-dom";
import productList from '../data/productData'


const SingleProduct = () => {
  let { _id } = useParams();

  const navigate = useNavigate();
  
  const productId = _id;
  const product = productList.find(p => p.id == productId);
  const { name, price, size } = product
  return (
    <div className="container mx-auto mt-12">
      <button onClick={() => navigate(-1)} className="mb-12 font-bold">Back</button>
      <div className="flex ">
        <img src="/images/peproni.png" alt="pizza" />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="text-md">{size}</div>
          <div className="font-bold mt-2">{`₹${price}`}</div>
          <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
        </div>
      </div>
    </div>
  )
}


export default SingleProduct;