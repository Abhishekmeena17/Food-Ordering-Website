import Alert from "./components/Alerts.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import Navbar from "./components/NavBar.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Navbar />
        <Header />
        <Meals />
        <Footer/>
        <Alert/>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
