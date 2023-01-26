import logoLight from "./lightThemeLogo.png";
import logoDark from "./darkThemeLogo.png";
import "./Header.scss";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function Header({ handleTheme }) {
  console.log(handleTheme);
  const [isDarkMode, setIsDarkMode] = handleTheme;
  return (
    <header className="header">
      <img
        className="header-logo"
        src={isDarkMode ? logoDark : logoLight}
        alt="logo"
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
export default Header;
