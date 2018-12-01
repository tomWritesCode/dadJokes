import React from 'react';
import JokeGenerator from '../components/JokeGenerator';
import styled from 'styled-components';

import Layout from '../components/layout';

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
  </Layout>
)

export default IndexPage
