import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS_INFO } from "./../../graphql/Queries";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

const Posts = () => {
  const { data, loading, error } = useQuery(GET_POSTS_INFO);
  if (loading) return <Loader />;
  if (error) return <h4>{error.message}</h4>;
  return (
    <Grid
      container
      spacing={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {data.posts.map((post, index) => (
        <CardEL key={index} {...post} />
      ))}
    </Grid>
  );
};

export default Posts;
