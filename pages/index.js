import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { gql, useQuery } from "@apollo/client";

const GET_GREETING = gql`
  query GetCountries {
    countries {
      
    }
  }
`;

export default function Index() {
  const { loading, error, data } = useQuery(GET_GREETING);
  
  if (loading) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }
  console.log(data);
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Frontend Challenge
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="about">
          Go to the about page
        </Button>
      </Box>
    </Container>
  );
}
