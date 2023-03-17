"use strict";
console.log("hey");

// let request = new XMLHttpRequest();

// request.open("get", "data.json", true);
// request.send();
// request.addEventListener("load", function (response) {
//   const data = JSON.parse(this.response);
//   console.log(data);
// });

fetch("data.json")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
