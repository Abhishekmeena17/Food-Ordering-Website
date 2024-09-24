import { useContext } from "react";
import Button from "./UI/Buttton.jsx";
import Modal from "./UI/Modal.jsx";
import UserProgress from "../store/UserProgressContext.jsx";
import Input from "./UI/Input.jsx";

export default function Login() {
  const userProgressCtx = useContext(UserProgress);


  function handleSubmit(event) {
    event.preventDefault();
    userProgressCtx.handleLoginMsg();

   
}  


  return (
    <>
      <Modal className="cart" >
        <form onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          {/* <p>Total Amount: {currencyFormatter.format(cartTotal)}</p> */}

          <Input label="Username" type="text" id="username" />
          <Input label="Password" type="password" id="password" />
          <p className="modal-actions">
            <Button>Login</Button>
            <Button
              type="button"
              textOnly
              onClick={userProgressCtx.handleClose}
            >
              Close
            </Button>
          </p>
        </form>
      </Modal>
    </>
  );
}