"use strict";
// alert("Hello, world!");

function textMaximize() {
  let size = window.getComputedStyle(document.getElementById("textArea"))
    .fontSize;
  let size2 = parseInt(size) + 2 + "pt";
  document.getElementById("textArea").style.fontSize = size2;
}

function boldText() {
  if (document.getElementById("bling").checked == true) {
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "green";
    document.getElementById("textArea").style.textDecoration = "underline";
  } else {
    document.getElementById("textArea").style.fontWeight = "";
    document.getElementById("textArea").style.color = "";
    document.getElementById("textArea").style.textDecoration = "";
  }
}

function timer() {
  let id = setInterval(textMaximize, 500);
  setTimeout(clearInterval, 2000, id);
}
