function Product({ name, price }) {
  return (
    <div className="Product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Product;