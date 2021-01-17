'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = 'steam';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'asd, asd, das');
let deposit = confirm('Есть ли у вас депозит в банке?');

let start = function () {
    do {
        money = prompt('Ваш ежемесячный доход', '5000');
    }
    while (!isNumber(money));
};

start();

let expenses = [];

const getExpenseMonth = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?', 'ggggg');
        let amount;
        while (!isNumber(amount)) {
            amount = prompt('Во сколько это обойдется?');
        }
        sum += amount;
    }
    return sum;
};
const expensesAmount = getExpenseMonth();
console.log('expensesAmount: ', expensesAmount);


const getAccumulatedMonth = function () {
    return money - expensesAmount;
};
const accumulatedMonth = getAccumulatedMonth();
console.log('accumulatedMonth: ', accumulatedMonth);


const getTargetMOnth = function (mission) {
    let period = mission / accumulatedMonth;
        if (period > 0) {
            console.log('Цель будет достигнута за: ' + period + ' месяцев');
        } else {
            console.log('Цель не будет достигнута');
        }
    return period;
};
const period = getTargetMOnth(10000);



let budgetDay = Math.ceil(accumulatedMonth / 30);

const getStatusIncome = function () {
    if (budgetDay >= 1200) {
        return('У вас высокий уровень дохода');
    } else if (1200 > budgetDay >= 600) {
        return('У вас средний уровень дохода');
    } else if (budgetDay < 600) {
        return('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return('Что то пошло не так');
    }
}

console.log(getStatusIncome());

const showTypeOf = function (data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

addExpenses = addExpenses.toLowerCase().split(', ');
console.log(addExpenses);
console.log(budgetDay);