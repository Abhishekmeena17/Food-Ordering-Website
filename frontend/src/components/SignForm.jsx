import { useContext } from "react";
import Button from "./UI/Buttton.jsx";
import Modal from "./UI/Modal.jsx";
import UserProgress from "../store/UserProgressContext.jsx";
import Input from "./UI/Input.jsx";

export default function SignIn() {
  const userProgressCtx = useContext(UserProgress);


  function handleSubmit(event) {
    event.preventDefault();
    
    const fd = new FormData(event.target);
    // const customerData = Object.fromEntries(fd.entries());
    const pass = fd.get("password");
    const cfmPass = fd.get("confirm-password");
   

    if(pass !== cfmPass) {
      return(
         userProgressCtx.handleVerify()
      )
    }

    else{
      return(
        userProgressCtx.handleRegisterMsg()
      )
    }
    
}  

  return (
    <>
      <Modal className="cart">
        <form onSubmit={handleSubmit}> 
          <h2>REGISTER</h2>
          <Input label="First Name" type="text" id="first-name" />
          <Input label="Last Name" type="text" id="last-name" />
          <Input label="E-Mail Address" type="email" id="email" />
          <Input label="Password" type="password" id="password" />
          <Input
            label="Confirm Password"
            type="password"
            id="confirm-password"
          />
          <p className={userProgressCtx.verify  ? "hidden" :"block text-red-600"}>Confirm Password don't Match</p>
          <div className="flex gap-12 mb-4 mt-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="Male">Male</label>
              <input type="radio" name="Gender" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Female">Female</label>
              <input type="radio" name="Gender" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Other">Other</label>
              <input type="radio" name="Gender" />
            </div>
          </div>
          <p className="modal-actions">
            <Button>Register</Button>
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
