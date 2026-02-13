const express = require('express');
const cors = require('cors');
const axios = require('axios');
const apiKey = process.env.WEATHER_KEY;

const app = express();
app.use(cors());

app.get('/api/weather', async (req, res) => {
  try {
    // The API key is used HERE, safely on the server side
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.q}&units=metric&appid=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    console.log('here is query', req.query.q);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));