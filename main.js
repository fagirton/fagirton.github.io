// import data from './text.json' assert { type: 'json' };
// left unused for for compatibility

import { data } from "./text.js";
console.log(data);
function windowCreate(number, id, marginLR) {
  const windowTemplate = document.createElement("section");
  windowTemplate.setAttribute("class", "field-row");
  windowTemplate.setAttribute("id", "buildedWindow");
  windowTemplate.innerHTML = template;
  if (marginLR == "right") {
    windowTemplate.setAttribute("style", "margin-right: 20%;"); // differ some settings for window
  } else if (marginLR == "left") {
    windowTemplate.setAttribute("style", "margin-left: 20%;");
  }
  document.getElementById("main").appendChild(windowTemplate); //insert Window
  document
    .getElementsByClassName("innerTextBlock")
    [number].setAttribute("id", id); // add attribute "ID" for text block in body
}

const template = `
            <div class="window" style="width: 400px">
                <div class="title-bar">
                    <div class="title-bar-text">About</div>
                    <div class="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                </div>
            </div>
                <div class="window-body">
                    <div class="innerTextBlock">

                    </div>
                </div>
            </div>
        `;

let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector("#button");
let firstTime = true;

button.addEventListener("click", function () {
  for (let radio of radios) {
    if (radio.checked) {
      if (firstTime) {
        firstTime = false;
        windowCreate(0, "aboutPage", "right");
        windowCreate(1, "secondPage", "left");
        windowCreate(2, "thirdPage", "right");
      }

      var aboutPage = document.querySelector("#aboutPage"); //get that window by its ID

      var secondPage = document.querySelector("#secondPage"); //get that window by its ID

      var thirdPage = document.querySelector("#thirdPage"); //get that window by its ID

      switch (
        radio.value //actual text inserting
      ) {
        case "rus":
          aboutPage.innerHTML = data.russian.about;
          secondPage.innerHTML = data.russian.second;
          thirdPage.innerHTML = data.russian.third;
          break;
        case "eng":
          aboutPage.innerHTML = data.english.about;
          secondPage.innerHTML = data.english.second;
          thirdPage.innerHTML = data.english.third;
          break;
      }
    }
  }
});
