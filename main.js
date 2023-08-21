import "./js/custom-element";
import { ref } from "@vue/reactivity";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");
  const colors = ["5C4B99", "F15A29", "FEBE10", "0D9C52", "0D9C52"];
  const randomColor = ref();

  app.innerHTML = `
    <custom-element>
      <span>Click me!</span>
    </custom-element>
  `;

  const button = app.querySelector("custom-element");
  const count = ref(0);

  
  button.addEventListener("click", () => {
    count.value++;
    randomColor.value = colors[Math.floor(Math.random() * colors.length)];
    button.setAttribute("color", randomColor.value);
    button.innerHTML = `
      <span>Clicked ${count.value} times!</span>
    `;
  });
});
