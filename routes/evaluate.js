const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { question, answer } = req.body;
  if (!question || !answer) {
    return res.status(400).json({ error: 'Question and answer are required.' });
  }
  try {
    const geminiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [
            { text: `Evaluate the following answer for the question.\nQuestion: ${question}\nAnswer: ${answer}\nGive a score and feedback.` }
          ]
        }]
      }
    );
    const evaluation = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No evaluation returned.';
    res.json({ evaluation });
  } catch (err) {
    res.status(500).json({ error: 'Evaluation failed', details: err.message });
  }
});

module.exports = router; 