"use strict";
// //Команды
// // лучше ставь точку с запятой везде, дружок!

// alert('hello');
// alert('world');
// alert(3+2+
// 5
// +2)


// //без ошибок
// alert('все окей');
// [1, 2].forEach(alert)




// //ПЕРЕМЕННЫЕ
// let message; //let - определяет переменную с именем message
// message='hello';
// alert(message); // показывает содержимое переменной message



// let message='hello, alex';
// alert(message);



// let user='Alex', age='29', message='hello, world';
// console.log(user, age, message);



// //КОНСТАНТА
// const myBirthday='30.01.1991';// неизменная переменная
// alert(myBirthday);

// //пример константы с цветом
// const COLOR_RED="#F00"
// const COLOR_GREEN="#0F0"
// //выбираем цвет
// let color=COLOR_RED;// задаем переменную
// alert(color);//выводим на экран



// let admin;
// let name='John';
// admin=name;
// alert(admin);

// let planetName='PlanetEarth';
// alert(planetName)



// //ТИПЫ ДАННЫХ
// let form = "alex";
// console.log(form);

// let n = ('привет');
// console.log(typeof n);

// let x = 1;
// x = -x;
// console.log(x);

// let s = '2' + '7'; //сложение строк = 27
// console.log(s);

// let p = 2 + 7; //сложение чисел = 9
// console.log(p);

// let t = 1, b = 2;
// console.log(t+b);

// let symb = 'g'/3;
// console.log(symb);

// let num = '3'-'1';
// console.log(num);


// //оператор if/else
// let weddingdate = prompt('Какого числа у тебя свадьба?');
// 	if (weddingdate == 2.04){
// 		console.log ('отлично');
// 		console.log ('Красава бро');
// 	}

// let WeekendDate = prompt('Когда поедем на шашлыки?');
// 	if (WeekendDate == 15){
// 		console.log('отлично');
// 	}
// 	else{ 
// 		console.log('это не подходит');
// 	}

// let company = prompt('Какой сегодня год?');
// (company == '2020') ?
// 	console.log('да') : console.log('нет');

// let OfficialName = prompt('Какое официальное название Javascript?')
// 	if (OfficialName == 'Ecmascript'){
// 		alert('правильно')
// 	}
// 	else{
// 		alert('Вы не знаете названия')
// 	}

// let value = prompt('Введите число')
// 	if (value > 0){
// 		alert(1)
// 	}

// 	if (value < 0){
// 		alert(-1)
// 	}

// 	else{
// 		alert(0)
// 	}


// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// //применение оператора ?
// let message = (login == 'Сотрудник')? 'Привет':
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' :*/

// let hour = prompt('Режим работы офиса!')
// 	if (hour < 10 || hour > 18){
// 		console.log('Офис закрыт');
// 	}

// 	else if (hour > 10 || hour < 18){
// 		console.log ('Офис открыт');
// 	}
	

// let login = prompt('Кто там?', '');
// 	if(login==="Админ"){

// 		let password = prompt('Введите Ваш пароль?', '');
// 			if (password == 'Я главный'){
// 				alert('Здравствуйте!');
// 			}
// 			else if (password == '' || null){
// 				alert('Отмена');
// 			}
// 			else{
// 				alert('Неверный пароль');
// 			}

// 	}
// 			else if (login == '' || null) {
//    				 alert('Отмена');
//    			} 			
			
// 			else{
//   				alert('Я вас не знаю');
//   			} */

// //Конструкция switch
// // switch - обозначает переменную
// // case - заменяет if
// // break - прерывает выполнение
// let N = 10+2;
// switch (N){
// 	case 13:
// 		console.log ('too much');
// 		break;
// 	case 14:
// 		console.log ('too much');
// 		break;
// 	case 12:
// 		console.log ('true');
// 	default:
// 		console.log ('error');
// }

