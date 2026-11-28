"use strict";

const user = {
  name: "Олег",
  sayHello() {
    return `Привет, ${this.name}!`;
  }
};

console.log(user.sayHello());

const anotherUser = {
  name: "Анна",
  sayHello: user.sayHello
};

console.log(anotherUser.sayHello());

const product = {
    name: "Мышь",
    price: 1200,
    quantity: 3,
    increaseQuantity(){
      this.quantity = this.quantity + 1;
    },
    decreaseQuantity(){
        if(this.quantity > 1){
            this.quantity = this.quantity - 1;
        }
    },
    getTotal(){
        return this.price * this.quantity;
    },
}

product.quantity = 2;
product.decreaseQuantity();
product.decreaseQuantity();

console.log(product.quantity);
console.log(product.getTotal());

const anotherProduct = {
  name: "Коврик",
  price: 700,
  quantity: 2,
  getTotal: product.getTotal
};

const boundGetTotal = product.getTotal.bind(product);
console.log(boundGetTotal());

product.quantity = 2;
console.log(boundGetTotal());

product.quantity = 5;
console.log(boundGetTotal());

const boundIncrease = product.increaseQuantity.bind(product);
boundIncrease();
console.log(product.quantity);

const account = {
  name: "Олег",
  getGreeting() {
    const greet = () => `Привет, ${this.name}!`;
    return greet();
  }
};

console.log(account.getGreeting());

const counter = {
    value: 0,
    createIncrementer(){
        const result = () => this.value = this.value + 1;
        return result;
    }
}

const increment = counter.createIncrementer();
console.log(increment());   
console.log(increment());   
console.log(counter.value);


function createWallet(initialBalance) {
  return {
    balance: initialBalance,

    createPayment() {
      return (amount) => {
        if (amount > this.balance) {
          return "Недостаточно средств";
        }

        return this.balance -= amount;
      
      };
    }
  };
}

const firstWallet = createWallet(1000);
const secondWallet = createWallet(500);

const payFirst = firstWallet.createPayment();
const paySecond = secondWallet.createPayment();

console.log(payFirst(300)); 
console.log(paySecond(100));       
console.log(firstWallet.balance);  
console.log(secondWallet.balance); 