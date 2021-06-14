/*
const render = () => {
  requestAnimationFrame(render);
  const { top } = ball.getBoundingClientRect();
  ball.style.top = top + 10 + "px";
};*/

const container = document.createElement("div");
container.classList.add("container");

const ball = document.createElement("div");
ball.classList.add("ball");
ball.setAttribute("draggable", true);

document.body.appendChild(ball);
document.body.appendChild(container);

const {
  top: containerTop,
  left: containerLeft,
  height: containerHeight,
  width: containerWidth,
} = container.getBoundingClientRect();

const containerBottom = containerTop + containerHeight;
const containerRight = containerLeft + containerWidth;

ball.onmousedown = function (event) {
  moveAt(event.pageX, event.pageY);

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + "px";
    ball.style.top = pageY - ball.offsetHeight / 2 + "px";
  }

  ball.ondragstart = function () {
    return false;
  };

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    ball.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    ball.hidden = false;

    if (elemBelow === container) {
    }
  }

  // (3) перемещать по экрану
  document.addEventListener("mousemove", onMouseMove);

  // (4) положить мяч, удалить более ненужные обработчики событий
  ball.onmouseup = function () {
    /*ball.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    ball.hidden = false;

    if (elemBelow === container) {
    }
*/
    let horizontally = 0;
    let vertically = 0;

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

    document.removeEventListener("mousemove", onMouseMove);
    ball.onmouseup = null;
  };
};
