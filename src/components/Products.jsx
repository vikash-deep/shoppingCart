import Product from "./Product";
import productList from '../data/productData'


const Products = () => {
  // let {myname}=useContext(CartContext);

  return (
    <div className="container mx-auto">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {productList.map((product) => {
          return <Product  key={product.id} pizzaProp={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;