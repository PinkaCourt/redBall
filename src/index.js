const container = document.createElement("div");
container.classList.add("container");

const ball = document.createElement("div");
ball.classList.add("ball");
ball.setAttribute("draggable", true);

document.body.appendChild(ball);
document.body.appendChild(container);

//console.log(ball.getBoundingClientRect());

const {
  top: containerTop,
  left: containerLeft,
  height: containerHeight,
  width: containerWidth,
} = container.getBoundingClientRect();

const containerBottom = containerTop + containerHeight;

// dragend
// onDragOver
container.addEventListener(`dragend`, (event) => {
  event.preventDefault();
  //event.stopPropagation();
  //const activeBall = ball;
  // const currentContainer = event.target;
  // event.dataTransfer.dropEffect = "move";

  //console.log("event.target", event.target);
  // const isMoveable = activeBall !== currentContainer;
  /*
    if (!isMoveable) {
      return;
    }*/
  //event.dataTransfer.effectAllowed = "move";

  //event.target.classList.remove(`selected`);
});
//const dragSrcEl = null;
function handleDragStart(e) {
  //console.log(this.style);
  //dragSrcEl = this;
  //e.dataTransfer.effectAllowed = "move";
  //e.dataTransfer.dropEffect = "move";
  //e.dataTransfer.setData("text/html", this.innerHTML);
  //event.dataTransfer.effectAllowed = "move";
  // dataTransfer.dropEffect = "move";
  //this.style.cursor = "grab"; // this / e.target is the source node.
}

function handleDragStop(e) {
  //this.style.cursor = ""; // this / e.target is the source node.
}
/*
function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }

  return false;
}
*/
ball.addEventListener("dragstart", handleDragStart, false);

container.addEventListener("dragstop", handleDragStop, false);

container.addEventListener(`dragover`, (event) => {
  event.preventDefault();
  //event.stopPropagation();
  //const activeBall = ball;
  // const currentContainer = event.target;
  //event.dataTransfer.dropEffect = "move";
});
container.addEventListener("drop", (event) => {
  event.preventDefault();

  setInterval(() => {
    const { top, left, height, width } = ball.getBoundingClientRect();
    const bottom = top + height;
    const right = left + width;

    console.log("containerBottom", containerBottom);
    console.log("top", top);

    if (
      bottom < containerBottom
      // && top < containerTop
    ) {
      ball.style.top = top + 10 + "px";
      ball.style.left = left + 5 + "px";
    } else {
      ball.style.top = top - 10 + "px";
      ball.style.left = left + 5 + "px";
    }
  }, 1000);
});
/*
const render = () => {
  requestAnimationFrame(render);
  const { top } = ball.getBoundingClientRect();
  ball.style.top = top + 10 + "px";
};*/
