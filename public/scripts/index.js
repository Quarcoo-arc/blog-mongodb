const composeBtn = document.getElementById("compose");

composeBtn.addEventListener("click", (event) => {
  console.log(location.href);
  location.replace(location.href + "compose");
});
