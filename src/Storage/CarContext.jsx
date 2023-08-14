import { createContext, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
//1. inicializamos nuestro Context
const cartContext = createContext({ cart: [] });

//2. Extraemos el componente Provider
const Provider = cartContext.Provider;
const MySwal = withReactContent(Swal)
//4. creamos nuesro propio Provider
function CartContextProvider(props) {
  //3. Creamos un estado
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    const newCart = [...cart]
    let itemValidator = newCart.findIndex((index)=> index.id === item.id)
    if(itemValidator != -1){
      if((newCart[itemValidator].stock - count) < 0){
        MySwal.fire({
          icon: 'error',
          title: 'El stock ha sido excedido',
          text: 'Por favor, tenga en cuenta el stock permitido.'
        })
        return
      }
      newCart[itemValidator].stock =- count
      console.log(newCart)
      return
    }
    newCart.push(item)
    setCart(newCart)
    console.log(cart)
   

  }

  //[ { title: iphone, count: 5}, {title: "hp", count: 15}]

  function totalItemsInCartfn() {
    let totalItemsInCart = 0;
    cart.forEach((item) => (totalItemsInCart += item.count));
    return totalItemsInCart;
  }

  // function removeItem(id) -> filter

  // function emptyCart() -> []

  // totalPriceInCart() -> $$

  return (
    <Provider
      value={{
        cart,
        addToCart,
        totalItemsInCartfn,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { cartContext, CartContextProvider };