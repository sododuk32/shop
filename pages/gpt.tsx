import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Box = styled.div`
  background-color: lightblue;
  width: 100px;
  height: 100px;
  font-size: 1vw;

  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
    font-size: 2vw;
  }
`;

function App() {
  return (
    <Container>
      <Box>asfasfdssadfsadfdafsadfd1</Box>
      <Box>asdfsafdssafdsadfsadfadfsadf2</Box>
      <Box>asdsadfssafdsadfsdafadff3</Box>
      <span>1</span>
    </Container>
  );
}

export default App;
