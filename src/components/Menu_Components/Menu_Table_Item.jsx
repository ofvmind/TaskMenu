function Menu_Table_Item({ item }) {
  return (
    <li className="bar__menu__list-item">
      <p className="list__item-title">{item.title}</p>
      <div className="bar__menu__options-item">
        <p>{item.half} грн</p>
        <p>{item.full} грн</p>
      </div>
    </li>
  );
}

export default Menu_Table_Item;
