function calculateOrderTotal(price, quantity, delivery) {
 const amountProduct = price * quantity;
 const totalPrice = amountProduct + delivery;
 return totalPrice;
}

const result = calculateOrderTotal(400, 3, 200);
console.log(result);

function getRemainingBalance(balance, total){
    if (balance >= total){
        return balance - total;
    }
    else{
        return balance;
    }
}

const res = getRemainingBalance(2000, result);
console.log(res);

const orderTotal = 100;

function getDelivery(orderTotal){
    if ( orderTotal >= 2000){
        return 0;
    }
    else{
        return 250;
    }
}

const del = getDelivery(2500);
console.log(del);

function calculateCheckout(price, quantity){
    const amountProduct = price * quantity;
    const delivery = getDelivery(amountProduct);
    const result = amountProduct + delivery;
    return result;
}

function getDiscount(price) {
  if (price >= 1000) {
    return price * 0.1;
  }
  else{
    return 0
  }

}

console.log(getDiscount(1500));

function calculateFinalTotal(price, quantity){
    const amountProduct = price * quantity;
    const discount = getDiscount(amountProduct);
    const discountTotal = amountProduct - discount;
    const delivery = getDelivery(discountTotal);
    const total = delivery + discountTotal;
    return total;
}