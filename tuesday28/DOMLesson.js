

let newDiv = document.createElement("div");
newDiv.innerHTML = "This is my new div.";
document.body.appendChild(newDiv);

document.write("<h1>hello there</h1>");

////////////////////////
/// Getting elements
/// grabs the "first" ul element
document.querySelector("ul");
/// grabs the first element matching the "id" 
document.querySelector("#my-element-with-id");
/// grabs the first element matching the "class"
document.querySelector(".my-class-element");

/// grabs all elements matching "li" tag
document.querySelectorAll("li");
/// grabs the all elements matching the "id" 
document.querySelector("#my-element-with-id");
/// grabs the all elements matching the "class"
document.querySelector(".my-class-element");

/// Can change the search by chaining classes and elemnet ids
document.querySelectorAll("li.class-name");

/// multiple elements
document.querySelector("ul, p");

/// Alternative to query selectors.
document.getElementById("page-form");
document.getElementsByClassName("odd");
document.getElementsByTagName("p");

//////////////////////
/// Deleting elements
/// Delete child element
// Delete first "li" from the "ul"
document.querySelector("ul").removeChild("li");
// Deletes the first "li" of "ul" without referencing parent first.
document.querySelector("li").parentNode.removeChild("li");

// Delete an element with a reference to itself
document.querySelector("li").remove();


//////////////////////
/// Manipulating attributes
// adds specified class name
document.querySelector("h1").classList.add("my-class-name");
// removes specified class
document.querySelector("h1").classList.remove("my-class-name");
// toggles a class
document.querySelector("h1").classList.toggle("my-class-name");


/////////////////////
/// Attribute selector
// gettign an element by attribute
document.querySelector("input[type='submit']");
// change the vlue of an element
document.querySelector("input[type='submit']").nodeValue("new button text");



// Changing multiple at a time
// 
Object.assign(document.querySelector("input[type='submit']"), {
    id: "my-button",
    value: "new value"
});


////////////////////////
// changing styling examples
// grabs the first h1 element and changes the styling 
document.querySelector("h1").style.paddingLeft = "100px";


///////////////////
// get all computed styles of an element
// returns the value assigned to the specified tag, class or id.
window.getComputedStyle("h1").getPropertyValue("color");



/////////////////////
// Event listeners
// add an event listener to specified element.
document.querySelector("h1").addEventListener("mouseover", (event) => {
    document.querySelector("h1").style.color = "blue";
    document.querySelector("h1").classList.toggle("styling-class-name");
});

document.querySelector("input[type='submit']").addEventListener("click",function  buttonClick(event){
    // prevents the default behavior of the element 
    // in this example the 'submit' type of input reloads the page by default
    // we are disabling this behavior
    event.preventDefault();
    // returns the traget of the event.
    event.target();
    // can access attributes of the target of the event.
    event.target.style.color("red");
    console.log("i have been clicked.");
})

//////
// delete an event listener
document.querySelector("input[type='submit']").removeEventListener(buttonClick);

