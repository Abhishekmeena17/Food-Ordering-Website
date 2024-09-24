import { useState,createContext } from "react"


const UserProgress = createContext({
    open: "",
    selector: "",
    verify: "",
    handleDialog: () => {},
    handleClose: () => {},
    handleCheckOutModal: () => {},
    handleSignIn: () => {},
    handleLogin: () => {},
    handleLoginMsg: () => {},
    handleRegisterMsg: () => {},
    handleOrderConfirmMsg: () => {},
    handleVerify: () => {},
})


export function UserProgressContextProvider({children}) {

    const [open, setOpen] = useState(false);
    const [preview, setPreview] = useState();
    const [verify, setVerify] = useState(true);


    function handleDialog() {
      setOpen(true);
      setPreview("cartModal");
    }

    function handleSignIn() {
      setOpen(true);
      setPreview("signInModal");
      setVerify(true);
    }

    function handleLogin() {
      setOpen(true);
      setPreview("loginModal");
    }
  
    function handleClose() {
      setOpen(false);
    };

    function handleCheckOutModal() {
      setOpen(true);
      setPreview("checkOutModal");
    };

    function handleOrderConfirmMsg() {
      setOpen(true);
      setPreview("orderMsg");
    };  


    function handleLoginMsg() {
      setOpen(true);
      setPreview("loginMsg");
    };


    function handleRegisterMsg() {
      setOpen(true);
      setPreview("registerMsg");
    }
    

    function handleVerify() {
      setVerify(false);
    };



    const userProgress = {
        open,
        verify,
        selector: preview,
        handleDialog,
        handleClose,
        handleCheckOutModal,
        handleSignIn,
        handleLogin,
        handleLoginMsg,
        handleRegisterMsg,
        handleOrderConfirmMsg,
        handleVerify
    };
   
    return(
        <UserProgress.Provider value={userProgress}>{children}</UserProgress.Provider>
    );
}

export default UserProgress;