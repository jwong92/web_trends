"use strict";
//PART ONE
// GROUP OF ENUMS ARE A SET OF CONSTANTS TO BE USED
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
//CAN DEFINE ENUM WITH ARBITRARY VALUES
//CAN SET THE NUMBERS IN A PACKAGE SO YOU CAN QUICKLY REFERENCE THEM LATER
var earthPhysics;
(function (earthPhysics) {
    earthPhysics[earthPhysics["gravity"] = 9.81] = "gravity";
    earthPhysics[earthPhysics["c"] = Math.pow(2.99, 8)] = "c";
    earthPhysics[earthPhysics["weight"] = 1] = "weight";
})(earthPhysics || (earthPhysics = {}));
//DAYS IS AN OBJECT, AND CAN ACCESS MEMBERS OF ENUM WITH DOT NOTATION
// console.log(days.Sunday);
// console.log(days[0]);
//HTML ELEMENTS
var pTodayDate = document.getElementById("p--today-date");
//TYPESCRIPT CAN BE TYPED TO TYPESCRIPT TYPE OR OBJECT, SUCH AS DATE WHICH IS A PREDEFINED INTERFACE
//TODAY IS A TYPE DATE, AND IS ASSIGNED A NEW DATE
var today = new Date();
// console.log(today.getMonth());
pTodayDate.innerHTML = "Today is " + days[today.getDay()] + " " + months[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear();
// `` BACK TICKS ARE START AND END OF STRINGS. CAN ADD BOTH DOUBLE AND SINGLE QUOTES WITHIN THEM
//YOU CAN SEED THE ENUM
/*
enum days {
    Sunday = 10,
    Monday, //11
    Tuesday, //12
    Wednesday,//13
    Thursday,
    Friday,
    Saturday
}
*/
// PART TWO
var birthday = document.getElementById("input--date-picker");
var submitBtn = document.getElementById("button--birthday");
var pBirthdayMessage = document.getElementById("p--birthday-message");
var inputDatePicker = document.getElementById("input--date-picker");
//ON CLICK OF THE BUTTON, GRAB THE INPUTS
submitBtn.addEventListener("click", function () {
    var userBirthday = birthday.value;
    var userBDayDate = new Date(userBirthday);
    pBirthdayMessage.innerHTML = makeDateString(userBDayDate);
    // let dateArr = userBirthday.split('-');
    // let birthdate : Object = {
    //     year: dateArr[0],
    //     month: dateArr[1],
    //     day: dateArr[2]
    // }
    // birthdayMessage(birthdate);
});
function birthdayMessage(birthdate) {
    //GET THE DAY OF THE WEEK AND YEAR OF THIS YEAR FROM THE DATE
    //CREATE A NEW UTC DATE TO GET THE ACTUAL DATE OF THE WEEK
    var today = new Date();
    var thisYear = today.getFullYear();
    var thisMonth = birthdate.month;
}
// PART TWO ANSWER
function makeDateString(inputDate) {
    //if today is users birthday
    if (inputDate.getDate === today.getDate() && (inputDate.getMonth() === today.getMonth())) {
        return 'Happy Birthday';
    }
    //today is not their birthday
    var thisYearsBirthday = new Date();
    //SETTING THE DATE WITH THEIR FIELDS TO GET THE DAY
    thisYearsBirthday.setDate(inputDate.getDate());
    thisYearsBirthday.setFullYear(today.getFullYear());
    thisYearsBirthday.setMonth(inputDate.getMonth());
    //MONTH AND DATE ARE WHAT IS PROVIDED
    return "Your birthday is: " + days[thisYearsBirthday.getDay()] + " " + months[inputDate.getMonth()] + " " + inputDate.getDate() + ", " + today.getFullYear();
}
