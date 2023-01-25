import logo from "./GitHub_Logo.png";
import "./Header.scss";

function Header({ props }) {
  return (
    <header className="header">
      <img
        className="header-logo"
        src={logo}
        alt="logo"
      />
    </header>
  );
}
export default Header;
