const numberDup = document.querySelector('.number-duplicate').textContent = "Number of Duplicates";
const myArray = [1, 1, 2, 3, 5, 5, 5, "jenan", "jenan"];  //1=>2   3=>1  5=>3  jenan =>2
const numberOfDuplicate = myArray => {
    const myObject = {};
    myArray.forEach((value) => {
        myObject[value] = 0;
        const x = value;
        let count = 0;
        myArray.forEach((valueNew) => {
            if (valueNew == x) {
                count++;
            }
        });
        myObject[value] = count;
    })
    document.querySelector('.number').textContent = [myArray];
    document.querySelector('.numberObject').textContent = JSON.stringify(myObject);
}
numberOfDuplicate(myArray);
