import { Avatar, Box, Grid, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";

const firstLetter = (name) => {
  const letter = name.split("");
  return letter.slice(0, 1).join();
};

const CommentContainer = ({ comment }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        boxShadow: "rgba(0,0,0,.1) 0px 4px 12px ",
        borderRadius: 4,
        p: 5,
        mt: 5,
      }}
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="column"
    >
      <Box component="div" display="flex" alignItems="center" columnGap={1}>
        <Avatar sx={{ bgcolor: deepOrange }}>
          {firstLetter(comment.name).toUpperCase()}
        </Avatar>
        <Typography
          component="h5"
          variant="h5"
          fontWeight={700}
          textTransform="capitalize"
        >
          {comment.name}
        </Typography>
      </Box>
      <Typography component="h6" variant="span" color="text.secondary" mt={1}>
        {comment.email}
      </Typography>
      <Typography component="p" variant="p" mt={3}>
        {comment.text}
      </Typography>
    </Grid>
  );
};

export default CommentContainer;
