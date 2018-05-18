//PART ONE
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

// PART TWO
let birthday = document.getElementById("input--date-picker");
let submitBtn = document.getElementById("button--birthday");
let pBirthdayMessage = document.getElementById("p--birthday-message");
let inputDatePicker = document.getElementById("input--date-picker");

//ON CLICK OF THE BUTTON, GRAB THE INPUTS
submitBtn.addEventListener("click", ()=> {
    let userBirthday : string = birthday.value;
    let userBDayDate: Date = new Date(userBirthday);

    pBirthdayMessage.innerHTML = makeDateString(userBDayDate);

    // let dateArr = userBirthday.split('-');

    // let birthdate : Object = {
    //     year: dateArr[0],
    //     month: dateArr[1],
    //     day: dateArr[2]
    // }

    // birthdayMessage(birthdate);
})

function birthdayMessage(birthdate : any) {
    //GET THE DAY OF THE WEEK AND YEAR OF THIS YEAR FROM THE DATE
    //CREATE A NEW UTC DATE TO GET THE ACTUAL DATE OF THE WEEK
    let today : Date = new Date();
    let thisYear = today.getFullYear();
    let thisMonth = birthdate.month;

}

// PART TWO ANSWER
function makeDateString(inputDate : Date) : string {
    //if today is users birthday
    if(inputDate.getDate === today.getDate() && (inputDate.getMonth() === today.getMonth()))
    {
        return 'Happy Birthday';
    }

    //today is not their birthday
    let thisYearsBirthday : Date = new Date();

    //SETTING THE DATE WITH THEIR FIELDS TO GET THE DAY
    thisYearsBirthday.setDate(inputDate.getDate());
    thisYearsBirthday.setFullYear(today.getFullYear());
    thisYearsBirthday.setMonth(inputDate.getMonth());


    //MONTH AND DATE ARE WHAT IS PROVIDED
    return `Your birthday is: ${days[thisYearsBirthday.getDay()]} ${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${today.getFullYear()}`
}