// // Задание switch в if
// let browser = prompt ('Каким браузером ты пользуешься?')
// 	if (browser ==='Edge'){
// 		console.log('Прекрасно!')
// 	}
// 	if(browser === 'Chrome'
// 		|| browser === 'Firefox'
// 		|| browser === 'Safari'
// 		|| browser === 'Opera'){
// 			console.log('Мы скоро будем поддерживать этот браузер')
// 		}
// 	else{
// 		console.log('error')
// 	}

// 	//Задание if в switch

// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//   case 0:
//     console.log('Вы ввели число 0');
//     break;

//   case 1:
//     console.log('Вы ввели число 1');
//     break;

//   case 2:
//   case 3:
//     console.log('Вы ввели число 2, а может и 3');
//     break;
// } 

// let Operating = prompt ('Что бы узнать режим работы, введите день недели!')
// 	if (Operating ==='понедельник'){
// 		alert('c 9.00 - 18.00')
// 	}
// 	if(Operating === 'вторник'
// 		|| Operating === 'среда'
// 		|| Operating === 'четверг'
// 		|| Operating === 'пятница'){
// 			alert('с 9.00 - 16.00')
// 		}
// 	else{
// 		alert('выходной день')
// 	}


// let Operating = prompt ('Что бы узнать режим работы, введите день недели!')
// 	switch(Operating){
// 		case 'понедельник':
// 		console.log('c 9.00 - 18.00')
// 		break;

// 		case 'вторник':
// 		case 'среда':
// 		case 'четверг':
// 		case 'пятница':
// 		console.log( 'c 9.00 - 16.00')
// 		break

// 		default:
// 		console.log('выходной день')
// 		break

// 	}*/


// //ЦИКЛЫ
// //While
// let i = 0
// while (i < 3){
// 	console.log(i); // в {} код, он же тело цикла, выполнится если значение i = true
// 	i++
// }

// //do - служит для проверки условий, но сначала проверяется тело


// // for
// for (let i = 0; i < 10; i++){
// 	if (i == 2){
// 		break
// 	}
// 	console.log(i);
// }

// for (let i = 0; i < 10; i++){
// 	if (i == 5){
// 		continue
// 	}
// 	console.log(i);
// }
// //i=0 - начало
// //i<3 - условие
// //i++ - шаг
// //console.log - тело



//ФУНКЦИИ

let num1 = 20;

function showFirstMessage (text){
	console.log(text);
	num1 = 10;
	console.log(num1);
}
showFirstMessage ("Hello!");
console.log(num1);

//function declaration - функция объявленная в потоке кода
function calc(a,b){
	return(a + b);
}

console.log(calc(3,4));
console.log(calc(9,5));

//function expression - функция присвоенная в переменную
//создается когда код до нее доходит

let calc1 = function(a,b){
	return(a + b);
}
console.log(calc1(7,9));
console.log(calc1(2,4));

//стрелочная функция
let calc3 = (a,b) => a+b;
console.log(calc3(7,5))

function retVar() {
	let num2 = 50;
	return num2;
}

let anotherNum = retVar();
console.log(anotherNum)



//ОБЪЕКТЫ

//name:alex ключ|значение

// let userid = {
// 	name: 'Alexander',
// 	age: 29,
// 	'likes birds': true,
// };
// alert (userid['likes birds']); //вызов свойства из 2х слов производится в кваратных скобках

// let fruit = prompt('какой фрукт выбирете?', 'apple');

// let bag = {
// 	[fruit]: 5,
// };
// alert(bag.apple);

// let userName = {
// 	name: 'alex',
// 	age: 20,
// 	isAdmin: true,
// };

// for (let bb in userName){
// 	alert(bb);
// 	alert(userName[bb]);
// }




// function makeUser(name, age){
// 	return{
// 		name:name,
// 		age:age,
// 	};
// }
// let user = makeUser('alex', 29); // объявления свойств объекта в переменной
// alert(user.name);
// alert(user.age);

// let obj = {
// 	first: 1,
// 	second: 2,
// 	third: 3,
// }
// alert(obj.first + obj.second + obj.third); //можно сложить значения в объекте

let codes = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США"
};

for (let code in codes) {
  alert( code ); // 49, 41, 44, 1
}

