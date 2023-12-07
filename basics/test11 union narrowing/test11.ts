const message: string | number | boolean = 5; // for typisation for few different type of data

const messages: string[] | number[] = ['a', 'b']; // typisation of array for ONLY string or numbers


function print(msg: string | number | boolean): void {
    if(typeof msg === 'string' || typeof msg === 'number') { // narrowing
        console.log(msg.toString()); // method for string and number
    } else {
        console.log(msg); // method for boolean
    }
    
    console.log(msg); // union type
}

print(4);
print('vladik');

// string | number - is called UNION type, two simple types together


function printMsg(msg: string[] | number | boolean): void {
    if(Array.isArray(msg)) { // narrowing for arrays
        msg.forEach((msg) => {
            console.log(msg);
        });
    } else if (typeof msg === 'number') {
        console.log(msg.toFixed());
    } else {
        console.log(msg); // boolean
    }
    
    console.log(msg); // union type
}



const printReadings = (a: string | number, b: number | boolean) => { // simple narrowing without types
    if( a === b) {
        console.log(a, b);
    }
}



const printReadings2 = (a: string | number[]) => { // it is possible to use methods without narrowing
    console.log(a.slice(0, 3));
}



const checkReadings = (readings: {system: number} | {user: number}): void => { // union of 2 objects
    if('system' in readings) { // checking for objects "in" if it exists inside of our argument
        console.log(readings.system);
    } else {
        console.log(readings.user);
    }
}



function logValue(x: string | Date) {
    if(x instanceof Date) { // checkings if it is Date
        console.log(x.getDate());
    } else {
        console.log(x.toLowerCase()); // string
    }
}