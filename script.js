setTimeout(rotat, 10);
setInterval(rotat, 5000);

function rotat() {
  cube.style.transform =
    "rotateX(" +
    rndmdeg() +
    ") rotateY(" +
    rndmdeg() +
    ") rotateZ(" +
    rndmdeg() +
    ")";
}

function rndmdeg() {
  x = Math.ceil(Math.random() * 720);
  x -= 360;
  return x + "deg";
}

//cube.addEventListener("click",setImg);
function setImg() {
  cuide = document.getElementsByClassName("cuide");
  for (let i = 0; i < cuide.length; i++) {
    cuide[i].innerHTML =
      '<img src="https://miniprogram.000webhostapp.com/tenor(5).gif" alt="😇"/>';
  }
  cube.removeEventListener("click", setImg);
}
