const electricityUserData = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData = {
	readings: 3,
	units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
	elData: { readings: number; mode: string }, // destructirisating every object to get data we need and typistaion of it
	wData: { readings: number }, // destructirisating every object to get data we need and typistaion of it
	elRate: number,
	wRate: number
): void => { // :void because it doesnt return anything
	if (elData.mode === "double" && elData.readings < 50) {
		monthPayments[0] = elData.readings * elRate * 0.7; // for electricity
	} else {
		monthPayments[0] = elData.readings * elRate; // for electricity
	}

	monthPayments[1] = wData.readings * wRate; // changing array for water
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);


const sendInvoice = (
	numData: number[], // destrucitirisation of array where [0] is electricity and [1] is water
	electricityUserData: { readings: number; units: string }, // destructirisation of object to get electricity data
	waterUserData: { readings: number; units: string } // destructirisation of object to get water data
): string => { // function returns string
	const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${numData[0]}€ 
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${numData[1]}€`;

	return text;
};

const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);