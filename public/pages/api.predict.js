export default function handler(req, res) {
  if (req.method === 'POST') {
    const { symptoms } = req.body;
    const disease = symptoms.fever ? 'Flu' : 'Healthy'; // mock prediction
    res.status(200).json({ disease });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
