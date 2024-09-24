
import logoImg from "../assets/logo.jpg";

export default function Header() {
 
  return (
    <header id="main-header" className="text-center">
      <div id="title" className="pt-16">
        <img src={logoImg} alt="A restaurant" />
        <h1 className="text-center">ReactFood</h1>

      

      </div>
     
    </header>
  );
}
