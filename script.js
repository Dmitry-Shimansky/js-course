var money = 1000;
var income = 'Фриланс';
var addExpenses = 'Интернет, Такси, Коммуналка, социалка';
var deposit = true;
var mission = 18489;
var period = 12;

console.log (typeof money);
console.log (typeof income);
console.log (typeof deposit);

console.log (addExpenses.length);

console.log ('Период равен ' + period + ' месяцев');
console.log ('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

console.log (addExpenses.toLowerCase());
console.log (addExpenses.split(', '));

let budgetDay;
budgetDay = money/30;
console.log (budgetDay);