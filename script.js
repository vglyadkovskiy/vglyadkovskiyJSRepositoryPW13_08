"use strict";

function format(s, ...v) {


   let str = "";
   str += s[s.length-1];
   for (let i = v.length - 1; i >= 0; i--) {
      str += v[i];
      str += s[i];
   }

   /*
  let str = "";
  for(let i=0; i<v.length; i++) {
    str += s[i];
    str += v[i];
  }

  // последний кусок строки
  str += s[s.length-1];

  str.split("").reverse().join("");
   */
  return str;  
   
   
}

let res1 = format`${1} + ${2} = ${3}`; // 3 = 2 + 1
console.log(res1);
let res2 = format`Привет ${"Мир "}`; // "Мир Привет"
console.log(res2);
let res3 = format`left${"<->"}right`; // "right<->left"
console.log(res3);

/*
Задание №8. Строки
Напишите функцию шаблонизации format(), которая выводит строку в обратном порядке.
Примеры использования функции format():
function format(s, ...v) {
   // Ваш код
}
let res1 = format`${1} + ${2} = ${3}`; // 3 = 2 + 1
console.log(res1);
let res2 = format`Привет ${"Мир "}`; // "Мир Привет"
console.log(res2);
let res3 = format`left${"<->"}right`; // "right<->left"
console.log(res3);

*/