(function(exports) {
  function GetHeadlines() {
    function render(searchQuery) {
      base = "https://content.guardianapis.com/search?api-key=test&show-fields=trailText,thumbnail"
      url = base + searchQuery
      var request = new Request(url, {})
      fetch(request).then(response => response.json())
      .then((data) => {
        displayHeadlines(data.response.results)
      })

    var items = results.map((index, addImage, addTitle) => {
      results.addImage(index, i)
      results.addTitle(index, i)
      return results().render(items);
    })
    return `
      <div class="container">
        <ul id="searchQuery">${items}
        </ul>
      </div>
    `
  }
    return {
      render: render
    }
  }
  exports.GetHeadlines = GetHeadlines
})(this)
