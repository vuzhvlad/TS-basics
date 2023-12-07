// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "John";


// function logBrthdayMsg(isBirthday: boolean, userName: string, age: number): string { // : void - means that function doesnt return anything
//     if(isBirthday) {
//         return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//     } else {
//         return "error";
//     }
// }

// logBrthdayMsg(isBirthdayData, userNameData, ageData);

let salary: number;
salary = 5000;


const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John}'; // JSON example
const userObj: {
    isBirthdayData: boolean, 
    userNameData: string, 
    ageData: number
} = JSON.parse(userData); // TS doesnt know what json parse will give you so it is any, so we use annotation to object
console.log(userObj); // TS doesnt give an error

const logBrthdayMsg = (isBirthday: boolean, userName: string, age: number): string => { // arrow function
    if(isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    } else {
        return "error";
    }
}