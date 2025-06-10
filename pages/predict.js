// pages/api/predict.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { symptoms } = req.body;
    if (!symptoms) {
      return res.status(400).json({ error: 'Please provide symptoms' });
    }

    // Dummy prediction logic
    const prediction = 'Common Cold';
    res.status(200).json({ prediction });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
