const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Statische bestanden serveren uit 'www' folder
app.use(express.static('www'));

app.listen(PORT, () => {
  console.log(`Server draait op poort ${PORT}`);
});
