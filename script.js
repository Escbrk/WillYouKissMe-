const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const container = document.querySelector(".movable-container");
const input = document.querySelector("#input");
const agree = document.querySelector("#agree");

no.addEventListener("mouseover", () => {
  const maxX = window.innerHeight - container.offsetHeight;
  const maxY = window.innerWidth - container.offsetWidth;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * (maxY - 300) + 300);

  container.style.left = `${y}px`;
  container.style.top = `${x}px`;
});

yes.addEventListener("click", () => {
  container.classList.add("visually-hidden");
  container.classList.remove("movable-container");

  agree.classList.remove("visually-hidden");
  agree.classList.add("emoji");
});

// Enjopy :)