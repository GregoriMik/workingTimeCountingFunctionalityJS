let nowTime = new Date().getTime();
let time = 0; //
let active = false; // flaga statująca
let idI; // identyfikator funkcji setInter

const btnStart = document.querySelector(".main");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");
// Zmienne dla poszczególnych wartości czasu i przypisanie dla poszczególnych elementów
const spanMS = document.querySelector("span.ms");
const spanS = document.querySelector("span.s");
const spanM = document.querySelector("span.m");
const spanH = document.querySelector("span.h");
const spanD = document.querySelector("span.d");
// Zmienne dla poszczególnych wartości czasu i przypisanie dla poszczególnych elementów

//Mechanizm aktualizowania czasu
const start = () => {
  if (!active) {
    active === true;
    // btnStart.textContent = "Pauza";
    // currentTime = 0;
    idI = setInterval(() => {
      let milisecound = Math.floor(
        (((new Date().getTime() - nowTime) / 1000) % 1) * 10
      );
      // console.log(milisecound)
      let secound =
        Math.floor(Math.floor((new Date().getTime() - nowTime) / 1000)) % 60;
      // console.log(secound);
      let minute =
        Math.floor(Math.floor((new Date().getTime() - nowTime) / 1000) / 60) %
        60;
      // console.log(minute);
      let hour =
        Math.floor(
          Math.floor((new Date().getTime() - nowTime) / 1000) / 60 / 60
        ) % 24;
      // console.log(hour);
      let days = Math.floor(
        Math.floor((new Date().getTime() - nowTime) / 1000) / 60 / 60 / 24
      );
      // console.log(days);

      spanMS.textContent = milisecound;
      spanS.textContent = secound;
      spanM.textContent = minute;
      spanH.textContent = hour;
      spanD.textContent = days;
    });
  } else {
    active = !active;
    btnStart.textContent = "Start";
    clearInterval(idI);
    console.log(idI);
  }
};
const stop = () => {
  let currentTime = new Date().getTime();
  console.log(
    `currentTime===`,
    Math.floor(((currentTime - nowTime) / 1000 / 60) % 60)
  );
  console.log(currentTime);
  active === false;
  clearInterval(idI);
};
const reset = () => {
  //   console.log("klikam reset");
};
//Funkcja startująca
// const timer = () => {
//   if (!active) {
//     active = !active;
//     btnTime.textContent = "Pauza";
//     setInterval(start, 10);
//     console.log(time);
//   } else {
//     active = !active;
//     btnTime.textContent = "Start";
//     time === 0;
//     console.log(time);
//     clearInterval();
//   }
// };
//Funkcja startująca
// const start = () => {
//   // time++;
//   // panel.textContent = (time / 100).toFixed(2);
// };

// Pobieranie przycisków dla startu i resetu
btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);
// Pobieranie przycisków dla startu i resetu

// // =======funkcje======
let myFunction = () => {
  document.getElementById("demo");
  new Date().getTime();
  clearInterval();
};
// // // =======funkcje======
// function myFunction2() {}
// // // =======funkcje======
// function myFunction3() {}

// Pobieranie przycisków dla startu i resetu
// btnTime.addEventListener("click", timer);
// btnStart.addEventListener("click", start);
// btnStop.addEventListener("click", stop);
// btnReset.addEventListener("click", reset);

// document.getElementById("demo").addEventListener("click", myFunction);
// // Pobieranie przycisków dla startu i resetu
