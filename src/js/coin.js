function combo(price){
  let price_array = price.toString().split(".");
  let dollar_quarters = Math.floor((parseInt(price_array[0])*100)/25);
  const cents = parseInt(price_array[1]);
  let quarters = Math.floor(cents / 25);
  let dimes = Math.floor((cents - (quarters*25)) / 10);
  let nickels = Math.floor((cents - ((quarters*25)+(dimes*10))) / 5);
  let pennies = Math.floor(cents - ((quarters*25) + (dimes*10) + (nickels*5)));

  const coins_array = [(quarters + dollar_quarters), dimes, nickels, pennies];
  console.log(coins_array);
  return coins_array;
}

function coins_string(coins_array) {
  let counter = 0;
  let total_change_array = [];
    coins_array.forEach(function(coin) {
      if (coin > 0 && counter == 0) {
        total_change_array.push(`${coin} quarter(s)`);
      }
      else if (coin > 0 && counter == 1) {
        total_change_array.push(`${coin} dime(s)`);
      }
      else if (coin > 0 && counter == 2) {
        total_change_array.push(`${coin} nickel(s)`);
      }
      else if (coin > 0 && counter == 3) {
      total_change_array.push(`${coin} penny(s)`);
      }
      counter += 1;
    })
  console.log(total_change_array.join(", "));

  return total_change_array.join(", ");
}

// combo(4.99);
coins_string(combo(4.99));