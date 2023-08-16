import React, { useMemo } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POSTS_INFO } from "../../graphql/Queries";
import SearchModal from "../modal/SearchModal";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  transition: "background-color .13s linear ",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = ({ setSearchedText, searchedText, screen }) => {
  const nav = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const location = useLocation();
  const handleClose = () => {
    setSearchedText("");
    setOpen(false);
  };

  const { data, loading, error } = useQuery(GET_POSTS_INFO);
  const searchedData = useMemo(() => {
    return data?.posts.filter((post) => {
      return (
        post.slug.toLowerCase().includes(searchedText.toLowerCase()) ||
        (post.company.title &&
          post.company.title
            .toLowerCase()
            .includes(searchedText.toLowerCase())) ||
        post.company.companysname
          .toLowerCase()
          .includes(searchedText.toLowerCase()) ||
        post.publishedDate.includes(searchedText.toLowerCase()) ||
        post.content.text.toLowerCase().includes(searchedText.toLowerCase())
      );
    });
  }, [searchedText, data]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => {
                nav("/");
              }}
            >
              <HomeIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Game Blog
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchedText}
                onChange={(e) => {
                  if (location.pathname === "/") {
                    setSearchedText(e.target.value);
                  } else {
                    handleOpen();
                  }
                }}
                onClick={() => {
                  handleOpen();
                }}
              />
            </Search>
          </Toolbar>
        </Container>
        {open && location.pathname !== "/" && (
          <SearchModal
            searchedData={searchedData}
            handleClose={handleClose}
            open={open}
            loading={loading}
            error={error}
            setSearchedText={setSearchedText}
            searchedText={searchedText}
            screen={screen}
          />
        )}
      </AppBar>
    </Box>
  );
};

export default Header;
