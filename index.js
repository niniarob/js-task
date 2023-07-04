
// you have a function that receive string as a argument and if there is any "a" replace it to"A" and return the whole string:

  function replace(string) {
    let item = "";
    for(let i = 0; i < string.length; i++){
        if(string[i].includes("a") ) {
           item = item + "A"
        } else {
           item = item + string[i]
        }
    }
    return item;
  };
  console.log(replace("laila"));


  function item(string) {
    return string.replace(/p/g, 'P');
  }

  console.log(item("papuna")); 


// //   make a function that recieve two argument hours and minutes, if both of them are valid console working well, otherwise console clock does not working:

  function clock(minutes, hours) {
    if (
      typeof hours === "number" && typeof minutes === "number" &&
      hours % 1 === 0 && minutes % 1 === 0 &&
      hours >= 0 && hours <= 24 &&
      minutes >= 0 && minutes <= 60
    ) {
      return "is working.";
    } else {
      return "is not working.";
    }
  }

  console.log(clock(12, 12));


// make a factorial function:

  function factorial(x) {
    if (x < 0) {
      return NaN;
    }
    let num = 1;
    for (let i = 1; i <= x; i++) {
      num = num * i;
    }
    return num;
  }

  console.log(factorial(4)); 


//   you have a function that receive two arguments,
//  first is amount of nomey and second is price of Donat, 
// you calculate how many is Donat you can buy for this money, 
// if you cant buy at leat 1 Donat console "No Money, No Honey":

function calculateDonat (money, Donat){
    if (money > Donat){
        return money / Donat
    } else {
        console.log("no money,no honey")
    }
};
console.log(calculateDonat(20,5));
