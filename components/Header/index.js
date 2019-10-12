// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // define new elements
    const header = document.createElement("div");
        const date = document.createElement("span");
        const times = document.createElement("h1");
        const temperature = document.createElement("span");

    // setup structure of elements
    header.appendChild(date);
    header.appendChild(times);
    header.appendChild(temperature);

    // set class names (from HTML)
    header.classList.add("header");
    date.classList.add("date");
    temperature.classList.add("temp");

    // set text content
    date.textContent = "March 28, 2019";
    times.textContent = "Lambda Times";
    temperature.textContent = "98°";

    return header;
}

const placeHeader = document.querySelector(".header-container");
placeHeader.appendChild(Header());