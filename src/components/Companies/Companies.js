import { useQuery } from "@apollo/client";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { GET_COMPANIES_DATA } from "../../graphql/Queries";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

const Companies = () => {
  const { loading, data, error } = useQuery(GET_COMPANIES_DATA);

  if (loading) return <Loader />;
  if (error) return <h4>{error.message}</h4>;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {data.companies.map((company, index) => (
        <Grid item xs={12} key={index}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/companies/${company.slug}`}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                color: "black",
              }}
            >
              <Avatar src={company.companyAvatar.url} sx={{ mr: "16px" }} />
              <Typography component="p" variant="p">
                {company.companysname}
              </Typography>
            </Link>
          </Grid>
          {index !== data.companies.length - 1 && (
            <Grid item xs={12}>
              <Divider />
            </Grid>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Companies;
