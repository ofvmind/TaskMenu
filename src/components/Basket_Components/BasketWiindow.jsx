import { useSelector } from "react-redux";
import "./BasketWindow.css";
import BasketList from "./BasketList";

export const BasketWindow = () => {
    
    const purchase = useSelector( state => state.purchase.purchase );
    const sum = useSelector( state => state.purchase.totalSum );

    return (
        <div>
          <BasketList purchase={purchase} />
        </div>
    );
};