let userName: string = "Ivan"; // : string - means it can be only a string


// '', "", `` - strings
// any numbers, NaN - numbers
// true, false - boolean


const isBirthday: boolean = true;
let age: number = 40;
const user: string = 'John';

if(isBirthday) {
    console.log(`Congrats ${user.toUpperCase()}, age: ${age + 1}`);
}