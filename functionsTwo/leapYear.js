// ! case one
// ! those year that in not divisible by 100, and if the year is divisible by 4 then it will leap year
leapYear = (year) => {
  if (year / 100 !== 0 && year / 4 === 0) {
    console.log("Leap Year");
  } else {
    console.log("Not Leap Year");
  }
};
leapYear(1800);

// ! case two
// ! divisiable by 100 and 400 then leapYear

function LeapYear(year) {
  if (year / 100 && year / 400) {
    return "leap year";
  } else {
    return "no leap year";
  }
}
const year = LeapYear(18000);
console.log(year);
