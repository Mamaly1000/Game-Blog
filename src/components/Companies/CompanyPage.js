import React from "react";
import { useParams } from "react-router-dom";
import { GET_COMPANY_DATA } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import { Avatar, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

const CompanyPage = () => {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_COMPANY_DATA, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h4>{error.message}</h4>;
  return (
    <Container maxWidth="lg" mt={10}>
      <Grid container>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            sx={{ width: 250, height: 250, marginTop: 5 }}
            src={data.company.companyAvatar.url}
          />
          <Typography
            component="h3"
            variant="h5"
            fontWeight={700}
            textTransform="uppercase"
            mt={4}
          >
            {data.company.companysname}
          </Typography>
          <Typography
            component="p"
            variant="h6"
            color="text.secondary"
            textTransform="capitalize"
          >
            {data.company.companysField}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.company.companysdescription.html,
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={5} display="flex" flexDirection="column">
          <Typography component="h3" variant="h6">
            {data.company.companysname} Games :
          </Typography>
          <Grid container spacing={1} mt={3} >
            {data.company.posts.map((post, index) => (
              <CardEL {...post} key={index} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CompanyPage;
