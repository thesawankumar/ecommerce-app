import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { CiShop } from "react-icons/ci";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import UserOptions from "./UserOptions";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              
              <Link className="logo" to="/">
                <CiShop size={25} className="logo2" />
                eccommerce
              </Link>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Link to="/">
                  <MenuItem sx={{ py: "5px", px: "20px" }}>
                    <Typography variant="body2" color="text.primary">
                      Home
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/products">
                  <MenuItem sx={{ py: "6px", px: "20px" }}>
                    <Typography variant="body2" color="text.primary">
                      Products
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/about">
                  <MenuItem sx={{ py: "6px", px: "20px" }}>
                    <Typography variant="body2" color="text.primary">
                      About
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/contact">
                  <MenuItem sx={{ py: "6px", px: "20px" }}>
                    <Typography variant="body2" color="text.primary">
                      Contact
                    </Typography>
                  </MenuItem>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Link to="/search">
                <SearchIcon />
              </Link>
              <Link to="/cart">
                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
                </IconButton>
              </Link>
              {user && isAuthenticated ? (
                <UserOptions user={user} />
              ) : (
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  component="a"
                  href="/login"
                >
                  Sign in
                </Button>
              )}
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <Link to="/">
                    <MenuItem>Home</MenuItem>
                  </Link>
                  <Link to="/products">
                    <MenuItem>Products</MenuItem>
                  </Link>
                  <Link to="/about">
                    <MenuItem>About</MenuItem>
                  </Link>
                  <Link to="/contact">
                    <MenuItem>Contact</MenuItem>
                  </Link>

                  <Divider />

                  <MenuItem>
                    {user && isAuthenticated ? (
                      <UserOptions user={user} />
                    ) : (
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        component="a"
                        href="/login"
                      >
                        Sign in
                      </Button>
                    )}
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
