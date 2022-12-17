import { useQuery } from "@apollo/client";
import { Avatar, IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GET_POST_DATA } from "../../graphql/Queries";
import Loader from "../shared/Loader";
import { Grid } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import CommentForm from "../Comments/Comments";
import CommentSection from "../Comments/CommentSection";

const PostPage = () => {
  const { slug } = useParams();
  const nav = useNavigate();
  const { data, loading, error } = useQuery(GET_POST_DATA, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h4>{error.message}</h4>;
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          mt={9}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            component="h1"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <IconButton
            color="primary"
            aria-label="go back"
            onClick={() => {
              nav(-1);
            }}
          >
            <ArrowCircleLeftIcon color="primary" />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={12}
          mt={9}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.title}
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 0 10px gray",
            }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.company.companyAvatar.url}
            sx={{ width: "80px", height: "80px", marginLeft: 2 }}
          />

          <div style={{ marginLeft: 10 }}>
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.company.companysname}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.company.companysField}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{ __html: data.post.content.html }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={data.post.slug} />
        </Grid>
        <Grid item xs={12}>
          <CommentSection slug={data.post.slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostPage;
