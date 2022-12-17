import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_POST_COMMENTS } from "../../graphql/Queries";
import Loader from "../shared/Loader";
import CommentContainer from "./CommentContainer";

const CommentSection = () => {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h4>{error.message}</h4>;
  return (
    <Grid container>
      <Grid item xs={12}>
        {data.post.comments.map((comment, index) => (
          <CommentContainer key={index} comment={comment} />
        ))}
      </Grid>
    </Grid>
  );
};

export default CommentSection;
