//Push and Pop
let array = [];
array.push(1);
array.push(2);
array.push(3);

array .pop();

console.log(array);

//Output is [1,2]

//Shift and Unshift

let arr = ["r","s","t"];
arr.shift();
arr.unshift("u");
console.log(arr);

//output will be ["u","s","t"]

//Slice

let arr1 = [1,2,3,4,5];

let newarray = arr1.slice(1,4);

console.log(newarray);

//output will be [2,3,4]

//splice

let arr2 = ["Red","green","blue","yellow"];
arr2.splice(2,1,"Purple","Orange");
console.log(arr2);

//output will be ["Red","Purple","Orange","Yellow"]

//object creation

let car = {
    maker:"Mahindra",
    model:"Thar",
    year:2023
};

console.log(car);

//output is {maker:'Mahindra',model:'Thar',year:2023}

//Property Deletion

delete car.year;
console.log(car);

//output is {maker:'Mahindra',model:'Thar'}

let Person = {
    name:"Naga Rohith Reddy",
    age:21,
    address:{
        street:"Sarath Defence colony",
        city: "Patancheru",
        Zipcode:"502300"
    }
};

console.log(Person);

/*output is {
  name: 'Naga Rohith Reddy',
  age: 21,
  address: {
    street: 'Sarath Defence colony',
    city: 'Patancheru',
    Zipcode: '502300'
  }
}
*/

//Accessing Object properties

console.log(Person.address.city);

//Output Patancheru

//Arrow Functions

greet = (name) => `Hello,${name}!`;
console.log(greet("Rohith"));

//output is Hello,Rohith!