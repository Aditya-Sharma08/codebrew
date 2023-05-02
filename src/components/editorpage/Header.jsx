import React from "react";
import { AppBar, Toolbar, styled, Button } from "@mui/material";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;

const Header = () => {
  const navigator = useNavigate();

  return (
    <Container position="static">
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 120 }} />
        <Button
          onClick={() => navigator("/login")}
          color="inherit"
          style={{ position: "absolute", right: "2%" }}
        >
          LOGOUT
        </Button>
      </Toolbar>
    </Container>
  );
};

export default Header;
