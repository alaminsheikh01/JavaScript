console.log("Hello world");

console.dir(Date);
console.log(Date.parse());
const date = new Date();
console.log(date.getDate(), +date.getMonth(), date.getFullYear());

function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
  const days = [
    "Moday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Staturday",
    "Sunday",
  ];
  return days[date];
}
console.log(getDay());
console.log(new Date().toISOString());
console.log(getDay("2022-06-09T13:12:54.494Z"));

function formateDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
}
console.log(formateDate("2022-06-09T13:12:54.494Z"));
