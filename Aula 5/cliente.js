//import axios from 'axios';
const axios = require('axios'); // legacy way


// Make a request for a user with a given ID
axios.get('http://localhost:3000/test')
  .then(function (response) {
    // handle success
    console.log(response);
  })


  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });