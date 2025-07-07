// Объекты
/*
В записи объекта можно использовать сокращенную запись, если название ключи и значения совпадают, если мы берем значения из внешней памяти
Сокращенную запись рекомендуется расмещать в начале объекта, так просто удобней, можно еще сортировать по длине
*/
const name = "Виталя";
const postsQty = 23;

const userProfile = {
  name, // вместо name: name
  postsQty, // вместо postsQty:postsQty
  hasSignedAgreement: false,
};
console.log(userProfile);
/*

Глобальные объекты:
window - в веб браузерах является глобальным объектом
global - node.js тоже является глобальным
globalThis - это унифицированные глобальный объект
*/

/*
Методы объекта:
Метод - это свойство объекта, значение которого - функция
*/
const myCity = {
  city: "New York",
  cityGreeting() {
    // cityGreeting: function () {...} Эквивалентно
    console.log("Greetings!!");
  },
};
myCity.cityGreeting();

/*
JSON - Javascript object notation - формат обмена данными в интернете
JSON передается в виде строки 
Как распрарсить JSON - JSON.parse(...)
JSON stringify() - перевод JS в JSON
*/
console.log(JSON.stringify(userProfile));

const user = (user, age) => ({ user, age, isActive: true });

console.log(user("SASHA", 25));

const library = {
  book: {
    setTitle(title) {
      this.title = title;
    },
    info() {
      return this.title;
    },
  },
};

library.book.setTitle("Алиса в стране чудес");
console.log(library.book.info());
