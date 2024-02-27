import { Simulate } from "react-dom/test-utils";
import { useDispatch } from "react-redux";
import { cancelBuyAction } from "../../store/Basket_Reducer";

function BasketItem({ item }) {

  const dispatch = useDispatch();

  function deniedPurchase(item) {
    dispatch(cancelBuyAction(item));
  }

  return (
    <li className="purchase__item">
      <div className="purchase__info">
        <p>{item.title}</p>
        <p>{item.quantity}</p>
        <p>{item.price}</p>
      </div>
      <img src={item.image} alt="image not found" />
      <h1 className="cancel__purchase" onClick={() => deniedPurchase(item)}>&times;</h1>
    </li>
  );
}

export default BasketItem;
