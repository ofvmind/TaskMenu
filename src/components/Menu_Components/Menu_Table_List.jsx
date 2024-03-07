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
      <div {...props} ref={refer} className="products">
        <div className="decor__line"/>
        <div className="bar__menu">
          <p className="intro__bar">Bar Menu</p>
          <DecorList />
          <ul className="bar__menu-list">
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
          <p className="ending__list">...</p>
        </div>
        <div className="decor__line"/>
      </div>
    </>
  );
}

export default Menu_Table_List;
