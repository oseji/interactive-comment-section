"use strict";
console.log("hey");
const subContainer = document.querySelector(".subContainer");
console.log(subContainer);
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
    console.log(`comments`, data.comments);
    //console.log(`currentUser`, data.currentUser);
    data.comments.forEach((i) => {
      console.log(i);
      // const id = i.id;
      // const content = i.content;
      // const createdAt = i.createdAt;
      // const score = i.score;
      // const userImg = i.user.image;
      // const userName = i.user.username;
      // console.log(id);
      // console.log(content);
      // console.log(createdAt);
      // console.log(score);
      // console.log(userImg);
      // console.log(userName);

      const html = `<div class="commentContainer">
      <div class="scoreSection">
        <p class="plus scoreBtn">+</p>
        <p class="score">${i.score}</p>
        <p class="minus scoreBtn">-</p>
      </div>
      <div class="commentBody">
        <div class="nameSection">
          <div class="flex gap-2">
            <img
              src="${i.user.image.png}"
            />
            <p class="name">
            ${i.user.username} <span class="dateLog">${i.createdAt}</span>
            </p>
          </div>

          <img src="images/icon-reply.svg" class="reply" />
        </div>
        <div class="content">
        ${i.content}
        </div>
      </div>
    </div>
      `;
      subContainer.insertAdjacentHTML("afterbegin", html);
    });
  });
