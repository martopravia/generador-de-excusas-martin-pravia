/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let one = Math.floor(Math.random() * who.length);
  let two = Math.floor(Math.random() * action.length);
  let three = Math.floor(Math.random() * what.length);
  let four = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[one] + action[two] + what[three] + when[four];

  console.log("Hello Rigo from the console!");
};
