"use strict";

//ELEMENTS
const subContainer = document.querySelector(".subContainer");
const commentInput = document.querySelector(".commentInput");
const submit = document.querySelector(".sendComment");

const userTag = document.querySelector(".userTag");
console.log(commentInput, submit);
//

let currentUsername;
let currentUserProfile;

//CODE
fetch("data.json")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    data.comments.reverse().forEach((i) => {
      console.log(i);

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
              src="${i.user.image.png}" class ="profileImg"
            />
            <p class="name">
            ${i.user.username}  <span class="dateLog">${i.createdAt}</span>
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

      i.replies.reverse().forEach(function (r) {
        //console.log(r);

        const commentReply = `<div class="replyContainer">
      <div class="scoreSection">
        <p class="plus scoreBtn">+</p>
        <p class="score">${r.score}</p>
        <p class="minus scoreBtn">-</p>
      </div>
      <div class="commentBody">
        <div class="nameSection">
          <div class="flex gap-2">
            <img
              src="${r.user.image.png}"
              class="profileImg"
            />
            <p class="name">
            ${r.user.username}<span class="dateLog">${r.createdAt}</span>
            </p>
          </div>
          <img src="images/icon-reply.svg" class="reply" />
        </div>
        <div class="content">
          ${r.content}
        </div>
      </div>
    </div>
      `;
        //rendering comment replies
        subContainer.insertAdjacentHTML("afterbegin", commentReply);
      });
      //rendering main comments
      subContainer.insertAdjacentHTML("afterbegin", html);
    });

    //rendering current user and comments from current user
    currentUsername = data.currentUser.username;
    currentUserProfile = data.currentUser.image.png;
    const time = new Date().toDateString();
    console.log(time);

    submit.addEventListener("click", function () {
      console.log("clicked");
      console.log(commentInput.value);

      const renderUserComment = `
    <div class="commentContainer">
      <div class="scoreSection">
        <p class="plus scoreBtn">+</p>
        <p class="score">${0}</p>
        <p class="minus scoreBtn">-</p>
      </div>
      <div class="commentBody">
        <div class="nameSection">
          <div class="flex gap-2">
            <img
              src="${currentUserProfile}" class ="profileImg"
            />
            <p class="name">
            ${currentUsername} <span class="userTag">You</span> <span class="dateLog">${time}</span>
            </p>
          </div>

          <img src="images/icon-reply.svg" class="reply" />
        </div>
        <div class="content">
        ${commentInput.value}
        </div>
      </div>
    </div>`;

      if (commentInput.value != "") {
        subContainer.insertAdjacentHTML("beforeend", renderUserComment);
        commentInput.value = "";
      } else {
        alert("Please type something first");
      }
    });
  });
