
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgress from "../store/UserProgressContext.jsx";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Button from "./UI/Buttton.jsx";
import Cart from "./Cart.jsx";

export default function Footer() {

    const userProgressCtx = useContext(UserProgress);
    const cartCtx = useContext(CartContext);
  
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
      return totalNumberOfItems + item.quantity;
    }, 0);

  return (
    <div className="main-footer-container hidden max-[650px]:contents">
      <div className="flex justify-evenly bg-black w-screen fixed bottom-0">
        <div className="text-xs mx-3 mt-4 cursor-pointer h-auto text-yellow-600">
        <button onClick={userProgressCtx.handleLogin}>LOGIN</button>
        </div>
        <div className="text-xs mx-3  mt-4 whitespace-nowrap cursor-pointer h-auto text-yellow-600">
          <button onClick={userProgressCtx.handleSignIn}>REGISTER</button>
        </div>
        <span className="m-2 text-xs cursor-pointer">
          <nav>
            <Cart />
            <Button
              onClick={userProgressCtx.handleDialog}
              textOnly
              className="text-nowrap"
            >
              <Badge
                badgeContent={totalCartItems}
                color="primary"
                className="text-white m-1 mx-2 mr-7 text-xs "
              >
                <ShoppingCartOutlined className="text-yellow-600 mr-2 " />
              </Badge>
            </Button>
          </nav>
        </span>
      </div>
    </div>
  );
}
