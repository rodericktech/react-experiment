import React, { useState, Fragment } from 'react';
import GetAboutData from "../getAboutData";
import Layout from '../components/Application/Layout';
import {Container, Button, Grid} from "@material-ui/core";
import Artists from "../components/Artists";
import Albums from "../components/Albums";

const Home = () => {
  const [showArtists, setShowArtists] = useState(false);
  const [showAlbums, setShowAlbums] = useState(false);

  return (
    <Fragment>
      <Layout />
      <Container>
        <h1>Home</h1>
        <p>Hello from Michael.</p>
        <GetAboutData />
        <hr />
        <Grid container spacing={1}>
          <Grid container item xs={12} sm={6}>
            <Button color="primary" onClick={() => setShowArtists(true)}>Show Artists</Button>
            {showArtists ? <Artists /> : null}
          </Grid>
          <Grid container item xs={12} sm={6}>
            <Button color="primary" onClick={() => setShowAlbums(true)}>Show Albums</Button>
            {showAlbums ? <Albums /> : null}
          </Grid>
        </Grid>

      </Container>
    </Fragment>
  );
};

export default Home;