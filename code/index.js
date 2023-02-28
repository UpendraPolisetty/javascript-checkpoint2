let user = { name: 'Arya Stark' };

// Your code goes here

let newArr = {...user};
console.log(newArr);
console.log(Object.assign(user));

let arr = ['a', 'b', 'c'];
let charArr = [...arr]
console.log(charArr);
console.log(Object.assign(arr));

let colors = [
    { name: 'red' },
    { name: 'gray' },
    { name: 'tomato' },
  ];

  let colorsArr = [...colors]
  console.log(colorsArr);
  console.log(Object.assign(colors));

  //3 Is the variable named clone a deep clone of the variable arr in the code given below. 
  //If yes check by doing console.log(arr[2] === clone[2]) and explaing why it's not a deep clone.
  // Create another variable named anotherClone and store the deep clone of arr
let arrNum = [1, 2, [3]];
let clone = [...arr];

console.log(arrNum[2] === clone[2]);

// Your code goes here

let anotherClone = JSON.parse(JSON.stringify(arrNum))
console.log(anotherClone);




//Array has a method named reverse which can be used to reverse the elements of array.
// Create a function named reverse that accepts an array and returns a new array with reversed elements. 
//You can't use the reverse method. (Make sure to return a new array)

// For Example:

//['Hello', 'World'] will become {0: "Hello", 1: "World"}

let array = ['hello' , 'world']

// Your code goes

function reverese(arr){
    let final = []
    for(let i = arr.length; i >= 0 ; i--){
     final.push(arr[i])
    }
    return final;
    }

console.log(reverese(array))

//Deep Clone the object given below using spread (...) operator also write multiple test to check if the object is deep cloned or not.

let info = [
    {
      employee: 'Nicole',
      total: 13,
      lineItems: {
        elements: [
          {
            name: 'Burger',
            price: 8,
          },
          {
            name: 'Lamb',
            price: 6.5,
          },
        ],
      },
    },
    {
      employee: 'Dan',
      total: 11,
      lineItems: {
        elements: [
          {
            name: 'Lamb',
            price: 4.5,
          },
          {
            name: 'Meatballs',
            price: 6.5,
          },
        ],
      },
    },
  ];

  let cloneInfo = [
    {
        ...info[0],
        lineItems : {
            elements : [
                {
                    ...info[0].lineItems.elements[0]
                },
                {
                    ...info[0].lineItems.elements[1]
                }
            ]
        }
    },
    {
        ...info[1],
        lineItems : {
            elements : [
                {
                    ...info[1].lineItems.elements[0]
                },
                {
                    ...info[1].lineItems.elements[1]
                }
            ]
        }
    }
  ]
console.log(cloneInfo);
  let newInfo = JSON.parse(JSON.stringify(info))

  console.log(newInfo);