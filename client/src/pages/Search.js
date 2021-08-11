import React, { useEffect } from 'react';

function Search() {

  useEffect(() => {
    var $results = document.querySelector('.results');
    var appendToResult = $results.insertAdjacentHTML.bind($results, 'afterend');
    console.log($results);
   window.TeleportAutocomplete.init('.my-input').on('change', function(value) {
      appendToResult('<pre>' + JSON.stringify(value, null, 2) + '</pre>');
    });
   
  })

  return (
    <div>
     <h1>City Autocomplete Example</h1>
    <input type="text" className="my-input" name="field" tabIndex="1" autoComplete="off" />

    <h3>Result history:</h3>
    <div className="results"></div>
    </div>
  )
}

export default Search
