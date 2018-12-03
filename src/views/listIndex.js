(function (exports) {
  function ListIndex() {
    function render(listHeadlines) {
      var items = listHeadlines.map((headline, index) => {
        headline.index = index;
        return HeadlineListItem().render(headline);
      })
      return `
        <div class="container">
          <ul id="listHeadlines" class="list-group list-group-flush">
          ${items}
          </ul>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.ListIndex = ListIndex;
})(this);
