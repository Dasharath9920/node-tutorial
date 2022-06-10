const firstName = "Dasharath";
const lastName = "Dyavari";

const age = 22;

module.exports = { firstName, lastName, age };

const album = {
  songs: 15,
  artist: "Weeknd",
  year: 2020,
  views: "20B",
};

module.exports.album = album;

function greet() {
  console.log("Good evening Master");
}

greet();
