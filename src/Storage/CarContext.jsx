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
    let indexItemInCart = cart.findIndex(
      (itemInContext) => itemInContext.id === item.id
    );
    let isItemInCart = indexItemInCart !== -1;
    const newCart = [...cart];
    
    if (isItemInCart) {
      newCart[indexItemInCart].count += count;

      if(newCart[indexItemInCart].count > item.stock){
        let stock = item.stock
        let rest =  newCart[indexItemInCart].count  - stock //7-6
        
        
        MySwal.fire({
          title: `Stock Excedido en ${rest}`,
          text: `¿Desea usted agregar ${newCart[indexItemInCart].count  =- rest} a su carrito`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, agrega esa cantidad'
        }).then((result) => {
          if (result.isConfirmed) {
            MySwal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            setCart(newCart);
          }
          else{
            MySwal.fire({
              icon: 'error',
              title: 'No se pudo agregar al carrito',
              text: 'El stock ha sido excedido',
            })
          }
        })
        }
        
      }


     else {
      //const newCart = cart.map( item => item )
      
      /*  const newItem = item;
      newItem.count = count; */
      newCart.push({ ...item, count: count });
      setCart(newCart);

    }
  }

  //[ { title: iphone, count: 5}, {title: "hp", count: 15}]
  let totalItemsInCart = 0;
  cart.forEach((item) => (totalItemsInCart += item.count));

  function totalItemsInCartfn() {
    let totalItemsInCart = 0;
    cart.forEach((item) => (totalItemsInCart += item.count));
    return totalItemsInCart;
    console.log(totalItemsInCart)
  }

  // function removeItem(id) -> filter

  // function emptyCart() -> []

  // totalPriceInCart() -> $$

  return (
    <Provider
      value={{
        cart,
        addToCart,
        totalItemsInCart,
        totalItemsInCartfn,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { cartContext, CartContextProvider };