import { DecorList } from "../UI/DecorList/DecorList";
import Menu_Table_Item from "./Menu_Table_Item";
import { Footer__Brand } from "../UI/Restoran_Brand/Footer__Brand";

function Menu_Table_List({ products, refer, title, img, ...props }) {
  return (
    <>
      <div
        className="products-title"
        style={{ backgroundImage: `url(${img})` }}
      >
        <p>{title}</p>
      </div>
      <div className="products">
        <div className="decor__line"/>
        <div className="bar__menu">
          <div><Footer__Brand style={{width: 175, marginTop: 20}}/></div>
          <DecorList />
          <ul {...props} ref={refer} className="bar__menu-list">
            <li className="bar__menu__list-item">
              <p style={{fontSize: 33}} className="list__item-title">Назва</p>
              <div className="bar__menu__options-item">
                <p>50ml</p>
                <p>100ml</p>
              </div>
            </li>
            {products.map((item) => (
              <Menu_Table_Item key={item.id} item={item} />
            ))}
          </ul>
          <p style={{fontSize: 50}}>...</p>
        </div>
        <div className="decor__line"/>
      </div>
    </>
  );
}

export default Menu_Table_List;
