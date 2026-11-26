function createGreeting(name) {
  function greet() {
    return `Привет, ${name}!`;
  }

  return greet;
}

const greetOleg = createGreeting("Олег");

console.log(typeof greetOleg);
console.log(greetOleg());

function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5));

const triple = createMultiplier(3);

console.log(triple(4));
console.log(double(4));

function createDiscountCalculator(percent){
    return function(price){
        return price - (price * (percent / 100));
    }

}

const applyTenPercent = createDiscountCalculator(10);
console.log(applyTenPercent(1000)); 

const anotherCounter = createCounter();


function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(anotherCounter());
console.log(counter());

function createStepCounter(start, step){

    return function(){
        start += step;
        return start;
    };
}

const counterByFive = createStepCounter(10, 5);
console.log(counterByFive());
console.log(counterByFive());