import Basket from "../pages/Basket";
import Menu from "../pages/Menu";

export const routes = [
    {path: "/", element: Menu},
    {path: "/basket", element: Basket},
    {path: "*", element: Menu}
]