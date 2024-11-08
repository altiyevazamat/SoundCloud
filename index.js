// // let who = prompt("Кто там?");
// // if (who == "Админ" || who == "админ") {
// //   let password = prompt("Пароль?");
// //   if (password === "Я Главный") {
// //     alert("Здравствуйте!");
// //   } else if (password === null) {
// //     alert("Отменено");
// //   } else {
// //     alert("Неверный пароль!");
// //   }
// // } else if (who === null) {
// //   alert("Отменено");
// // } else {
// //   alert("Я вас не знаю!");
// // }

// // let num = +prompt("Введите число:");
// // // num > 0 && num < 5 ? alert("Все верно!") : alert("Не верно!");

// // num >= 10 && num <= 20 ? alert("Все верно") : alert("Не верно!");

// // let num1 = +prompt("Введите num1");
// // let num2 = +prompt("Введите num2");
// // num1 <= 1 && num2 >= 3 ? alert("Все верно") : alert("Не верно!");

// // for (let i = 1; i <= 100; i++) {
// //   console.log(i);
// // }

// // for (let i = 11; i <= 33; i++) {
// //   console.log(i);
// // }

// // let num = 2;
// // for (let i = 0; i < 1000; i++) {
// //   num *= 3;
// //   if (num >= 1000) {
// //     console.log(`Понадобилось ${i} повторений, итоговое число ${num}`);

// //     break;
// //   }

// // }

// let text = "Azamat";
// for (let i = 1; i < text.length; i++) {
//   console.log(text[i]);
// }

// let str = "-";
// for (let i = 1; i <= 9; i++) {
//   str += i + "-";
// }
// console.log(str);

// let str = "";
// for (let i = 1; i <= 9; i++) {
//   str += i;
// }
// console.log(str);
// console.log(typeof str);

// let str = "";
// for (let i = 9; i > 0; i--) {
//   str += i;
// }
// console.log(str);

// // Задача 4
// let mass = [];

// for (let i = 0; i < 10; i++) {
//   mass[i] = "x";
// }

// console.log(mass);

// // Задача 5

// let mass = [];

// for (let i = 0; i < 10; i++) {
//   mass[i] = i + 1;
// }

// console.log(mass);

// // Задача 6

// let mass = [-1, -5, 3, 0, 4, 7, -30];

// for (let i = 0; i < mass.length - 1; i++) {
//   let newMass = [];
//   if (mass[i] < 10 && mass[i] > 0) {
//     newMass.push(mass[i]);
//   }
//   console.log(newMass);
// }

// // Задача 7

// let mass = [2, 3, 4, 5, 6, 7];
// let result = "Нету числа 5";

// for (let i = 0; i < mass.length - 1; i++) {

//   if (mass[i] == 5) {
//     result = "Число 5 есть в массиве";
//   }
// }
// console.log(result);

// // Задача 8

// let mass = [1, 2, 5, 6, 7, 8, 10];
// let summ = 0;
// for (let i = 0; i < mass.length; i++) {
//   summ += mass[i];
// }
// console.log(summ);

// // Задача 9

// let mass = [2, 2];
// let summ = 0;
// for (let i = 0; i < mass.length; i++) {
//   summ += Math.pow(mass[i], 2);
// }
// console.log(summ);

// // // Задача 10

// let mass = [1, 2, 5, 6, 7, 8, 10];
// let summ = 0;
// let sred = 0;
// for (let i = 0; i < mass.length; i++) {
//   summ += mass[i];
//   sred = summ / mass.length;
// }
// console.log(sred);

// // // Задача 11

// let fact = 10;
// let factRes = 1
// for (let i = 1; i <= fact; i++) {
//   factRes *= i
// }
// console.log(factRes);

// // // // Задача 12

// let mass = [];
// for (let i = 10; i >= 1; i--) {
//   mass.push(i)
// }
// console.log(mass);

// // // // Задача 13

// let mass = [1, 5, -1, -2, 0, 3];
// let summ = 0
// for (let i = 0; i < mass.length; i++) {
//   if (mass[i] > 0) {
//     summ += mass[i]
//   }
// }
// console.log(summ);

// // // Задача 14

// let arr = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr.length; i++) {
//   let num = String(arr[i]);
//   let char = num[0];
//   if (char == 1 || char == 2 || char == 5) {
//     console.log(num);
//   }
// }

// Задача 15

// let arr = [1,2,3,4,5,6,7];
// let newArr = []
// for (let i=arr.length-1;i>=0;i--) {
//     newArr.push(arr[i])
// }

// console.log(newArr)

// Задача 16

// let arr = [1,2,10,4,30,6,34,8];

// for (let i=0;i<arr.length;i++){
//     if (arr[i] == i+1) {
//         console.log(i+1)
//     }
// }

let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

for (let key in obj) {
  //   str = obj[key] + obj[key] * 0.1;
  //   console.log(obj[key]);
  if (obj[key] <= 400) {
    str = obj[key] + obj[key] * 0.1;
    console.log(str);
  }
}
