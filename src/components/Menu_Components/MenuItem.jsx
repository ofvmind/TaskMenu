import { useDispatch } from "react-redux";
import { buyAction } from "../../store/Basket_Reducer";
import { BuyIcon } from "../UI/BuyIcon/BuyIcon";
import { useState } from "react";

const MenuItem = ({ product }) => {

  const [bought, setBought] = useState(false);

  const dispatch = useDispatch();

  const buy = item => {
    setBought(true);
    const purchase = {
      ...item,
      num: Date.now()
    };

    dispatch(buyAction(purchase));
  }

  return (
    <div className={ bought ? "product bought" : "product" }>
      <img className="product__image" src={product.image} alt="" />
        <p className="product__name">{product.title}</p>
        <p>{product.quantity}</p>
      <div className="product__buy">
        <p>{product.price} грн</p>
        <BuyIcon onClick={() => {
          buy(product);
          setTimeout(() => setBought(false), 1000);
        }} />
      </div>
    </div>
  );
};

export default MenuItem;
