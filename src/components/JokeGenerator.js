import React, { Component } from 'react'
import styled from 'styled-components'

import JokeList from './JokeLIst'

const NewJokeButtonContainer = styled.div`
  text-align: center;
`

const Button = styled.button`
  margin: 0 auto;
  font-size: 30px;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  padding: 20px 30px;
  border-radius: 30px;
  background: linear-gradient(
    40deg,
    rgba(3, 109, 205, 1) 0%,
    rgba(68, 227, 220, 1) 100%
  );
  margin-bottom: 20px;
`

const JokeContainer = styled.div`
  margin-bottom: 0;
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 500px;
  color: white;

  @media (min-height: 570px) {
    height: 400px;
  }
  @media (max-height: 569px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }
`
const Joke = styled.div`
  display: grid;
  align-content: center;
  text-align: center;
  border-radius: 30px 0 0 30px;
  padding: 0 10px;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);

  h2 {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    border-radius: 30px 30px 0 0;
    margin-bottom: 0;

    h2 {
      font-size: 30px;
    }
  }
`

const Punchline = styled.div`
  display: grid;
  align-content: center;
  text-align: center;
  background: grey;
  border-radius: 0 30px 30px 0;
  padding: 0 10px;
  background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);

  h2 {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    border-radius: 0 0 30px 30px;

    h2 {
      font-size: 30px;
    }
  }
`

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
function jokeGenerator() {
  return JokeList[getRandomInt(JokeList.length)]
}

// const returnJoke = jokeGenerator().joke;

function NewJoke() {
  // jokeGenerator();
  const returnedJoke = jokeGenerator()
  // Will not generate joke twice in a row
  document.getElementById('Joke').innerHTML = returnedJoke.joke
  document.getElementById('Punchline').innerHTML = returnedJoke.punchLine
}

export default class JokeGenerator extends Component {
  render() {
    return (
      <div>
        <NewJokeButtonContainer>
          <Button onClick={NewJoke}>Just one more.</Button>
        </NewJokeButtonContainer>
        <JokeContainer>
          <Joke>
            <h2 id="Joke" />
          </Joke>
          <Punchline>
            <h2 id="Punchline" />
          </Punchline>
        </JokeContainer>
      </div>
    )
  }
}
