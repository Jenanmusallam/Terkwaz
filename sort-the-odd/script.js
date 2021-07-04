const One = document.querySelector('.one');
const Two = document.querySelector('.two');
const Three = document.querySelector('.three');
const oddFun = (array) => {
    // filter all array and ordering number of odd
    const numberOdd = array.filter((a) => a % 2).sort((a, b) => a - b);
    let newArray = [];
    array.forEach(val => {
        if (val % 2)
            newArray.push(` ` + numberOdd.shift());
        else
            newArray.push(` ` + val);
    })
    return newArray;
}
One.textContent = oddFun([5, 8, 6, 3, 4]);  //[3, 8, 6, 5, 4]
Two.textContent = oddFun([7, 1]);  //[1, 7]
Three.textContent = oddFun([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);  //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]



