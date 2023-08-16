import React, { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS_INFO } from "./../../graphql/Queries";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

const Posts = ({ searchedText }) => {
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
      {data.posts &&
        data.posts.length > 0 &&
        searchedData.map((post, index) => <CardEL key={index} {...post} />)}
    </Grid>
  );
};

export default Posts;
