// Convert variables names from
function convertVrabel() {
  let myArray = document.getElementById("convertVrb").value;
  let newArray = '';
  const indexes = [];
  for (let value of myArray) {
    if (!((value == '-') || (value == '_') || (value == ' '))) {
      // does not contain (-) and (_)
      newArray += value;
    }
    else {
      // save in index in (-) or (_) 
      indexes.push(newArray.length);
      // delete the (-) or (_) and change ''
      newArray += '';
    }
  }
  indexes.forEach((index) => {
    // using before character + upper character +  after character in the string and save in Array
    newArray = newArray.substr(0, index) + newArray[index].toUpperCase() + newArray.slice(index + 1);
  })
  console.log("inexes: ", indexes);
  document.getElementById("dataConver").innerHTML = newArray;
}
// convertVrabel("the-first-assignment"); // OutPut:theFirstAssignment
// convertVrabel("the_first_assignment"); // OutPut:theFirstAssignment