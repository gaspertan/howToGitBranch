const totalBill = 3500; 
const tipAmount = 500; 
const numberOfPeople = 4; 


const totalPerPerson = (totalBill + tipAmount) / numberOfPeople;


console.log(`С каждого по ${totalPerPerson} рублей, при общем счете ${totalBill} рублей и чаевыми ${tipAmount} рублей`);