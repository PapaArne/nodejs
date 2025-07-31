const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Statische bestanden serveren uit 'public' folder
app.use(express.static('www'));

// Optioneel: root route die een bericht geeft
app.get('/', (req, res) => {
  res.send('Hello wereld!');
});

app.listen(PORT, () => {
  console.log(`Server draait op poort ${PORT}`);
});

