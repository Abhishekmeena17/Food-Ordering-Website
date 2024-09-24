import { useContext } from "react";
import UserProgress from "../store/UserProgressContext.jsx";
import LoginMsg from "./Loginmsg.jsx";
import OrderConfirm from "./Orderconfirm.jsx";
import RegisterMsg from "./Registermsg.jsx";

export default function Alert() {
    const userProgressCtx = useContext(UserProgress);

    if(userProgressCtx.selector === "orderMsg") {
        return(
            <OrderConfirm/>
        );
    }

    else if(userProgressCtx.selector === "loginMsg") {
        return(
            <LoginMsg/>
        );
    }

    else if(userProgressCtx.selector === "registerMsg") {
        return(
            <RegisterMsg/>
        );
    }

};