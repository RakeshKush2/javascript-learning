let string = "Rakesh        Kushwaha       test      functionality";
let result = "";
let count = 0;
let convertArray = string.split(/\s+/);
// console.log(convertArray);

for( var i =0; i< convertArray.length; i++)
{
    if(i === 0){
    result += (convertArray[i][0].toLowerCase() + convertArray[i].slice(1));
    result = result.slice(0, -1) + result.slice(-1).toLowerCase();
    }else{
     result += (convertArray[i][0].toUpperCase() + convertArray[i].slice(1));   
    }
   
}
 console.log(result);

 ///withou build in method
 let stringName = "rakeshkushwaha   devndranagar        panna";
function stringManuplate(stringName){
    var result = "";
    var count  = 0;
    var word   = stringName.split(" ");
    for(var i = 0; i< word.length; i++){
        if(word[i] === "")continue;
        let currentWord = "";
        // Convert last character to uppercase
        for (let j = 0; j < word[i].length; j++) {
            if (j === word[i].length - 1) {
                currentWord += word[i][j].toUpperCase();
            } else {
                currentWord += word[i][j];
            }
        }
        if (i === word.length - 1) {
            result += currentWord;
        } else {
            result += currentWord + " ";
        }
    }
    console.log(result);
}
stringManuplate(stringName);