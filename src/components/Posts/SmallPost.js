import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { useNavigate } from "react-router-dom";

const SmallPost = ({ post, handleClose }) => {
  const nav = useNavigate();
  return (
    <Grid
      item
      height={100}
      minWidth={200}
      maxWidth={200}
      borderRadius={2}
      gap={1}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.coverPhoto.url})`,
        backgroundSize: "200px 100px",
        backgroundOrigin: "padding-box",
        cursor: "pointer",
        boxShadow: "0 0 5px rgba(0 0 0/.5)",
        scale: 1,
      }}
      sx={{
        ":hover": {
          scale: 1.1,
        },
      }}
    >
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
        onClick={() => {
          handleClose();
          nav(`/posts/${post.slug}`);
        }}
        style={{ backgroundColor: "rgba(0 0 0/.4)" }}
        color={"#ffffff"}
        borderRadius={2}
      >
        <Typography
          component="h3"
          variant="h3"
          fontWeight={700}
          fontSize={20}
          align="center"
        >
          {post.title}
        </Typography>{" "}
        <Typography
          component="span"
          variant="span"
          fontWeight={100}
          fontSize={15}
          align="center"
        >
          {post.company.companysname}
        </Typography>
      </Box>
    </Grid>
  );
};

export default SmallPost;
