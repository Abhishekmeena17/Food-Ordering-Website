import React from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Button from "./UI/Buttton.jsx";
import CartContext from "../store/CartContext.jsx";
import Cart from "./Cart.jsx";
import UserProgress from "../store/UserProgressContext.jsx";

export default function Navbar() {
  const userProgressCtx = useContext(UserProgress);
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <>
      <div className=" h-10 w-screen flex  align-middle justify-between  bg-black fixed  max-[650px]:justify-center ">
        <div className="flex flex-1 align-middle ">
          <span className=" my-2 cursor-pointer mx-7 text-yellow-600">EN</span>
          <span className="text-black flex border-2 border-yellow-600  rounded align-middle">
            <input className="h-auto outline-none sm:w-full" />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="  cursor-pointer border-transparent rounded h-6 my-2  text-yellow-600 "
            />
          </span>
        </div>
        <h1 className="navbar font-bold flex flex-1 justify-center text-3xl font-serif my-1  max-[650px]:hidden text-yellow-600">
          LAMA
        </h1>
        <div className="navbar flex flex-1 justify-end  max-[650px]:hidden">
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
    </>
  );
}
