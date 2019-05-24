/*
    filter(Array, Function)
    
    Iterates over elements from array, returning a new array of all elements that the callback function returns truthy for.
    The callback function is invoked with two arguments: (value, index).

    let numbers = [1,2,3,4,5,6];
    let newNumbers = filter(numbers, function(value, index) {
        return value % 2 === 0;
    });

    console.log(numbers);
    => [1,2,3,4,5,6]

    console.log(newNumbers)
    => [2,4,6]
*/



let numbers = [1,2,3,4,5,6];

filter = function(array, callback){
    let newArr = [];



    for (i = 0 ; i < array.length ; i ++){
        //console.log(i);

        if (callback(array[i], i)) {
            newArr.push(array[i]);
        }    
    }
    return newArr;
}



let newNumbers = filter(numbers, function(value, index) {
    return value % 2 === 0;
});




console.log(numbers);

console.log(newNumbers)
