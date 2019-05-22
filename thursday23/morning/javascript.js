


/*
Create a function that takes a string as input, and returns a coded version of the string. For this to happen, replace all (lowercase and uppercase):
'a' -> 0
'e' -> 1
'i' -> 2
'o' -> 3
'u' -> 4
*/

//let strang = prompt("What would you like to translate?");

const hackerSpeak = (input) => {
    inputArray = input.split("");
    console.log(inputArray);

    for (let value of inputArray){
        switch (value) {
        case (value === "a"):
                value = "0";
        break;

        case (value === "e"):
        break;

        case (value === "i"):
        break;

        case (value === "o"):
        break;

        case (value === "u"):
        break;
        }
    }   
} 







    hackerSpeak("Ha Ha Ha");
   // h0 h0 h0
   
   // hackerSpeak("How about this string?")
   // H3w 0b34t th2s str2ng?
   
   // hackerSpeak("A bit of a challenge")
   // 0 b2t 3f 0 ch0ll1ng1?