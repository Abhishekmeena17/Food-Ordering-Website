import Modal from "./UI/Modal";
import UserProgress from "../store/UserProgressContext.jsx";
import Button from "./UI/Buttton.jsx";
import { useContext } from "react";

export default function RegisterMsg() {

    const userProgressCtx = useContext(UserProgress);

    return(
        <Modal className="cart text-center">
            <h1 className="text-black text-xl pt-3">You are successfully register.</h1>
            <h1 className="text-black text-xl pb-3">Thankyou!</h1>
            <Button onClick={userProgressCtx.handleClose}>
            close
          </Button>
        </Modal>
    )
}