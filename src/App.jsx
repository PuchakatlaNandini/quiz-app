
import React from 'react';
import QuizContainer from './components/Quizcontainer';
import { Box, Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
const App = () => {

  return (
    <>
<Helmet>
        <title>Quiz App - Test Your Knowledge!</title>
        <meta name="description" content="Take fun quizzes and test your knowledge on various topics." />
        <meta name="keywords" content="quiz, test, knowledge, fun, react" />
        <meta property="og:title" content="Quiz App" />
        <meta property="og:description" content="Take fun quizzes and test your knowledge!" />
        <meta property="og:type" content="website" />
      </Helmet>
    <Box>
      <Container >
        <header>
        <Typography variant="h3" align="center" gutterBottom>
          Quiz App
        </Typography>
        </header>
        <main>
        <Box

          display="flex"
          justifyContent="left"
          paddingLeft="20px"
          minHeight="525px"

          fontSize="25px"
        >
          <QuizContainer />
        </Box>
        </main>
      </Container>
    </Box>
    </>
  );
}

export default App
