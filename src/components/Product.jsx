const Product = (props) => {
  console.log(props)
  const{name,price,size} =props.pizzaProp;
  return (
    <div>
      <img src="/images/peproni.png" alt="pizza" />
      <div className="text-center">
        <h2 className="text-lg font-bold py-2">{name}</h2>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
          {size}
        </span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span>₹{price}</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Product;
