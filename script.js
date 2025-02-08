const ELEMENTS = {
  yes: document.getElementById("yes"),
  no: document.getElementById("no"),
  container: document.querySelector(".container"),
  agree: document.getElementById("agree"),
};

const windowWidth = window.innerWidth;

if (windowWidth < 1220) {
  ELEMENTS.container.innerHTML =
    "<h1>MOBILE DEVICES ARE NOT SUPPORTED PLEASE USE A LAPTOP</h1>";
  ELEMENTS.container.style.backgroundColor = "black";
  ELEMENTS.container.style.textAlign = "left";

  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "black";
}

ELEMENTS.no.addEventListener("mouseover", () => {
  const maxX = window.innerHeight - ELEMENTS.container.offsetHeight;
  const maxY = window.innerWidth - ELEMENTS.container.offsetWidth;

  const x = Math.floor(Math.random() * (maxX - 200) + 200);
  const y = Math.floor(Math.random() * (maxY - 300) + 300);

  ELEMENTS.container.style.left = `${y}px`;
  ELEMENTS.container.style.top = `${x}px`;
});

ELEMENTS.yes.addEventListener("click", () => {
  ELEMENTS.container.classList.add("visually-hidden");
  ELEMENTS.container.classList.remove("container");

  ELEMENTS.agree.classList.remove("visually-hidden");
  ELEMENTS.agree.classList.add("emoji");
});
