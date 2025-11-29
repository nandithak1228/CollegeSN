import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import logo from "C:/Users/Other/Desktop/SNProject/college/src/Assets/logo.jpg.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "10px 0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: 50, cursor: "pointer", marginRight: "10px" }}
          />

          <Typography
            variant="h5"
            sx={{ color: "#2125ff", fontWeight: 700, fontFamily: "Lora" }}
          >
            Bangalore PU Colleges
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: "60px", 
            justifyContent: "right",
            flexGrow: 1,
          }}
        >

          <Button component={RouterLink} to="/" sx={{ color: "#2125ff", fontWeight: 500 }}>
            Home
          </Button>

          <Button component={RouterLink} to="/about" sx={{ color: "#2125ff", fontWeight: 500 }}>
            About
          </Button>
          <Button
            sx={{ color: "#2125ff", fontWeight: 500 }}
            onClick={handleMenuOpen}
          >
            Courses ▼
          </Button>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem component={RouterLink} to="/science" onClick={handleMenuClose}>Science</MenuItem>
            <MenuItem component={RouterLink} to="/commerce" onClick={handleMenuClose}>Commerce</MenuItem>
            <MenuItem component={RouterLink} to="/arts" onClick={handleMenuClose}>Arts</MenuItem>
          </Menu>

          <Button component={RouterLink} to="/admission" sx={{ color: "#2125ff", fontWeight: 500 }}>
            Admissions
          </Button>

          <Button component={RouterLink} to="/contact" sx={{ color: "#2125ff", fontWeight: 500 }}>
            Contact
          </Button>

        </Box>
        <IconButton color="inherit" sx={{ display: { sm: "none" } }}>
          <MenuIcon sx={{ color: "#2125ff" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

