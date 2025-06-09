mport * as tf from '@tensorflow/tfjs-node';

let model = null;

// Load the model once
const loadModel = async () => {
  if (!model) {
    model = await tf.loadLayersModel('file://path/to/your/model.json'); // Update path
    console.log('Model loaded successfully.');
  }
};

function preprocessInput(symptoms) {
  /**
   * Example:
   * Suppose you have a fixed list of possible symptoms like:
   * ['fever', 'cough', 'headache', 'fatigue']
   * and your input is: ['fever', 'fatigue']
   * Then you convert it to a binary array: [1, 0, 0, 1]
   */
  const allSymptoms = ['fever', 'cough', 'headache', 'fatigue']; // must match training order
  const inputArray = allSymptoms.map(symptom => (symptoms.includes(symptom) ? 1 : 0));
  return inputArray;
}

function postProcessPrediction(prediction) {
  const predictionArray = Array.from(prediction); // Ensure it's a JS array
  const maxIndex = predictionArray.indexOf(Math.max(...predictionArray));

  const diseaseLabels = ['Flu', 'COVID-19', 'Malaria', 'Dengue']; // Replace with your own labels
  return diseaseLabels[maxIndex] || 'Unknown';
}

// Main prediction function
export const predictDisease = async (symptoms) => {
  await loadModel(); // Ensure model is loaded
