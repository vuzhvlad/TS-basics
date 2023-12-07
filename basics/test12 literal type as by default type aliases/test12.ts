let msg: "Hello" = 'Hello'; // onle "Hello" - literal type

msg = 'Hello'; // so we cant change it, it can only be a "Hello"

const port3000: number = 3000;
const port3001: number = 3001;


const startServer = (protocol: 'http' | 'https', port: 3000 | 3001): 'Server Started' => { // literal type for parameters of function that we already know
    if(port === port3000 || port === port3001) { // only when port is okay we start it
        console.log(`Server started on ${protocol}://server:${port}`);
    } else {
        console.error("Invalid port");
    }
    

    return "Server Started";
}

startServer('http', 3000); // so TS will help you to call function


type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationId = string | number;


function createAnimation(id: AnimationId,
                         animName: string,
                         timingFunction: AnimationTimingFunc = 'ease', // string = 'ease' - parametr by default
                         duration: number,
                         iterCount: "infinity" | number // literal for only this string or any number
): void { 
                        // const elem = document.querySelector(`#${id}`) as HTMLElement; // it says it is html elemnt that we will get
    
                         //if(elem) {
                            console.log(`${animName} ${timingFunction} ${duration} ${iterCount}`);
                            // elem.style.animation = `${animName} ${timingFunction} ${duration} ${iterCount}`; // real example
                         //}
    

}

createAnimation('id', 'vlad', 'ease', 10, "infinity");