(function (exports) {
  function IndexPage() {
    function render(headlines) {
      return `

      <div>
        <button class="btn btn-success" id="add" onclick="renderAddNewsFeed()">Add Headline</button>
      </div>
      ${ListIndex().render(headlines)}
      `
    }
    return {
      render: render
    }
  }
  exports.IndexPage = IndexPage;
})(this);
