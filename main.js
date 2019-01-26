// Напишите и вызовите функцию printWindowValues, которая будет выводить в консоль все значения глобального объекта window.

function printWindowValues() {
  console.log(window);
}
printWindowValues();

/*Напишите функцию expTen, которая будет возводить в десятую степень
переданное в фукнцию число с помощью любого цикла (оператор возведения
в степень использовать нельзя). Выведите в консоль результат функции.*/

function expTen(a){
var sum = 1;
for (var i = 0; i < 10; i++){
  sum*=a;
}
return sum;
}
console.log (expTen(2));

/*Напишите функцию getFuncRes, которая принимает два аргумента - функцию и значение.
Функция getFuncRes должна возвращать результат выполнения переданной функции c единственным аргументом - значением.
Вызовите функцию getFuncRes, передав первый аргумент - метод console.log и второй аргумент - значение "Hello World".*/


function getFuncRes(aPar,bPar){
  return aPar(bPar);
}

getFuncRes(console.log, 'Hello World!');
