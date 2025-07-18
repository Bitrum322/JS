// Переменные:
/*
Переменные дают повторный доступ к значениям и сохраняют значения для дальнейшего использования
Рассматривай переменную как коробку, на этой коробке может написать название, в дальнейшем мы можем посмотреть что в коробке, взять что то из коробки, достать старое и положить новое
Переменная - котейнер для значений
Название переменных должны быть понятными, иначе сложно будет понять что хранится в переменной
*/

/*
Имена переменных:
Для правильного и читабельного кода есть рекомендации для переменных:
PascalCase - для типов и классов 
DB_PASSWORD - Когда значения известны до запуска приложения, иными словами это константы
camelCase - Используй для всех остальных переменных
*/

/*
Объявление переменных:

let - актуально (Даем инструкцию интерпретатору JS)
const - актуально (Даем инструкцию интерпретатору JS)
var  - устарело 

Разница между let и const в том, что const - неизменяемая переменная, let можно переприсваивать
Когда мы только объявили переменную, у нее значение undefined - это неопределенное значение
const = 10 всегда происходит в одной строке
*/

let a; // объявление переменной
const c = 10; // Объявление и присваивание
a = true; // Только присваивание, так можно писать после объявления переменной

// console.log(z); // ошибка
let z; // объявили переменную
console.log(z); // undefined
z = true; // присвоили значение переменной z
console.log(z); // true

/*
Примитивные типы:
Переменная непосредственно в памяти содержит опеределенное значение
Переменная => имеет значение => значение имеет тип
number - число const a = 24;
string - строка const a = "abc";
boolean - логический 
null - null используется тогда, когда мы хотите сказать что на данном этапе значение отсутствует
undefined - undefined подразумевается что значения нет, не определено
symbol - уникальные значения используется редко
Ссылочный тип:
Переменная будет хранить только ссылку на обект
Используя разные переменные можно менять один объект
array [] 
object (объект)
*/
// objectA ссылается на объект в памяти
const objectA = {
  a: 10,
  b: true,
};
const copyOfA = objectA; // содержит ту же ссылку в памяти
objectA.a = 20; // изменяем объект через objectA
copyOfA.b = false; // изменяем объект через copyOfA
copyOfA.c = "abc"; // добавляем новое свойство объекту
console.log(objectA, copyOfA); // a = 20 b = false в обоих случаях, потому что переменные ссылаются на один и тот же объект
let i = 10;
let n = i; // n = 10

i = 20; // меняем значение i
console.log(`Переменная i = ${i}\nПеременная n = ${n}`); // i = 20 n = 10 т.к. n - это независимая копия

const copy = { ...objectA }; // создаем поверхностную копию объекта
copy.a = 228;
console.log(
  `${JSON.stringify(objectA)} - Это сам объект\n${JSON.stringify(
    copy
  )} -уже измененная независимая копия`
);
/*
Задачи в других js файлах
*/
