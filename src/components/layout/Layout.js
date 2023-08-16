import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";

const Layout = ({ children, searchedText, setSearchedText, screen }) => {
  return (
    <>
      <Header
        screen={screen}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
      />
      <Box paddingTop={10}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
