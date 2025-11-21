const myElement=document.getElementById("secretText991");
myElement.style.visibility='visible';

let patch = document.querySelector(".colorPatch-z9");
let btn = document.getElementById("weirdButtonX");
let clicks = 0;

btn.onclick = function() {
  clicks++;
  patch.style.background = "lightgreen";
  btn.innerText = clicks;
};

let box = document.getElementById("box7");
let big = false;

box.onmouseenter = function() {
  box.style.borderRadius = "50%";
};

box.onmouseleave = function() {
  box.style.borderRadius = "0";
};

box.ondblclick = function() {
  if (big) {
    box.style.width = "100px";
    box.style.height = "100px";
  } else {
    box.style.width = "200px";
    box.style.height = "200px";
  }
  big = !big;
};

let decIn = document.getElementById("decoderInput");
let decOut = document.getElementById("decodedOutput");

decIn.oninput = function() {
  let v = decIn.value;
  if (v.includes("x") || v.includes("X")) {
    decOut.textContent = "Forbidden letter detected.";
  } else {
    decOut.textContent = v;
  }
};

let list = document.getElementById("mysteryList");
let li = list.getElementsByTagName("li");

list.onclick = function(e) {
  if (e.target.tagName === "LI") {
    let clicked = e.target;
    clicked.className = "highlight1";

    let t = 0;
    for (let i = 0; i < li.length; i++) {
      if (li[i] !== clicked) {
        if (t == 0) {
          li[i].className = "highlight-l";
          t = 1;
        } else {
          li[i].className = "highlightI";
          t = 0;
        }
      }
    }
  }
};
let title = document.getElementById("glitchTitle");
setTimeout(function() {
  title.textContent = "DOM Restored!";
  title.style.color = "blue";
  title.style.fontSize = "40px";
}, 3000);