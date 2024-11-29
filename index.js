// task 1

const myArray = [1, "Hello", true, null, { key: "value" }, [1, 2, 3]];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// task 2

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

numbers.forEach((num) => {
  if (isPrime(num)) {
    console.log(num);
  }
});

// task 3

const array10 = [1, 2, 3];
const array20 = [4, 5, 6];

const combinedArray = [...array10, ...array20];

console.log(combinedArray);

// task 4

const array = [6, 5, 4];

const reversedArray = array.reverse();

console.log(reversedArray); // [4, 5, 6]

// task 5

const array2 = [1, 2, 3];

array2.push(4, 5, 6);

console.log(array2); // [1, 2, 3, 4, 5, 6]

// task 6

const array3 = [7, 8, 9];

array3.unshift(1, 2, 3);

console.log(array3); // [1, 2, 3, 7, 8, 9]

// task 7

const array4 = ["aaa", "bbb", "ccc"];

const firstElement = array4.shift();

console.log(firstElement); // 'aaa'

console.log(array4); // ['bbb', 'ccc']

// task 8

const array5 = ["aaa", "bbb", "ccc"];

const lastElement = array5.pop();

console.log(lastElement); // 'ccc'

console.log(array5); // ['aaa', 'bbb']

// task 9

const array6 = [9, 10, 11, 12, 13];

const newArray = array6.slice(1, 5);

console.log(newArray); // [10, 11, 12, 13]

// task 10

const array7 = [1, 2, 3, 4, 5];

array7.splice(1, 2);

console.log(array7); // [1, 4, 5]

// task 11

const array8 = [1, 2, 3, 4, 5];

const newArray1 = array8.slice(2);

console.log(newArray1); // [3, 4, 5]

// task 12

let array9 = [1, 2, 3, 4, 5];

array.splice(1, 0, "w", "trtr");
console.log(array9);

array9.splice(6, 0, "vvv", "a", "hello");
console.log(array9);
