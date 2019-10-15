// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleAnchor = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        // console.log("Got data from Lambda", response);
        // console.log(response.data.articles);

        // const category = response.data.articles;
        // console.log(category);

        // console.log(Object.entries(response.data.articles));

        let info = Object.entries(response.data.articles);

        // console.log("1", info);          // all categories and articles
        // console.log("2", info[0]);       // 1 category (key) and its articles (values)
        // console.log("3", info[0][0]);    // 1 category name (key & value 0)
        // console.log("4", info[0][1]);    // all articles from 1 category (values)
        // console.log("5", info[0][1][0]); // 1 article from 1 category
        // console.log("6", info[0][1][0]["authorName"]);
        // console.log("7", info[0][1][0]["authorPhoto"]);
        // console.log("8", info[0][1][0]["headline"]);

        // pseudo: for each category, for each article, get name/photo/headline
        // categories: info[category][category(0) article(1)][article]

        let numCategories = info.length; // number of categories
        // console.log("Number of categories ", numCategories);

        let categoryCount;
        for (categoryCount = 0; categoryCount < numCategories; categoryCount++) {
            // console.log(info[categoryCount][0]);
            let category = (info[categoryCount][0]);
            // console.log("Category: ", category);
            
            // console.log(info[categoryCount][1].length); // number of articles per category
            let numArticles = (info[categoryCount][1].length);
            // console.log("Number of articles", numArticles);

            let articleCount;
            for (articleCount = 0; articleCount < numArticles; articleCount++) {
                // console.log(info[0][categoryCount][articleCount])
                // console.log(info[categoryCount][1][articleCount]["authorName"])
                
                let articleData = (info[categoryCount][1][articleCount]);
                // console.log(article["authorName"]);
                // console.log(article["authorPhoto"]);
                // console.log(article["headline"]);

                const authorName = (articleData["authorName"]);
                const authorPhoto = (articleData["authorPhoto"]);
                const headline = (articleData["headline"]);
                // console.log(authorName);
                // console.log(authorPhoto);
                // console.log(headline);

                const article = publisher(authorName, authorPhoto, headline);
                articleAnchor.appendChild(article);

            } // for articleCount
        } // for categoryCount

        
    }) // .then
    .catch(err => {
        console.log("Got error from Lambda", err);
    })


    function publisher(name, photo, title) {
        // define new elements
        const card = document.createElement("div"); // container
        const headline = document.createElement("div"); // text
        const author = document.createElement("div"); // container
        const imgContainer = document.createElement("div"); //container
        const imgSrc = document.createElement("img"); // URL
        const writer = document.createElement("span"); // text
    
        // setup structure of elements
        card.appendChild(headline);
        card.appendChild(author);
            author.appendChild(imgContainer);
                imgContainer.appendChild(imgSrc);
            imgContainer.appendChild(writer);

        // set class names (from HTML)
        card.classList.add("card");
        headline.classList.add("headline");
        author.classList.add("author");
        imgContainer.classList.add("img-container");

        //set text
        headline.textContent = title;
        writer.textContent = name;
        imgSrc.src = photo;

        return card;
    }