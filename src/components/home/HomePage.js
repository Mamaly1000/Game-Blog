import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Companies from "../Companies/Companies";
import Posts from "../Posts/Posts";

const HomePage = ({ searchedText }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={600}>
            Game Companies
          </Typography>
          <Companies />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={600}>
            Game Posts
          </Typography>
          <Posts searchedText={searchedText} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
