/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let who = ["¡Mi canario", "¡Mi bisabuela", "¡Mi odontologo", "¡Mi caimán"];
let action = ["vomitó en", "explotó", "robó", "se atragantó con"];
let what = ["mi proyecto final", "mis pestañas postizas", "mi jet privado"];
let when = [
  "antes de la clase!",
  "mientras dormía en el trabajo!",
  "mientras aprendía a bailar zumba!",
  "durante su segunda merienda!",
  "mientras accedía a la Dark Web!"
];

function generateExcuse() {
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}
window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
