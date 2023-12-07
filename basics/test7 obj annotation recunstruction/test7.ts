const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const userData = { // object with data
    isBirthdayData: true,
    ageData: 40,
    userNameData: "John",
    messages: {
        error: 'Error',
    }
}

const createError = (msg: string): never => {
    throw new Error(msg);
}


function logBrthdayMsg({ // destructurisation for every elem of object
    isBirthdayData, 
    userNameData, 
    ageData,
    messages: { error },
}: { // made typisation of object, we showed which object this function expects, annotation
    isBirthdayData: boolean;
    userNameData: string;
    ageData: number;
    messages: {error: string}
}): string { // : void - means that function doesnt return anything
    if (isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError(error); // returning never if nothing happened
    }
}

console.log(logBrthdayMsg(userData));

