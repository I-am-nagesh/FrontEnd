
//using array literal
let name = ["nagesh", "sobik", "aman", "ankit"]
console.log(name);

//using javascript newkeyword
let currency = new Array(3);
currency[0] = "Rupees"
currency[1] = "Dollar"
currency[2] = "Yen"
console.log(currency);

let number = new Array(10, 20, 30, 40)
console.log(number);

let undefined = new Array(5);  //undefined array
console.log(undefined);

//array to string
console.log(name.toString());

//loop through array
for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//Array.forEach()---fun to print element of array
name.forEach(myfunc);
function myfunc(element){
    console.log(element)
}
