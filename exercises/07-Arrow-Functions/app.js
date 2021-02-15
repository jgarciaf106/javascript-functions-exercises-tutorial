const rapid = (inputStr) =>{
    let outputStr = "";
    for(let char of inputStr.toLowerCase()){
        if(char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u"){
            outputStr = outputStr + char.toUpperCase();
        }
    }
    return outputStr;
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));