const product = { name: "Мышь", price: 1200 };
const copy = {...product};

copy.price = 900;

console.log(product.price);
console.log(copy.price);

const products = [
  { name: "Мышь", price: 1200 }
];

const copiedProducts = products.map(product => ({ ...product }));
copiedProducts[0].price = 900;

console.log(products[0].price);
console.log(copiedProducts[0].price);

const user = {
  name: "Олег",
  settings: { theme: "light" }
};

const copiedUser = {
  ...user,
  settings: { ...user.settings }
};
copiedUser.settings.theme = "dark";

console.log(user.settings.theme);