const test: null = null; // we can put null only in null

const test2: any = null;

// const test3: string = null; // error

// const test4: number = null; // error

const test5: undefined = undefined;

const test6: any = undefined;

// const test7: string = undefined;

function getRndData() {
    if(Math.random() < 0.5) {
        return null;
    } else {
        return '  Some Data  ';
    }
}

const data = getRndData();
const trimmedData = data ? data.trim() : null; // .trim removes spaces, if data exists then we trim if it is not we return null

