import "./index.css";
import logo from "../logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <div>React Counter v2</div>
    </header>
  );
};

export default Header;
