import MenuItem from "./MenuItem";

const MenuList = ({ products, refer, title, img, ...props }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="products-title"
      >
        <p>{title}</p>
      </div>
      <div {...props} ref={refer} className="products">
        {products.map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default MenuList;
