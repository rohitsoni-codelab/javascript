// click on the color box to change the color of body to that color
const button = document.querySelectorAll(".button");
const bodyColor=document.querySelector("body")

console.log(button);
button.forEach((element) => {
  element.addEventListener("click", function (e) {
    console.log(e)
    console.log(e.target)
    if(e.target.id)
    {
        bodyColor.style.backgroundColor=e.target.id;
    }
  });
});



