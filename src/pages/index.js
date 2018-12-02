import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import JokeGenerator from '../components/JokeGenerator';
import Footer from '../components/Footer';

const Intro = styled.h2`
  margin: 10px 0;
  text-align: center;
`;

const IndexPage = () => (
  <Layout>
    <Intro>
      Did anyone really ask for this?
    </Intro>
    <JokeGenerator />
    <Footer />
  </Layout>
)

export default IndexPage
