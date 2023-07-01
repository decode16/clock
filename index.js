const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");


const today = new Date();

const weekdays = ["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"];

const allmonths = ["january","february","march","april","may ","june","july","august","september","october","november","december"];

date.innerHTML = (today.getDate()<10 ? "0" : "") + today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = allmonths[today.getMonth()];
year.innerHTML = today.getFullYear();
