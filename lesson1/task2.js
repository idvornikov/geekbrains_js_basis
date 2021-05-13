// Сделать обмен значений двух числовых переменных без использования третьей
let num1 = 1;
let num2 = 2;
alert(`numbers before swap: num1=${num1}, num2=${num2}`)
num1 = num2 + (num2 = num1) - num1;
alert(`numbers before swap: num1=${num1}, num2=${num2}`)
