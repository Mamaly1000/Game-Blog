import { useMutation } from "@apollo/client";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SEND_COMMENT } from "../../graphql/Mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormData = {
  name: "",
  email: "",
  comment: "",
  pressed: false,
};

const CommentForm = ({ slug }) => {
  const [form, setForm] = useState(FormData);
  const [setComments, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: {
      name: form.name,
      email: form.email,
      text: form.comment,
      slug: slug,
    },
  });
  const onChangeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const sendHandler = () => {
    if (form.name && form.email && form.comment) {
      setComments();
      setForm({ ...form, pressed: true });
    } else {
      toast.warn("Please Fill All Fields !", {
        position: "top-center",
      });
    }
  };

  console.log({ data, loading, error });

  if (form.pressed && !error) {
    toast.success("Comment Sent Successfully. We Will Review Your Comment", {
      position: "top-center",
    });
    setForm({ ...form, pressed: false });
  } else if (form.pressed && error) {
    toast.error("There Is a Problem Here. Check Your Internet", {
      position: "top-center",
    });
    setForm({ ...form, pressed: false });
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,.1) 0px 4px 12px ",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          Comment Form
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          fullWidth
          label="name"
          id="fullWidth"
          variant="outlined"
          name="name"
          value={form.name}
          onChange={onChangeHandler}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          fullWidth
          label="Email"
          id="fullWidth"
          variant="outlined"
          name="email"
          value={form.email}
          onChange={onChangeHandler}
        />
      </Grid>{" "}
      <Grid item xs={12} m={2}>
        <TextField
          fullWidth
          label="Write Your Comment ..."
          id="fullWidth"
          variant="outlined"
          name="comment"
          value={form.comment}
          onChange={onChangeHandler}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <Button
          variant="contained"
          onClick={sendHandler}
          transition="width .13s linear"
        >
          {!loading ? (
            "Send"
          ) : (
            <>
              {" "}
              <CircularProgress
                color="inherit"
                style={{ width: "20px", height: "20px", marginRight: 10 }}
              />{" "}
              Sending
            </>
          )}
        </Button>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
