const cors = require('cors')
const express = require('express');

const { storeValue, getValue } = require('./controller.js');

const app = express();
const port = 4000;
const filePath = 'data.json';

app.use(express.json());
app.use(cors())

app.post('/', (req, res) => {
  console.log(req.body)
  const { value } = req.body;
  storeValue(filePath, { value });
  res.json({ message: 'Value stored successfully' });
});

app.get('/', (req, res) => {
  const storedValue = getValue(filePath);
  if (storedValue) {
    res.json({ value: storedValue.value });
  } else {
    res.status(404).json({ message: 'Value not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
