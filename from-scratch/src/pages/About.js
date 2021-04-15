import React, { Fragment } from 'react';
import Layout from '../components/Application/Layout';
import { Container } from "@material-ui/core";

const about = () => {
  return (
    <Fragment>
      <Layout />
      <Container>
        <h1>About This Thing</h1>
        <hr />
        <p>I built this last night in a fit of preparation.</p>
      </Container>
    </Fragment>
  );
};

export default about;