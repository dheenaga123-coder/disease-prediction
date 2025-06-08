// javascript
import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

export default function Home() {
  const [symptoms, setSymptoms] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call your AI prediction function here
    const result = await fetch('/api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symptoms }),
    });
    const data = await result.json();
    setPrediction(data.disease);
  };

  return (
    <Container>
      <Typography variant="h4">Disease Predictor</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter your symptoms"
          variant="outlined"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">Predict</Button>
      </form>
      {prediction && <Typography variant="h6">Prediction: {prediction}</Typography>}
    </Container>
  );
}

