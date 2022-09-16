const request = require("request");

//capture user input in node
const userInput = process.argv;

//use template literals to capture user breed request and create url
const userInputQuery = `https://api.thecatapi.com/v1/breeds/search?q=${userInput[2]}`;

//request description of queried breed
request(`${userInputQuery}`, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data[0].description);
});

