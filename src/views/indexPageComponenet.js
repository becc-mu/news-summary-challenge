(function (exports) {
  function IndexPage() {
    function render(headlines) {
      return `

      <div>
        <button class="btn btn-success" id="article" onclick="renderAddNewsFeed()">Add Headline</button>

        ${ListIndex().render(headlines)}
      </div>
      `
    }
    return {
      render: render
    }
  }
  exports.IndexPage = IndexPage;
})(this);
