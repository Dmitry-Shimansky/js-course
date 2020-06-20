'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let money,
    start = function(){
        do {
        money = +prompt('Ваш месячный доход ?', 5000);
    }
    while (!isNumber(money));
    };

    start();

let appData = {
    income: {},
    addIncome: [],
    expense: {},
    addExpenses: [],
    deposit: false,
    mission: 18489,
    period: 12,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Taxes, fuel, food');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у Вас депозит в банке?');
            
            let sum = 0;

            for (let i=0; i<2; i++) {
                let expenses1;

                expenses1 = prompt('Введите обязательную статью расходов ?');
            
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
        appData.budgetDay = appData.budgetMonth / 30;
    },
    getTargetMonth: function(a,b){
        let monthCount=0;
            monthCount = a/b;
        
        if (monthCount >= 0) {
            console.log('Цель будет достигнута ' + Math.round(monthCount) + ' months');
        } else {
            console.log('Цель не будет достигнута ' + Math.round(monthCount) + ' months');
        }
            return a/b;
    }
};

appData.asking();

appData['budget'] = money;

appData.budgetDay = 0;
appData['budgetMonth'] = 0;
appData.expensesMonth = 0;

appData.getBudget();

console.log ('Расходы за месяц: ' + appData.getExpensesMonth());

console.log(appData.getStatusIncome());

//lesson 4

appData.getTargetMonth(appData.mission,appData.budgetMonth);



