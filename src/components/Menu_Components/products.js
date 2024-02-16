// Коктейлі
import mojito from "../../images/menu_imgs/mojito.jpg";
import sexOn from "../../images/menu_imgs/sexOn.webp";
import margaret from "../../images/menu_imgs/margaret.jpeg";
import aparel from "../../images/menu_imgs/aparel.jpg";
import mimoza from "../../images/menu_imgs/mimoza.jpg";
import blue from "../../images/menu_imgs/blueLagun.jpg";

//Піццв
import pizzaBBQ from "../../images/menu_imgs/BBQ.jpg";
import pizzaMARG from "../../images/menu_imgs/pizzaMARG.jpg";
import pizzaCHEEZE from "../../images/menu_imgs/pizzaCHEEZE.jpg";
import pizzaGAVAY from "../../images/menu_imgs/pizzaGAVAY.webp";

//Соки
import juiceApple from "../../images/menu_imgs/juiceApple.jpg";

//Вина
import wineBolgrad from "../../images/menu_imgs/wineBolgtad.jpg";

//Міцний алкоголь
import vodkaHortica from "../../images/menu_imgs/horticaVodka.jpeg";

export const cocktail = [
    {id: 1, title: "Мохіто", price: 110, image: mojito, type: "cocktail", quantity: "350ml"},
    {id: 2, title: "Cекс на пляжі", price: 90, image: sexOn, type: "cocktail", quantity: "350ml"},
    {id: 3, title: "Маргарита", price: 120, image: margaret, type: "cocktail", quantity: "200ml"},
    {id: 4, title: "Апероль", price: 100, image: aparel, type: "cocktail", quantity: "3500ml"},
    {id: 5, title: "Мімоза", price: 100, image: mimoza, type: "cocktail", quantity: "250ml"},
    {id: 6, title: "Блакитна Лагуна", price: 110, image: blue, type: "cocktail", quantity: "350ml"},
];

export const pizza = [
    {id: 1, title: "Піцца BBQ", price: 360, image: pizzaBBQ, type: "pizza", quantity: "40cm"},
    {id: 2, title: "Маргарита", price: 375, image: pizzaMARG, type: "pizza", quantity: "40cm"},
    {id: 3, title: "П'ять Сирів", price: 330, image: pizzaCHEEZE, type: "pizza", quantity: "40cm"},
    {id: 4, title: "Гаваї", price: 360, image: pizzaCHEEZE, type: "pizza", quantity: "40cm"},
];

export const juice = [
    {id: 1, title: "Сік яблучний", price: 85, image: juiceApple, type: "juice", quantity: "1000ml"},
];

export const strongAlco = [
    {id: 1, title: "Водка Хортиця", price: 150, image: vodkaHortica, type: "drinks", quantity: "500ml"},
    {id: 2, title: "Водка Хортиця", price: 150, image: vodkaHortica, type: "drinks", quantity: "500ml"},
    {id: 3, title: "Водка Хортиця", price: 150, image: vodkaHortica, type: "drinks", quantity: "500ml"},
    {id: 4, title: "Водка Хортиця", price: 150, image: vodkaHortica, type: "drinks", quantity: "500ml"},
];

export const wine = [
    {id: 1, title: "Червоне Bolgrad", price: 150, image: wineBolgrad, type: "wine", quantity: "750ml"},
    {id: 2, title: "Червоне Bolgrad", price: 150, image: wineBolgrad, type: "wine", quantity: "750ml"},
    {id: 3, title: "Червоне Bolgrad", price: 150, image: wineBolgrad, type: "wine", quantity: "750ml"},
    {id: 4, title: "Червоне Bolgrad", price: 150, image: wineBolgrad, type: "wine", quantity: "750ml"},
];