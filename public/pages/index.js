const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('AI Based Disease Prediction System API');
});

// Sample POST API to receive symptoms and respond with a dummy prediction
app.post('/predict', (req, res) => {
  const symptoms = req.body.symptoms;
  
  if (!symptoms) {
    return res.status(400).json({ error: 'Please provide symptoms' });
  }

  // Dummy logic: (replace with your ML model prediction)
  let prediction = 'Common Cold';

  // Just a simple example based on input symptoms
  if (symptoms.includes('fever') && symptoms.includes('cough')) {
    prediction = 'Flu';
  }

  res.json({ prediction });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});