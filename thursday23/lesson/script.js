document.write("Mr Pickles the corgi")

function adder(x,y, callback) {
    let answer = x + y;

    if (callback){
        return callback(answer);
    }
    return answer;
}

    function shoutSomething(input) {
        console.log(`${input}!!!!!`);
    }