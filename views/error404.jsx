const React = require("react");
const Def = require("./default");

function error404 () {
  
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }

module.exports = error404;


// Make a function called index and fill it with some stub HTML.
// Export the index function.
// If you forgot how to do these steps, refer to the directions 
// you followed for the 404 page or the home page.