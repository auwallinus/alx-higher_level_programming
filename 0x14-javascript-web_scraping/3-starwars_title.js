#!/usr/bin/node

const request = require('request');
const args = process.argv;
const requestURL = 'https://swapi-api.alx-tools.com/api/films/:id' + args[2];

request.get(requestURL, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
