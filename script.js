'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let money,
    start = function(){
        do {
        money = +prompt('Ваш месячный доход ?', 5000);
    }
    while (!isNumber(money) || money === ' ' || money === null);
    };

    start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expense: {},
    addExpenses: [],
    percentDeposit: 0,
    moneyDeposit: 0,
    deposit: false,
    mission: 18489,
    period: 12,
    asking: function(){

        if (confirm('Есть ли у Вас дополнительный источник заработка?')){
            let itemIncome = prompt('Какой у Вас доплнительный заработок?', 'Хипую');

            while (parseInt(itemIncome)){
                itemIncome = prompt('Какой у Вас доплнительный заработок?');
            }

            let cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', 759);

            while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null) {
                cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?');
                }

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Taxes, fuel, food');

            while (parseInt(addExpenses)){
                addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            }
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у Вас депозит в банке?');
            
            let sum = 0;

            for (let i=0; i<2; i++) {
                let expenses1;

                expenses1 = prompt('Введите обязательную статью расходов');
                    while (parseInt(expenses1)){
                        expenses1 = prompt('Введите обязательную статью расходов');
                    }

                let pay;
                
                while (!isNumber(pay)) {
                pay = +prompt('Во сколько это обойдется?');
                }
                sum = pay;
                
                appData.expense[expenses1] = sum;
            }
    },
    getExpensesMonth: function () {
        let summ=0,
            dop=0;
        for (let key in appData.expense) {
            summ = appData.expense[key];
            dop += summ;
            
        }
        return dop;
    },
    getStatusIncome: function(){
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay>=600 && appData.budgetDay<1200) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay>=0 && appData.budgetDay<600) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    },
    getBudget: function(){
        appData.budgetMonth = appData.budget - appData.getExpensesMonth();
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function(a,b){
        let monthCount = a/b;
        
        if (monthCount >= 0) {
            console.log('Цель будет достигнута ' + Math.ceil(monthCount) + ' months');
        } else {
            console.log('Цель не будет достигнута ' + Math.ceil(monthCount) + ' months');
        }
            return a/b;
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            appData.percentDeposit = +prompt('Какой годовой процент?', '10');
            
            while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null){
                appData.percentDeposit = +prompt('Какой годовой процент?');
            }
            appData.moneyDeposit = +prompt('Какая сумма заложена?', 13561);
            
            while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null) {
                appData.moneyDeposit = +prompt('Какая сумма заложена?');
            }
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    },

};

appData.asking();

appData.getBudget();

console.log ('Расходы за месяц: ' + appData.getExpensesMonth());

console.log(appData.getStatusIncome());

appData.getTargetMonth(appData.mission,appData.budgetMonth);

console.log('Наша программа включает в себя данные:');

for (let key in appData){
console.log('Ключ: ' + key + ' Значение: ', appData[key]);
}

appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

//console.log(capitalize(appData.addExpenses.toString()));

let str = appData.addExpenses.join(', ').toString();

function ucFirstAllWords(str)
{
    var pieces = str.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ");
}

console.log(ucFirstAllWords(str));