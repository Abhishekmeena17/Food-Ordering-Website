import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import UserProgress from "../../store/UserProgressContext";

export default function Modal({ children, className = " ", id }) {

  const userProgressCtx = useContext(UserProgress);
  const dialog = useRef();

  useEffect(() => {
    if (userProgressCtx.open) {
      dialog.current.showModal();
    }
    else {
      dialog.current.close();
    }
  }, [userProgressCtx.open]);

  

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} id={id}>
      {children}
    </dialog>,
    document.getElementById("modal")
    
  );
}
