// GROUP OF ENUMS ARE A SET OF CONSTANTS TO BE USED

enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

//CAN DEFINE ENUM WITH ARBITRARY VALUES
//CAN SET THE NUMBERS IN A PACKAGE SO YOU CAN QUICKLY REFERENCE THEM LATER
enum earthPhysics{
    gravity = 9.81,
    c = Math.pow(2.99, 8),
    weight = 1
}

//DAYS IS AN OBJECT, AND CAN ACCESS MEMBERS OF ENUM WITH DOT NOTATION
// console.log(days.Sunday);
// console.log(days[0]);

//HTML ELEMENTS
let pTodayDate = document.getElementById("p--today-date");
console.log(pTodayDate);

//TYPESCRIPT CAN BE TYPED TO TYPESCRIPT TYPE OR OBJECT, SUCH AS DATE WHICH IS A PREDEFINED INTERFACE
//TODAY IS A TYPE DATE, AND IS ASSIGNED A NEW DATE
let today : Date = new Date();
// console.log(today.getMonth());

pTodayDate.innerHTML = `Today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`;
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