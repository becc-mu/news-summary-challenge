let newsFeed;
window.addEventListener("load", function() {

  newsFeed = new NewsFeed();

  document.getElementById("app").innerHTML = IndexPage().render(newsFeed.listHeadlines());
}, false)

const returnHome = function() {
  document.getElementById("app").innerHTML = IndexPage().render(newsFeed.listHeadlines());
}

const updateNewsFeed = function(index) {
  headline = document.getElementById('title').value;
  link = document.getElementById('link').value;
  imgUrl = document.getElementById('imgUrl').value;
  headline = document.getElementById('headline').value;
  newsFeed.update(index, title, link, imgUrl, headline)
  document.getElementById("app").innerHTML = IndexPage().render(newsFeed.listHeadlines());
}

const displayHeadlines = function(results) {
  for(i=0;i<results.length;i++){
    addImage(results, i)
    addTitle(results, i)
  }
}
