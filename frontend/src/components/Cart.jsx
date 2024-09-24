import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../utility/formatting";
import Button from "./UI/Buttton.jsx";
import CartItem from "./CartItem.jsx";
import UserProgress from "../store/UserProgressContext.jsx";
import CheckOut from "./checkout.jsx";
import SignIn from "./SignForm.jsx";
import Login from "./Login.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgress);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  if (userProgressCtx.selector === "cartModal") {
    return (
      <Modal id="cartModal" className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onDecrease={() => cartCtx.removeItem(item.id)}
              onIncrease={() => cartCtx.addItem(item)}
            />
          ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
          <Button textOnly onClick={userProgressCtx.handleClose}>
            close
          </Button>
          {cartCtx.items.length > 0 && <Button onClick={userProgressCtx.handleCheckOutModal}>Go to Checkout</Button>}
        </p>

      </Modal>
    ) 
  }

    else if (userProgressCtx.selector === "checkOutModal") {
      return <CheckOut/>
    }


 else if (userProgressCtx.selector === "signInModal") {
    return (
     <SignIn/>
    )
  }

  else if (userProgressCtx.selector === "loginModal") {
    return (
     <Login/>
    )
  }

}
