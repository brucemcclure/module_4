document.write("Mr Pickles the corgi")

document.getElementById("button").addEventListener("click", () => {
    wait(5000);
    alert("Ran!");
});


// function wait(ms) {
    // let start = Date.now();
    // let now = start;
// 
    // while(now - start < ms) {
        // now = Date.now();
    // }
// }
// 
// wait(3000);
// console.log("Finished");