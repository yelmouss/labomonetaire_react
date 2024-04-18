import * as React from "react";
import { useTheme } from "@mui/material/styles"; // Importer useTheme
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./images/logo-labo.jpeg";
import { Link, NavLink } from "react-router-dom";

const pages = ["Présentation", "Services", "Contact"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme(); // Récupérer le thème MUI

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const [activeSection, setActiveSection] = React.useState('');
  const [isFullscreen] = React.useState(false);
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      document.title = `Labo monétaire - ${sectionId}`;
    }
  };



  React.useEffect(() => {
   

    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = ["Présentation", "Services", "Contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {

      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);
  return (
    <AppBar position="sticky" className="bg-blue-500">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Logo}
            alt="Logo"
            style={{
              marginRight: "8px",
              maxHeight: "50px",
              maxWidth: "160px",
              display: "none",
              [theme.breakpoints.up("md")]: { display: "block" },
            }}
            className="rounded"
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                   <NavLink to={`#${page}`} onClick={() => handleScroll(page)} > {page} </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img
            src={Logo}
            alt="Logo"
            style={{
              marginRight: "8px",
              maxHeight: "50px",
              maxWidth: "160px",
              display: "flex",
              [theme.breakpoints.down("md")]: { display: "none" },
            }}
            className="rounded"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                
              >
                <NavLink to={`#${page}`} onClick={() => handleScroll(page)} > {page} </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
