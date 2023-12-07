const currRate: string = "1.05";

const fetchCurr = (response: string): number => { // imagine we do a fetch for getting data from backend and we parse this response
	const data: number = JSON.parse(response);
	return data;
};

function transferEurToUsd(
	 	available: boolean,
	 	amount: number, 
	 	commission: number): void { // one currency to another
	if (available) {
		let res: number = fetchCurr(currRate) * amount * commission; // calculating
		console.log(res);
		// Или запись в элемент на странице вместо консоли
	} else {
		console.log("Сейчас обмен недоступен");
	}
}

transferEurToUsd(true, 500, 1.05);
