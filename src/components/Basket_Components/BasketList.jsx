import BasketItem from "./BasketItem";

function BasketList({ purchase }) {
  return (
    <div className="purchase">
      {purchase.map(item => 
          <BasketItem key={item.num} item={item} />
        )}
    </div>
  );
}

export default BasketList;