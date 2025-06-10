export default function SymptomForm({ onPredict }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const symptoms = { fever: true }; // mock data
    onPredict(symptoms);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Predict</button>
    </form>
  );
}
