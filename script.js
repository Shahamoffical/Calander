const date =document.getElementById("date");
const day= document.getElementById("day");
const month=document.getElementById("month");
const year=document.getElementById("year");

const today= new Date();
const weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const Allmonths= ["January","Feburary","March","April","May","June","July","August","Semtember","October","November","December"];
console.log(today);
date.innerHTML = today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = Allmonths[today.getMonth()];
year.innerHTML = today.getFullYear();