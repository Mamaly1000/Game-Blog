import React from "react";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import Loader from "../shared/Loader";
import { Modal, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SmallPost from "../Posts/SmallPost";

const style = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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
const SearchModal = ({
  searchedData,
  handleClose,
  open,
  error,
  loading,
  searchedText,
  setSearchedText,
  screen,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        paddingInline: 10,
      }}
    >
      <Grid
        container
        sx={style}
        height={screen ? "70%" : "80%"}
        minWidth={screen ? "70%" : "95%"}
        maxWidth={screen ? "70%" : "95%"}
        top={screen ? "50%" : "55%"}
        left={screen ? "50%" : "55%"}
        borderRadius={5}
        style={{
          outline: "none",
          border: "0 solid black",
        }}
        spacing={2}
        display="flex"
        alignItems="start"
        justifyContent="start"
        flexDirection="row"
        flexWrap="wrap"
        overflow={"auto"}
      >
        <Grid item>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Posts
          </Typography>
        </Grid>
        <Grid item>
          <Search
            sx={{
              background: "#1976d2",
              color: "#ffffff",
              ":hover": { background: "#1976d2" },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchedText}
              onChange={(e) => {
                setSearchedText(e.target.value);
              }}
            />
          </Search>
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
          sx={{ minWidth: "100%" }}
        >
          {error ? (
            <h4>{error.message}</h4>
          ) : !loading ? (
            searchedData.map((post, index) => {
              return (
                <SmallPost handleClose={handleClose} post={post} key={index} />
              );
            })
          ) : (
            <Loader />
          )}
        </Grid>
      </Grid>
    </Modal>
  );
};

export default SearchModal;
