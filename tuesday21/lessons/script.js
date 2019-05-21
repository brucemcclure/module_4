console.log("Mr pickles the corgi");

function parentFunc(a) {
    let b = 1;

    function nestedFunc(a, b) {
        return a + b;
    }
    return nestedFunc(a, b);
}