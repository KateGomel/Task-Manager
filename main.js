import "lucide-static/font/Lucide.css";
import "./style.css";
import template from "./counter.hbs";
import { compile } from "handlebars";

const root = document.getElementById("app");

let counter = 0;

const hbs = compile(template());
root.innerHTML = hbs({ counter });

const plus = document.querySelector(".plus");
const content = document.querySelector(".content");
const minus = document.querySelector(".minus");

plus.addEventListener("click", () => {
  content.textContent = counter += 1;
});

minus.addEventListener("click", () => {
  content.textContent = counter -= 1;
});
