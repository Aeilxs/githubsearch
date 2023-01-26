import PropTypes from "prop-types";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";
import logoDark from "./darkThemeLogo.png";
import logoLight from "./lightThemeLogo.png";
import "./Header.scss";

function Header({ handleTheme }) {
  const [isDarkMode, setIsDarkMode] = handleTheme;
  return (
    <header className="header">
      <img
        className="header-logo"
        src={isDarkMode ? logoDark : logoLight}
        alt="logo github"
      />
      <div className="header-themeToggler">
        Thème:
        <IconButton
          sx={{ ml: 1 }}
          color="inherit"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
    </header>
  );
}

Header.propTypes = {
  handleTheme: PropTypes.array.isRequired,
};

export default Header;
