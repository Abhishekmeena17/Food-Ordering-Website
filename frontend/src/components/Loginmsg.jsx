import { useContext } from "react";
import UserProgress from "../store/UserProgressContext.jsx";
import Button from "./UI/Buttton.jsx";
import Modal from "./UI/Modal.jsx";

export default function LoginMsg() {
    const userProgressCtx = useContext(UserProgress);

    return(
        <Modal className="cart text-center">
            <h1 className="text-black text-xl pt-3">You are Successfully login.</h1>
            <h1 className="text-black text-xl pb-3">Thankyou!</h1>
            <Button onClick={userProgressCtx.handleClose}>
            close
          </Button>
        </Modal>
    )
}