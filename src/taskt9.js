const money = 200000; 
const percent = 0.10; 
const years = 2;
const totalPayments = money * (1 + percent) ** years;
const totalInterest = totalPayments - money;
console.log(`Общая сумма выплаты по кредиту: ${totalPayments.toFixed(2)} рублей`);
console.log(`Переплата по кредиту: ${totalInterest.toFixed(2)} рублей`);