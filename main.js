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
