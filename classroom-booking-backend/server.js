const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
const port = 4000;

let classrooms = [
  { id: 1, name: 'Room A' },
  { id: 2, name: 'Room B' },
  { id: 3, name: 'Room C' },
];

app.use(bodyParser.json());
app.use(cors()); // Enable CORS

app.get('/', (req, res) => {
  res.json(classrooms);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
