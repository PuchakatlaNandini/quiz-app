import React, { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel, Button, Box, FormControl, FormHelperText } from '@mui/material';

export default function MultipleChoice({ question, onAnswer, onPrevious, onNext, current, totalQuestions }) {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState(false);


  useEffect(() => {
    setSelected([]);
    setError(false)
  }, [question]);

  const toggle = (option) => {
    setSelected(prev => prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]);
    if (error) setError(false);
  };
  const handleSubmit = () => {
    if (selected.length === 0) {
      setError(true);
      return;
    }
    onAnswer(selected);
    setSelected([]);
    setError(false)
  }
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column">
        <FormControl component="fieldset" error={error}>
          <p>Question {current + 1} of {totalQuestions}</p>
          <p>{question.question}</p>
          {question.options.map((option, i) => (
            <FormControlLabel
              key={i}
              control={<Checkbox checked={selected.includes(option)} onChange={() => toggle(option)} />}
              label={option}
            />
          ))}
          {error && <FormHelperText>Please select  atleast one option</FormHelperText>}
          <Button sx={{ mt: '3', width: '100px' }} variant="contained" color='success' onClick={handleSubmit}>Submit</Button>
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="space-between" sx={{ position: 'absolute', bottom: '25px', left: '30px', right: '30px' }}>
        <Button variant="contained" size='medium' onClick={onPrevious} >Previous</Button>

        <Button variant="contained" size='medium' onClick={onNext}>Next</Button>

      </Box>
    </div>
  );
}
