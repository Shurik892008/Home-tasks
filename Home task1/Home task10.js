/* const minDistance = 50;
const obj = document.querySelector("#foo");

const maxX = document.documentElement.clientWidth - 60;
const maxY = document.documentElement.clientHeight - 60;

document.addEventListener("click", (e) => {
  const objCord = obj.getBoundingClientRect();
  const distance = calcDistance(e.clientX, e.clientY, objCord.x, objCord.y);
  if (distance < minDistance) {
    obj.style.left = getRandomInt(0, maxX) + "px";
    obj.style.top = getRandomInt(0, maxY) + "px";
  }
});

function calcDistance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
 */

document.addEventListener("click", (e)=>{
  let ball = document.getElementById("ball")
  if(e.pageX < window.innerWidth-100 && e.pageY < window.innerHeight-100){
    ball.style.left = e.pageX + "px"
    ball.style.top = e.pageY + "px"
  }
})