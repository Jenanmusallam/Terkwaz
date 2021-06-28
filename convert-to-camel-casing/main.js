const convertBtn = document.getElementById('convert-btn');

// Convert variables names from
const convertVrabel = () => {
  const myArray = document.getElementById("convertVrb").value;
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
convertBtn.addEventListener('click', convertVrabel);