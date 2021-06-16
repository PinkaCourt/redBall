const container = document.createElement("div");
container.classList.add("container");

const ball = document.createElement("div");
ball.classList.add("ball");
ball.setAttribute("draggable", true);

document.body.appendChild(ball);
document.body.appendChild(container);

let horizontally = 0;
let vertically = 0;

const {
  top: containerTop,
  left: containerLeft,
  height: containerHeight,
  width: containerWidth,
} = container.getBoundingClientRect();

const containerBottom = containerTop + containerHeight;
const containerRight = containerLeft + containerWidth;

const drop = (event) => {
  container.removeEventListener("drop", drop);

  ball.style.left = event.pageX + "px";
  ball.style.top = event.pageY + "px";

  setInterval(() => {
    const { top, left, height, width } = ball.getBoundingClientRect();
    const bottom = top + height;
    const right = left + width;

    if (horizontally === 0) {
      if (right >= containerRight) {
        horizontally = 1;
      }
      ball.style.left = left + 1 + "px";
    } else {
      if (left <= containerLeft) {
        horizontally = 0;
      }
      ball.style.left = left - 1 + "px";
    }

    if (vertically === 0) {
      if (bottom >= containerBottom) {
        vertically = 1;
      }
      ball.style.top = top + 1 + "px";
    } else {
      if (top <= containerTop) {
        vertically = 0;
      }
      ball.style.top = top - 1 + "px";
    }
  }, 1000 / 96);
};

ball.addEventListener(`dragstart`, (event) => {});

container.addEventListener(`dragover`, (event) => {
  event.preventDefault();
});

container.addEventListener(`drop`, drop);
