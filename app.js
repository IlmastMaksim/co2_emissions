const path = require('path');

const fs = require('fs');

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

const app = express();

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// CREATING AN API

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


const emissionsFile = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'emissions.json'
)

const populationsFile = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'populations.json'
)

const getDataFromFile = (fileName, cb) => {
  fs.readFile(fileName, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent.toString())); // converting buffer data to the json format 
    }
  });
};
  
const fetchAllData = (fileName, cb) => {
    getDataFromFile(fileName, cb);
}

const renderEmissionsApiData = (req, res) => {
  fetchAllData(emissionsFile, data => {
    res
      .status(200)
      .json({ message: 'Fetched information about emissions successfully.', data: data });
  })
};

const renderPopulationsApiData = (req, res) => {
  fetchAllData(populationsFile, data => {
    res
      .status(200)
      .json({ message: 'Fetched information about populations successfully.', data: data });
  })
};

router.get('/emissions', renderEmissionsApiData);

router.get('/populations', renderPopulationsApiData);

app.use(router)

app.listen(PORT, err =>{
  if (err) throw err

  console.log('Listening for requests on port 5000');
});