const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

// Static file handler
app.use(express.static('public'));

// Serve UI hanya di /graph
app.get('/graph', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 UI aktif di http://localhost:${PORT}/graph`);
});