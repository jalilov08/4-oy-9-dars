// let user = {
//     name: "Jeki",
//     surname: "Chan",
//     phone: [
//        "+991911234567"
//     ],
//     parent: {
//         dad: "Tom",
//         mom: "Lili"
//     },
//     about() {
//       console.log(this.parent);
//     },
// }

// user.about();

// for (const key in user) {
//     console.log(key);
// } 

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));6

// let users = [
//     {
//         name: "John",
//         age: 45
//     },

//     {
//         name: "John",
//         age: 55
//     },

//     {
//         name: "John",
//         age: 88
//     }
// ];

// let sum = 0;
// for (let element of users) {
//     sum += element.age;
// };

// console.log(sum);

// function User (name,  age, surname, number, location) {
//     this.name = name;
//     this.age = age;
//     this.surname = surname;
//     this.number = number;
//     this.location = location;
// };

// let John = new User("John", 17, "See", "+998912653254", "USA")
// console.log(John);

// function User (name,  age, surname, number, location) {
//     this.name = name;
//     this.age = age;
//     this.surname = surname;
//     this.number = number;
//     this.location = location;
// };

// Vazifa
/** 1-misol
 let arr = [
    {
      name: "John",
      age: 34,
    },
    {
        name: "Adam",
        age: 15,
    },
    {
        name: "Doe",
        age: 21,
    }, 
    {
        name: "Alex",
        age: 76,
    }  
];    
let sum = 1;
for (let i = 0; i < arr.length; i++) {
  sum = sum * arr[i].age;
}
console.log(sum);
 */

/** 2-misol
  let arr = [
    {
      name: "John",
      age: 34,
    },
    {
        name: "Adam",
        age: 15,
    },
    {
        name: "Doe",
        age: 21,
    }, 
    {
        name: "Alex",
        age: 76,
    }  
];    
for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 25) {
        console.log(arr[i].age);
    };
}
 */

/** 3-misol
  let arr = [
    {
      name: "John",
      age: 34,
    },
    {
        name: "Adam",
        age: 15,
    },
    {
        name: "Doe",
        age: 21,
    }, 
    {
        name: "Alex",
        age: 76,
    }  
];    
let sum = 0;
for (let element of arr) {
    sum += element.age;
};
console.log(sum / 4);
 */

/** 4-misol
   let arr = [
    {
      name: "John",
      age: 34,
    },
    {
        name: "Adam",
        age: 15,
    },
    {
        name: "Doe",
        age: 21,
    }, 
    {
        name: "Alex",
        age: 76,
    }  
];   
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].age > sum.age) {
      sum = arr[i];
    }
  }
  console.log(sum);
*/  

let arr = [
    {
      name: "John",
      age: 34,
    },
    {
        name: "Adam",
        age: 15,
    },
    {
        name: "Doe",
        age: 21,
    }, 
    {
        name: "Alex",
        age: 76,
    }  
];   
let sum = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i].age < sum.age) {
    sum = arr[i];
  }
}

console.log(sum);