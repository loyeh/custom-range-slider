const slider = document.querySelector(".slider");
const output = document.querySelector(".output");

console.log(slider, output);

slider.addEventListener("input", () => {
  console.log(slider.value);
  output.textContent = slider.value;
  output.style.left = `${slider.value - 10}%`;
});
