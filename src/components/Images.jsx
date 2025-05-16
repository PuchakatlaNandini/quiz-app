
import React, { useState, useEffect } from 'react';
import { Button, Grid, Card, CardMedia, CardContent, Box, FormControl, FormHelperText } from '@mui/material';

export default function ImageQuestion({ question, onAnswer, onPrevious, onNext, current, totalQuestions }) {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setSelected([]);
    setError(false);
  }, [question]);

  const handleSubmit = () => {
    if (selected.length === 0) {
      setError(true);
      return;
    }
    onAnswer(selected);
    setSelected([]);
    setError(false);
  };

  return (
    <div>
      <Box>
        <FormControl component="fieldset" error={error}>
          <p>Question {current + 1} of {totalQuestions}</p>
          <p>{question.question}</p>
          <Grid container spacing={2}  >
            {question.options.map((opt, i) => (

              <Grid item xs={4} key={i}>
                <Card
                  onClick={() => setSelected(opt.value)}
                  sx={{ border: selected === opt.value ? '3px solid blue' : '1px solid gray', cursor: 'pointer' }}>
                  <CardContent>
                    <Box display="flex">
                      <CardMedia component="img" image={opt.image} alt={opt.value} height="100" sx={{ maxWidth: 80 }} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>{error && (
            <FormHelperText>Please select at least one option</FormHelperText>
          )}
          <Button sx={{ mt: 3, width: '100px' }} variant="contained" color='success' onClick={handleSubmit}>Submit</Button>
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="space-between" sx={{ position: 'absolute', bottom: '25px', left: '30px', right: '30px' }}>
        <Button variant="contained" size='medium' onClick={onPrevious}>Previous</Button>

        <Button variant="contained" size='medium' onClick={onNext}>Next</Button>
      </Box>

    </div>
  );
}