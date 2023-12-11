import React from "react";
import styles from "./Header.module.css";
import { useTheme } from "../layout/ThemeContext";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import { Button, Tooltip } from "@mui/material";

const Header = (props) => {
  const { theme, toggleTheme } = useTheme();
  const headerClass = `${styles.header} ${theme === "light" ? styles.light : styles.dark}`;

  return (
    <React.Fragment>
      <header className={headerClass}>
      <h1 style={{ color: theme === "light" ? "white" : "#03DAC5" , marginLeft:"25px" }}>Jobs.com</h1>
      <Tooltip title={`Toggle ${theme === "light" ? "dark" : "light"} mode`} placement="bottom" arrow>
        <Button
          onClick={toggleTheme}
          sx={{
            marginRight: '15px',
            borderRadius: '25%', 
            minWidth: '48px', 
            width: '48px', 
            height: '48px',
            padding: '0',
            color: theme === "light" ? "black" : "black",
            backgroundColor: theme === "light" ? "#808B96" : "#03DAC5",
            '&:hover': {
              backgroundColor: theme === "light" ? "#273746" : "#808B96",
            },
            transform: "translateY(-1px)",
          }}
          variant="contained"
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        </Tooltip>
      </header>
    </React.Fragment>
  );
};

export default Header;
