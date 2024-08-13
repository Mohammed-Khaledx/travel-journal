import "../App.css";
import logo from "../images/headerLogo.png";

function Header() {
  return (
    <div className="header">
      <img className="header-icon" src={logo} alt="" />
      <h3 className="header-text">my Travel Journal</h3>
    </div>
  );
}

export default Header;
