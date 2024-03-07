import { createRef, useContext, useEffect, useRef } from "react";
import MenuList from "../Menu_Components/MenuList";
import {
  cocktail,
  pizza,
  juice,
  strongAlco,
  wine,
  bar_menu
} from "../Menu_Components/products";

//Изображение заголовка товаров
import Pizza from "../../images/titles/pizza.jpg";
import Cocktails from "../../images/titles/cocktails.jpg";
import Strong from "../../images/titles/strong.jpg";
import Juice from "../../images/titles/juice.jpg";
import Wine from "../../images/titles/wine.jpg";
import BarMenu from "../../images/titles/BarMenu.jpg";
import Menu_Table_List from "../Menu_Components/Menu_Table_List";
import { Context } from "../../Context/Context";

function Menu() {

  const { isBarHidden, setIsBarHidden } = useContext(Context);

  const drinksRef = useRef();
  const pizzaRef = useRef();
  const juiceRef = useRef();
  const strongAlcoRef = useRef();
  const wineRef = useRef();
  const barMenuRef = useRef();

  function focusOn(ref) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <div className="menu" onClick={() => setIsBarHidden(true)}>
      <p className="intro__title">Меню заклада</p>
      <div
        onClick={focusOn.bind(null, pizzaRef)}
        style={{ backgroundImage: `url(${pizza[0].image})` }}
        className="present"
      >
        <p>Піцца</p>
      </div>
      <div
        onClick={focusOn.bind(null, juiceRef)}
        style={{ backgroundImage: `url(${juice[0].image})` }}
        className="present"
      >
        <p>Соки</p>
      </div>
      <div
        onClick={focusOn.bind(null, drinksRef)}
        style={{ backgroundImage: `url(${cocktail[5].image})` }}
        className="present"
      >
        <p>Коктейлі</p>
      </div>
      <div
        onClick={focusOn.bind(null, strongAlcoRef)}
        style={{ backgroundImage: `url(${strongAlco[0].image})` }}
        className="present"
      >
        <p>Міцні напої</p>
      </div>
      <div
        onClick={focusOn.bind(null, wineRef)}
        style={{ backgroundImage: `url(${wine[0].image})` }}
        className="present"
      >
        <p>Вина</p>
      </div>
      <div
        onClick={focusOn.bind(null, barMenuRef)}
        style={{ backgroundImage: `url(${BarMenu})` }}
        className="present"
      >
        <p>Bar Меню</p>
      </div>
      <MenuList tabIndex={4} refer={pizzaRef} products={pizza} title="Піцца" img={Pizza} />
      <MenuList tabIndex={6} refer={juiceRef} products={juice} title="Соки" img={Juice}/>
      <MenuList tabIndex={5} refer={drinksRef} products={cocktail} title="Коктейлі" img={Cocktails}/>
      <MenuList tabIndex={7} refer={strongAlcoRef} products={strongAlco} title="Міцний Алкоголь" img={Strong}/>
      <MenuList tabIndex={8} refer={wineRef} products={wine} title="Вина" img={Wine}/>
      <Menu_Table_List tabIndex={9} refer={barMenuRef} products={bar_menu} title={"Bar Меню"} img={BarMenu} />
    </div>
  );
}

export default Menu;
