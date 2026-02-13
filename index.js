const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/weather', async (req, res) => {
  try {
    // The API key is used HERE, safely on the server side
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
            ...req.query,
            appid: process.env.WEATHER_KEY
        }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));