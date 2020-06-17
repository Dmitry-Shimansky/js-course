'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money = 1000,
    income = 'Фриланс',
    addExpenses = 'Интернет, Такси, Коммуналка, социалка',
    deposit = true,
    mission = 18489,
    period = 12;

let start = function(){
    
    do {
        money = prompt('Ваш месячный доход ?');
    }
    while (!isNumber(money));
};

start();

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
addExpenses = addExpenses.split(', ');

let budgetDay;
budgetDay = money/30;

//lesson 3

//money = +prompt('Ваш месяный доход ?', 20000);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Taxes, fuel, food');

addExpenses = addExpenses.split(', ');
console.log (addExpenses);

deposit = confirm('Есть ли у Вас депозит в банке?');
/*
function question() {
    return prompt('Введите обязательную статью расходов ?', 'Shop');
};

function howMuch() {
    return +prompt('Во сколько это обойдется ?', 10);
};

let expenses1 = question(),
    amount1 = howMuch(),
    expenses2 = question(),
    amount2 = howMuch();
*/

let expenses1, expenses2;

let getExpensesMonth = function() {
        let sum = 0;
    
        for (let i=0; i<2; i++) {
            
            if (i===0) {
                expenses1 = prompt('Введите обязательную статью расходов ?', 'Shop');
            } else if (i===1) {
                expenses2 = prompt('Введите обязательную статью расходов ?', 'Taxes');
            }

            let pay;
            
            while (!isNumber(pay)) {
            pay = +prompt('Во сколько это обойдется?');
            }
            sum += pay;
        }
        console.log(sum);
        return sum;
};

let expensesAmount = getExpensesMonth()
console.log ('Расходы за месяц: ' + expensesAmount);

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
/*
const getExpensesMonth = function(a,b){
return a + b;
}

let sumExpensesMonth = expensesAmount;
console.log ('Расходы за месяц', sumExpensesMonth);
*/
const getAccumulatedMonth = function(a,b){
    return a - b;
}

let accumulatedMonth = getAccumulatedMonth(money,expensesAmount);
//console.log (accumulatedMonth);

let monthCount=0;

function getTargetMonth(a,b){
    monthCount = a/b;
    
    if (monthCount >= 0) {
        console.log('Цель будет достигнута');
    } else {
        console.log('Цель не будет достигнута');
    }
        return a/b;
}

getTargetMonth(mission,accumulatedMonth);

console.log (Math.round(monthCount), 'months');

budgetDay = accumulatedMonth/30;
//console.log ('budgetDay is', budgetDay);



