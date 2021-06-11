import ".style.css";

const ball = document.createElement("div");

ball.classList.add("ball");

document.body.appendChild(ball);

console.log(ball.getBoundingClientRect());
