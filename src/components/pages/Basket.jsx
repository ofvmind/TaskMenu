import { useSelector } from "react-redux";

function Basket() {

  const sum = useSelector(state => state.purchase.totalSum);
  const purchase = useSelector(state => state.purchase.purchase);

  return (
    <div>
      {purchase.map(item => 
         <p>s</p>
        )}
      <p style={{color: "#fff"}}>{sum}</p>
    </div>
  );
}

export default Basket;