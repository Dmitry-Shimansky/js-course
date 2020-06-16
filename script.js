'use strict';
let money = 1000;
let income = 'Фриланс';
let addExpenses = 'Интернет, Такси, Коммуналка, социалка';
let deposit = true;
let mission = 18489;
let period = 12;

let showTypeOf = function(data){
    console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//console.log (typeof money);
//console.log (typeof income);
//console.log (typeof deposit);

//console.log (addExpenses.length);

//console.log ('Период равен ' + period + ' месяцев');
//console.log ('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

addExpenses = addExpenses.toLocaleLowerCase();
//console.log (addExpenses);
addExpenses = addExpenses.split(', ');
//console.log (addExpenses);

let budgetDay;
budgetDay = money/30;
//console.log (budgetDay);

//lesson 3

money = +prompt('Ваш месяный доход ?', 20000);
//console.log (money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Taxes, fuel, food');
//console.log (addExpenses);

addExpenses = addExpenses.split(', ');
console.log (addExpenses);

deposit = confirm('Есть ли у Вас депозит в банке?');
//console.log (deposit);

function question() {
    return prompt('Введите обязательную статью расходов ?', 'Shop');
};

function howMuch() {
    return +prompt('Во сколько это обойдется ?', 10);
};

let expenses1 = question();
//console.log (expenses1);

let amount1 = howMuch();
//console.log (amount1);

let expenses2 = question();
//console.log (expenses2);

let amount2 = howMuch();
//console.log (typeof amount2);

//let budgetMonth;
//budgetMonth = money - (amount1 + amount2);
////console.log (budgetMonth);

//let target = mission/budgetMonth;
////console.log (Math.ceil(target));

//budgetDay = budgetMonth/30;
////console.log (Math.floor(budgetDay));

let getStatusIncome = function(){
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay>=600 && budgetDay<1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay>=0 && budgetDay<600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
}

console.log(getStatusIncome());

//lesson 4

const getExpensesMonth = function(a,b){
return a + b;
}

let sumExpensesMonth = getExpensesMonth(amount1,amount2);
console.log ('Расходы за месяц', sumExpensesMonth);

const getAccumulatedMonth = function(a,b){
    return a - b;
}

let accumulatedMonth = getAccumulatedMonth(money,sumExpensesMonth);
//console.log (accumulatedMonth);

function getTargetMonth(a,b){
    return a/b
}

console.log (Math.round(getTargetMonth(mission,accumulatedMonth)), 'months');

budgetDay = accumulatedMonth/30;
//console.log ('budgetDay is', budgetDay);



