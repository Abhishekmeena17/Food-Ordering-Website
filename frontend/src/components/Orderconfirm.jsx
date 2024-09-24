import Modal from "./UI/Modal";
import UserProgress from "../store/UserProgressContext.jsx";
import Button from "./UI/Buttton.jsx";
import { useContext } from "react";

export default function OrderConfirm() {

    const userProgressCtx = useContext(UserProgress);

    return(
        <Modal className="cart text-center">
            <h1 className="text-black text-xl pt-3">Your order has been Placed.</h1>
            <h1 className="text-black text-xl pb-3">Thankyou!</h1>
            <Button onClick={userProgressCtx.handleClose}>
            close
          </Button>
        </Modal>
    )
}