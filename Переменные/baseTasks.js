/*
Базовый уровень
Задание 1: Что будет в консоли? Почему?
*/
let a = 5; // Объявление и присваивание переменной а
let b = a; // Объявление переменной b, присваиваем ей такое же значение а = 5 => b = 5
a = 10; // присваиваем переменной а новое значение a = 10 => но b остается так же b = 5
console.log(
  `Переменная а = ${a}\nПеременная b = ${b}\nВсе дело в том, что a и b - примитивные типы данных, они не хранят ссылки на объекты, а непосредственно хранят значения`
);

/*
Задание 2: Примитивы или ссылочные типы?
Укажи, какие типы являются примитивными, а какие — ссылочными:

42 - примитив

"hello" - примитив

true - примитив

null - примитв, хотя в JS считается объектом, но это баг

undefined - примитив

[1, 2, 3] - ссылочный тип данных

{ name: "Alice" } - ссылочный тип данных
Так же я бы добавил функции, это тоже ссылочный тип
*/

/*
Задание 3: Что выведет код?
Объясни, почему obj1.message изменился.
*/
const obj1 = { message: "Привет" }; // ссылочный тип
const obj2 = obj1; // тут obj2 и obj1 будут ссылаться на один и тот же объект в памяти
obj2.message = "Пока"; // так же изменится и obj2
console.log("Резульат будет Пока... ", obj1.message);

/*
Средний уровень
Задание 4: Сравнение объектов
Почему результат false, несмотря на одинаковое содержимое?
*/
const user1 = { name: "Bob" };
const user2 = { name: "Bob" };
console.log(user1 === user2); // Мы сравниваем ссылки на объекты, это строгое сравнение, а ссылки всегда разные, поэтому false

/*
 Задание 5: Копия или ссылка?
 Как избежать этой ситуации, если нужно независимую копию?
*/
const original = { count: 1 };
let copy = original;
copy.count = 5;
console.log(original.count); // 5
// Для отдельной работы с copy нужно создать поверхностную копию объекта
copy = { ...original };
copy.count = 10;
console.log(original.count, +"\n" + copy.count); // 5 10

/*
Задание 6: Поведение примитивов
Почему str2 не изменился?
*/
let str1 = "Hello";
let str2 = str1;
str1 = "Hi";
console.log(str2, str1); // str2 не изменился потому что в примитивах переменная явно указвает на значение, которое мы задали, оно независимо

/*
Продвинутый уровень
Задание 7: Поверхностная копия
Сделай копию объекта car, не меняя оригинал:
После этого измени carCopy.engine.power = 200. Изменится ли оригинал?
*/
const car = {
  brand: "Toyota",
  zap: [1, 2, 3, 4, 5],
  engine: {
    power: 120,
  },
};
const copyCar = { ...car }; // Создал поверхностную копию
copyCar.engine.power = 200; // изменится во всех объектах т.к. поверхностная копию не работает на вложенных объектах, тут понадобится глубокая копия
copyCar.spoyler = true;
console.log(car, copyCar);

/*
Задание 8: Глубокая копия
Напиши функцию deepClone(obj), которая создаёт полную (глубокую) копию объекта. Протестируй с вложенными объектами.
*/
/*
Способы сделать глубокую копию объекта:
*/
// JSON - подход не копирует функции и теряет undefined Date Map Set Symbol и др.
let deepCopyJSON = JSON.parse(JSON.stringify(car));
deepCopyJSON.engine.power = 500;
deepCopyJSON.transmission = "auotmat";
console.log(deepCopyJSON);

// structuredClone() - встроенный способ (ES2021+) поддерживает вложенные структуры Date Map Set ArrayBuffer TypeArray и т.д. Не клонирует функции DOM-элементы WeakMap WeakSet
let deepCopy1 = structuredClone(car);
console.log(deepCopy1);

// С помощью библиотеки Lodash: Надёжный способ для сложных структур Поддержка массивов, вложенности, даты и т.п.
import cloneDeep from "lodash/cloneDeep.js";
const deepCopyLodash = cloneDeep(car);
console.log(deepCopyLodash);

// Рекурсивная ручная копия
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj; // Если передаваемый параметр является пустым числом или не является объектом, возвращаем этот параметр

  if (Array.isArray(obj)) {
    return obj.map((i) => deepClone(i)); // Проверка на массив, если параметр это массив, с помощью map для каждого элемента вызываем рекурсию, и возвращаем примитив, по итогу вернется массив
  }

  const copy = {}; // пустой объект
  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}
const childs = {
  name: "Alice",
  hobbies: ["прогулка", "велик", "игра в прятки"],
  tasks: ["Помыть пол", "Вымыть посуду"],
  data: {
    height: 170,
    weight: 30,
    shoesSize: 36,
  },
};
const copyChilds = deepClone(childs);
console.log(copyChilds);
