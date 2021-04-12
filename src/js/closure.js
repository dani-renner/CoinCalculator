function combo(price) {
  return function(quarters){
    return function(dimes){
      return function(nickels){
        return function(pennies){
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
      }
    }
  }
}

const quarters = combo(4.99)
const dimes = combo(4.99)(19)
const nickels = combo(4.99)(19)(2)
const pennies = combo(4.99)(19)(2)(0)

// const combo = price => {
//   let price_array = price.toString().split(".");  
//   let quarters = Math.floor((parseInt(price_array[0])*100)/25);
//   const cents = parseInt(price_array[1]);
//   quarters += Math.floor(cents / 25);
//   return quarters;
//   return function(quarters){
//     // let price_array = price.toString().split(".");  
//     // const cents = parseInt(price_array[1]);
//     let dimes = Math.floor((cents - (quarters*25)) / 10);
//     return dimes;
//     return function(dimes){
//       // let price_array = price.toString().split(".");  
//       // const cents = parseInt(price_array[1]);
//       let nickels = Math.floor((cents - ((quarters*25)+(dimes*10))) / 5);
//       return nickels;
//       return function(nickels){
//         // let price_array = price.toString().split(".");  
//         // const cents = parseInt(price_array[1]);
//         let pennies = Math.floor(cents - ((quarters*25) + (dimes*10) + (nickels*5)));
//         return pennies
//       }
//     }
//   }
// }




// function combo(price){
//   let price_array = price.toString().split(".");
//   let dollar_quarters = Math.floor((parseInt(price_array[0])*100)/25);
//   const cents = parseInt(price_array[1]);
//   let quarters = Math.floor(cents / 25);
//   let dimes = Math.floor((cents - (quarters*25)) / 10);
//   let nickels = Math.floor((cents - ((quarters*25)+(dimes*10))) / 5);
//   let pennies = Math.floor(cents - ((quarters*25) + (dimes*10) + (nickels*5)));

//   const coins_array = [(quarters + dollar_quarters), dimes, nickels, pennies];
//   console.log(coins_array);
//   return coins_array;
// }
