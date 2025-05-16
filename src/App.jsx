
import React from 'react';
import QuizContainer from './components/Quizcontainer';
import { Box, Container, Typography } from '@mui/material';

const App = () => {

  return (

    <Box>
      <Container >
        <Typography variant="h3" align="center" gutterBottom>
          Quiz App
        </Typography>
        <Box

          display="flex"
          justifyContent="left"
          paddingLeft="20px"
          minHeight="525px"

          fontSize="25px"
        >
          <QuizContainer />
        </Box>
      </Container>
    </Box>
  );
}

export default App
