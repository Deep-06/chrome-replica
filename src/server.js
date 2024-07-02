const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

const determineType = (url, contentType) => {
  if (contentType) {
    if (contentType.includes('text/html')) return 'html';
    if (contentType.includes('application/javascript')) return 'js';
    if (contentType.includes('text/css')) return 'css';
    if (contentType.includes('image')) return 'img';
    if (contentType.includes('audio') || contentType.includes('video')) return 'media';
    if (contentType.includes('application/json')) return 'fetch';
  }

  const extension = url.split('.').pop();
  switch (extension) {
    case 'js':
      return 'js';
    case 'css':
      return 'css';
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'bmp':
    case 'svg':
      return 'img';
    case 'mp3':
    case 'wav':
    case 'mp4':
    case 'webm':
      return 'media';
    default:
      return 'xhr';
  }
};
app.get('/api/fetch-network-data', async (req, res) => {
  const { url } = req.query;
  console.log(`Fetching data for URL: ${url}`);
  try {
    const startTime = new Date().getTime();
    const response = await axios.get(url);
    const endTime = new Date().getTime();

    const networkData = [
      {
        method: response.config.method.toUpperCase(),
        url: response.config.url,
        status: response.status,
        time: endTime - startTime,
        type: determineType(response.config.url, response.headers['content-type']),
        headers: response.headers,
        payload: response.config.data || 'N/A',
        response: response.data,
      },
    ];
    
      console.log('Network data:', networkData);

    res.json(networkData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching network data' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});