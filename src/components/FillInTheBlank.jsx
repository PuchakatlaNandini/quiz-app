import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";



export default function FillInTheBlank({ question, onAnswer, onPrevious, onNext, totalQuestions, current }) {

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
            <div className="">
                <p>Question {current + 1} of {totalQuestions}</p>
            </div>

            <Box>

                <p>{question.question}</p>
                <TextField
                    id="outlined-required" fullWidth
                    label="Answer" value={value} onChange={e => {
                        setValue(e.target.value);
                        if (error) setError(false);
                    }}
                    error={error}
                    helperText={error ? "Please enter an answer" : ""} />
                <Button variant="contained" color="success" sx={{ mt: 3, width: '100px' }}
                    onClick={handleSubmit}>
                    Submit
                </Button>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{ position: 'absolute', bottom: '25px', left: '30px', right: '30px' }} gap={2}>
                <Button variant="contained" onClick={onPrevious} >Previous</Button>

                <Button variant="contained" onClick={onNext}>Next</Button>
            </Box>
        </div>

    )
}