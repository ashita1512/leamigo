import React from "react";

import { AppBar, Toolbar } from "@material-ui/core";
import logo from './logo.png';
import "./header.css";

const Header = () => {
  return (
    <AppBar>
      <Toolbar className="toolbar">
        <img src = {logo} alt = "Logo" className="logo" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;