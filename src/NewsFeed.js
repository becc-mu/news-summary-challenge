(function(exports) {

  function NewsFeed() {

    let headlines = []

    function listHeadlines() {
      return headlines
    }

    function add(headlines) {
      headlines.push(headline)
    }

    function update(index, title, link, imgUrl, headline) {
      headline[index] = index
      headline[title] = title
      headline[link] = link
      headline[imgUrl] = imgUrl
      headline[article] = article
    }
    //link to see the original news article
    function find(index, headline, article) {
      headlines[index].headline = headline
      headlines[index].article = article
    }

    return {
      listHeadlines: listHeadlines,
      add: add,
      update: update,
      find: find
    }
  }

  exports.NewsFeed = NewsFeed

})(this)
