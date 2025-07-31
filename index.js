const express = require('express');
const app = express();
const PORT = 3000;

// Een eenvoudige route
app.get('/', (req, res) => {
  res.send('Hello, Node.js wereld!');
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});

