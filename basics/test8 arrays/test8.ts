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


//arrays
const departments: string[] = ['dev', 'design', 'marketing']; // : string[] - means that it is an array with strings

const department  = departments[0]; // string

// department.push(5); // we cant push a number because we have a string

const reports = departments.filter((d : string) => d !== 'dev').map((d: string) => `${d} - done`); // get every element that is not dev and marking that it is done

const nums: number[] = [3, 5, 6];

// in TS we always try to use one type in arrays or make less types inside of array
 const smth: any[] = [1, 2, 3, 'fsfs'];

 const two: number[][] = [[3, 5, 6], [3, 5, 6]]; // matrix with two arrays of numbers

 const [first] = reports; // taking first element of the array
 console.log(first);
 console.log(reports);
