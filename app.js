const time = document.querySelector("#time"),
  greeting = document.querySelector("#greeting"),
  name = document.querySelector("#name");
const overlay = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),";

function showTime() {
  let today = new Date(),
    h = today.getHours(),
    m = today.getMinutes(),
    s = today.getSeconds();
  // Set AM or PM

  const session = h >= 12 ? "PM" : "AM";

  //   12hr format

  h = h % 12 || 12;

  //   output the time

  time.innerHTML = `
    ${h}<span>:</span>${addZero(m)}<span>:</span>${addZero(
    s
  )} <span style="font-size: 3rem;">${session}</span>
  `;

  setTimeout(showTime, 1000);
}

// Add zero

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting

function setBgGreet() {
  let today = new Date(),
    h = today.getHours();

  if (h < 12) {
    document.body.style.backgroundImage = `${overlay} url('img/morning.jpg')`;
    greeting.textContent = "Good Morning";
  } else if (h < 18) {
    document.body.style.backgroundImage = `${overlay} url('img/afternoon.jpg')`;
    greeting.textContent = "Good Afternoon";
  } else {
    document.body.style.backgroundImage = `${overlay} url('img/night.jpg')`;
    greeting.textContent = "Good Night";
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

getName();
setBgGreet();
showTime();
