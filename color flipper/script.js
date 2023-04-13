const changeColor = (colorValue) => {
  document.body.style.backgroundColor = colorValue;
};

document.getElementById("changeColor").addEventListener("click", (event) => {
  event.preventDefault();
  const colorValue = document.getElementById("colorValue").value;
  changeColor(colorValue);
  document.getElementById("colorValue").value = "";
  document.getElementById("colorName").innerHTML = colorValue;
});
