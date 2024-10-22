// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        // console.log("Got data from Lambda", response);
        // console.log(response.data.topics);
        const topicArr = response.data.topics;
        // console.log("Topics array", topicArr);

        const topicsAnchor = document.querySelector(".topics");

        topicArr.forEach(item => {
            const newTab = document.createElement("div");   // define new elements
            newTab.classList.add("tab");                    // set class names
            newTab.textContent = item;                      // set text content
            // console.log(newTab);
            topicsAnchor.appendChild(newTab);               // setup structure of elements
        })
    })
    .catch(err => {
        console.log("Got error from Lambda", err);
    })