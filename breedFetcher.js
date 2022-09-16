const request = require("request");

const userInput = process.argv;
const urlAddress = userInput[2];

request(urlAddress, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data[0].weight);
});

