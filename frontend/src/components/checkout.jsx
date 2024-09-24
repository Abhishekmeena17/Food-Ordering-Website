import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../utility/formatting";
import Input from "./UI/Input.jsx";
import Button from "./UI/Buttton.jsx";
import UserProgress from "../store/UserProgressContext.jsx";

export default function CheckOut() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgress);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleSubmit(event) {
    event.preventDefault();
    userProgressCtx.handleOrderConfirmMsg();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    console.log(customerData);

    // fetch('http://localhost:3000/orders', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     order: {
    //       items: cartCtx.items,
    //       customer: customerData,
    //     }
    //   })
    // });
  }
 

  return (
    <>
      <Modal className="cart">
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

          <Input label="Full Name" type="text" id="full-name" />
          <Input label="E-Mail Address" type="email" id="email" />
          <Input label="Street" type="text" id="street" />
          <div className="control-row">
            <Input label="Postal Code" type="text" id="postal-code" />
            <Input label="City" type="text" id="city" />
          </div>
          <p className="modal-actions">
            <Button
              type="button"
              textOnly
              onClick={userProgressCtx.handleDialog}
            >
              Close
            </Button>
            <Button>Sumit Order</Button>
          </p>
        </form>
      </Modal>
    </>
  );
}
