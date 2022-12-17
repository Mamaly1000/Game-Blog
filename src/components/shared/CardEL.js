import { Button, Grid } from "@mui/material";
import React from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const shortdesc = (text) => {
  const Text = text.split(" ");
  return Text.slice(10, 40).join(" ");
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardEL = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <Link
          to={`/posts/${props.slug}`}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <Avatar
                  src={props.company.companyAvatar.url}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderradius: "10px",
                  }}
                  alt={props.company.title}
                />
              </Avatar>
            }
            title={props.title}
            subheader={`Company : ${props.company.companysname}`}
          />
        </Link>
        <CardMedia
          component="img"
          height="194"
          image={props.coverPhoto.url}
          alt={props.title}
        />

        <CardActions disableSpacing>
          <Typography
            component="span"
            variant="span"
            fontWeight={100}
            fontSize={14}
          >
            Release Date : {props.publishedDate}
          </Typography>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            color="primary"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph fontWeight={600}>
              {props.title}:
            </Typography>
            <Typography paragraph>
              {shortdesc(props.content.text)} ...
            </Typography>
            <Link
              to={`/posts/${props.slug}`}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Button variant="contained" color="primary">
                Read More
              </Button>
            </Link>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default CardEL;
