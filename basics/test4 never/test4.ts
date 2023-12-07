const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const createError = (msg: string): never => {
    throw new Error(msg);
}


function logBrthdayMsg(isBirthday: boolean, userName: string, age: number): string { // : void - means that function doesnt return anything
    if (isBirthday === true) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    } else if (isBirthday === false) {
        return "too bad"
    }
    return createError("Error"); // returning never if nothing happened
}

logBrthdayMsg(isBirthdayData, userNameData, ageData);

