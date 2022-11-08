const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  let description;
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, description);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed not found, please try another!");
      callback(error, description);
    } else {
      console.log(data[0].description);
    }
  });
};


module.exports = { fetchBreedDescription };
