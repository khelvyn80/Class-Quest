const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const classRoute = require('./routes/classRoute');
const userRoute = require('./routes/userRoute')

const app = express();
const server = require('http').Server(app);
let classrooms = [
  { id: 1, name: 'Room A' },
  { id: 2, name: 'Room B' },
  { id: 3, name: 'Room C' },
];

//app.use(bodyParser.json());
//middleware 
app.use(express.json());

app.use(cors()); // Enable CORS

//app.get('/', (req, res) => {
//  res.json(classrooms);
//console.log(req)
//});


app.use((req, res, next) => {

  console.log(req.method)
  console.log(req.path)
  next()
})



app.use('/api/class/', classRoute);
app.use('/api/user/', userRoute);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen to express request
    server.listen(process.env.PORT, () => {
      console.log('listening for request from ' + process.env.PORT)
    })
  })
  .catch(err => {
    //console.log(err);
  })


/*app.listen(port, () => {
console.log(`Server is running on port ${port}`);
})*/
