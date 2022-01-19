const dDay = document.querySelector("#d-day");
const timer = document.querySelector("#timer");

const xmasDate = new Date(2022, 11, 25);

function dDayHandler () {
    const currentDate = new Date();
    const leftDays = String(Math.ceil((xmasDate.getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24));
    dDay.innerText = `${leftDays.padStart(3, "0")} DAYS n`
};

function timerHandler () {
    const currentDate = new Date();
    const time = String(22 - currentDate.getHours());
    const minute = String(59 - currentDate.getMinutes());
    const second = String(60 - currentDate.getSeconds());
    timer.innerText = `${time.padStart(2, "0")}:${minute.padStart(2, "0")}.${second.padStart(2, "0")}`
};

dDayHandler();
timerHandler();

setInterval(dDayHandler, 1000);
setInterval(timerHandler, 1000);