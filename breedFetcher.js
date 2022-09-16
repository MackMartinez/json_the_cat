const request = require("request");

//capture user input in node
const userInput = process.argv;

//use template literals to capture user breed request and create url
const userInputQuery = `https://api.thecatapi.com/v1/breeds/search?q=${userInput[2]}`;

//request description of queried breed
const breedCatcher = function() {
  request(`${userInputQuery}`, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return console.log("Breed not found, please try another!");
    } else {
      console.log(data[0].description);
    }
  });
};

breedCatcher();

