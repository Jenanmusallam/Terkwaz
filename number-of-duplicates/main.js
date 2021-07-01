const numberDup = document.querySelector('.number-duplicate').textContent = "Number of Duplicates";
const scores = [1, 1, 2, 3, 5, 5, 5, "jenan", "jenan"];  //1=>2   3=>1  5=>3  jenan =>2

const countOccurrences = (arr, val) => {
    return arr.reduce((acc, elem) => {
        return (val === elem ? acc + 1 : acc)
    }, 0);
}
// only using one number seach
console.log(countOccurrences(scores, 1));




// // old
// const numberDup = document.querySelector('.number-duplicate').textContent = "Number of Duplicates";
// const myArray = [99, 1, 2, 3, 5, 5, 5, "jenan", "jenan"];  //1=>2   3=>1  5=>3  jenan =>2
// const numberOfDuplicate = myArray => {
//     const myObject = {};
//     myArray[2]; // 1 * x
//        myArray.forEach((value) => { // n * x , x = execution time
//         myObject[value] = 0;
//         let count = 0;
//         myArray.forEach((valueNew) => {
//             if (valueNew == value) {
//                 count++;
//             }
//         });
//         myObject[value] = count;
//     })
//     // o(1) - big O => O(n2) = 10 * 10 * 1 = 100
//     document.querySelector('.number').textContent = [myArray];
//     document.querySelector('.numberObject').textContent = JSON.stringify(myObject);
// }
