import { Radio, Button, RadioGroup, FormControlLabel, Box, FormControl, FormHelperText } from "@mui/material";
import React, { useState } from "react";

export default function SingleChoice({ question, onAnswer, onPrevious, onNext, current, totalQuestions }) {

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (value.trim() === '') {
      setError(true);
      return;
    }
    onAnswer(value);
    setValue('');
    setError(false)
  }
  return (
    <div>
      <Box>
        <p>Question {current + 1} of {totalQuestions}</p>
        <p>{question.question}</p>
        <FormControl component="fieldset" error={error}>
          <RadioGroup value={value} onChange={e => {
            setValue(e.target.value)
            if (error) setError(false);
          }}>
            {question.options.map((option, i) => (
              <FormControlLabel key={i} value={option} control={<Radio />} label={option} />
            ))}

          </RadioGroup>
          {error && <FormHelperText>Please select an option</FormHelperText>}
          <Button sx={{ mt: '3', width: '100px' }} variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
        </FormControl>
      </Box>
      <Box mt={2} display="flex" justifyContent="space-between" sx={{ position: 'absolute', bottom: '25px', left: '30px', right: '30px' }}>
        <Button variant="contained" size="medium" onClick={onPrevious}>Previous</Button>

        <Button variant="contained" size="medium" onClick={onNext}>Next</Button>

      </Box>
    </div>

  )
}