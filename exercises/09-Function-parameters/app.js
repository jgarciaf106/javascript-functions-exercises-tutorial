// Your code goes here:
function renderPerson (name, dateOfBirth, eyeColor, age, gender){
    let outputStr = name + " is a " + age + " years old " + gender + " born on " + dateOfBirth + " with " + eyeColor + " eyes";
    return outputStr;
}


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));