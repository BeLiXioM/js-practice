const book = {
  title: "Основы JavaScript",
  price: 800,
  pages: 300
};

const { title, pages} = book;
console.log({title, pages});
console.log(title);
console.log(pages);

const { author = "Неизвестен" } = book;

const settings = {
  theme: "dark"
};

// const {theme} = settings;
// const {language = "ru"} = settings;

//upd  spread
const { theme, language = "ru" } = settings;
console.log(theme);
console.log(language);

const { title: bookTitle} = book;
console.log(bookTitle);

const coordinates = [55.75, 37.62];
const [ latitude, longitude] = coordinates;
console.log(latitude, longitude);

// function getBookSummary(book){
//     const { title, price} = book;
//     return `${title} — ${price} ₽`;
// }

// upd
function getBookSummary({ title, price }) {
  return `${title} — ${price} ₽`;
}

function getProductTotal({price, quantity = 1}) {
    return price * quantity;
}
console.log(getProductTotal({ price: 300, quantity: 4 }));
console.log(getProductTotal({ price: 300 }));

function getOrderTotal({ price: unitPrice, quantity = 1, delivery = 0 }) {
  return unitPrice * quantity + delivery;
}

// rest

const user = {
  id: 7,
  name: "Олег",
  email: "oleg@example.com",
  password: "secret"
};
const { password, ...publicUser } = user;

console.log(publicUser);

function getOtherNames(names){
    const [, ...otherNames] = names;
    return otherNames;
}

getOtherNames(["Олег", "Анна", "Иван"]);

function sumNumbers(...numbers){
    let sum = 0;
    for (const number of numbers){
        sum += number;
    }
    return sum;
}
const prices = [100, 200, 300];

console.log(sumNumbers(...prices));
