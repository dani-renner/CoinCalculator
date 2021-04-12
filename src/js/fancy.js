const combo = (price, coinsArray = [0,0,0,0], counter = 0) => {
  // if(price === 0 || counter > 20) {
  //   console.log(coinsArray);
  //   console.log(counter);
  //   return coinsArray;
  // }
  if (Math.floor(price * 100 / 25) > 0){
    coinsArray[0] = Math.floor(price * 100 / 25);
    console.log(Math.floor(price * 100 / 25));
    console.log((price - ((coinsArray[0] * 25)/100)).toFixed(2));
    return combo((price - ((coinsArray[0] * 25)/100)), coinsArray, counter ++);
  }
  else if (Math.floor(price * 100 / 10) > 0) {
    coinsArray[1] = Math.floor(price * 100 / 10);
    return combo((price - ((coinsArray[1] * 10)/100)), coinsArray, counter ++);
  }
  else if (Math.floor(price * 100 / 5) > 0) {
    coinsArray[2] = Math.floor(price * 100 / 5);
    return combo((price - ((coinsArray[2] * 5)/100)), coinsArray, counter ++);
  }
  else {
    coinsArray[3] = Math.floor(price * 100);
    console.log(coinsArray);
    return coinsArray;
  }
};

combo(4.99);
