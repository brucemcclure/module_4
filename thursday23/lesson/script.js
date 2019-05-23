document.write("Mr Pickles the corgi")

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 0);

// console.log(3);

function wait(ms) {
    let start = Date.now();
    let now = start;

    while(now - start < ms) {
        now = Date.now();
    }
}

document.getElementById("button").addEventListener("click", () => {
    setTimeout(() => {
    wait(5000);
    alert("Ran!");
}, 0);
})


wait(3000);
console.log("Finished");


