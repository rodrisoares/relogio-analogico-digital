const hoursE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minute");
const secondsE1 = document.getElementById("second");
const dateE1 = document.getElementById("date");
const timeE1 = document.getElementById("time");
const toggle = document.getElementById("toggle2");

toggle.addEventListener("click", () => {
  const html = document.querySelector("html");
  const mode = document.querySelector(".mode");
  if (html.classList.contains("light")) {
    html.classList.remove("light");
    html.classList.add("dark");
    mode.innerHTML = "Light Mode";
    toggle.classList.toggle("active");
  } else {
    html.classList.remove("dark");
    html.classList.add("light");
    mode.innerHTML = "Dark Mode";
    toggle.classList.toggle("active");
  }
});

const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

setInterval(() => {
  const time = new Date();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hour > 12 ? "PM" : "AM";

  dateE1.innerHTML = `${days[day]}, ${date} de ${months[month]} de ${year}`;
  timeE1.innerHTML = `${hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  hoursE1.style.transform = `translate(-50%, -100%) rotateZ(${hour*30}deg)`;
  minutesE1.style.transform = `translate(-50%, -100%) rotateZ(${minutes*6}deg)`;
  secondsE1.style.transform = `translate(-50%, -100%) rotateZ(${seconds*6}deg)`;
}, 1000);
