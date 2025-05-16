import React from "react";
import { Typography, ListItem, List, Button, ListItemText, Box } from "@mui/material";


export default function Result({ questions, answers }) {
  let score = 0;

  const checkCorrect = (q, a) => {
    if (!q || !a) return false;

    if (q.type === 'multiple') {
      if (!Array.isArray(q.correctAnswer) || !Array.isArray(a)) return false;

      const correct = [...q.correctAnswer].sort();
      const answer = [...a].sort();
      return correct.length === answer.length && correct.every((val, i) => val === answer[i]);
    }

    return q.correctAnswer?.toString().trim().toLowerCase() === a?.toString().trim().toLowerCase();
  };


  return (
    <Box>
      <Typography variant="h5">Results</Typography>
      <List>
        {questions.map((q, i) => {
          const a = answers.find(ans => ans.id === q.id)?.answer;
          const isCorrect = checkCorrect(q, a);
          if (isCorrect) score++;
          return (
            <ListItem key={q.id}>
              <ListItemText
                primary={q.question}
                secondary={`Your answer: ${Array.isArray(a) ? a.join(', ') : a} — ${isCorrect ? 'Correct' : 'Incorrect'}`}
              />
            </ListItem>
          );
        })}
      </List>
      <Typography variant="h6">Score: {score} / {questions.length}</Typography>
      <Button variant="contained" onClick={() => window.location.reload()} sx={{ mt: 2 }}>Restart Quiz</Button>

    </Box>
  )
}