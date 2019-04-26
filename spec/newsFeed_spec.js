let listHeadlines;

console.log('should show a list of headlines')
const newsFeed = new NewsFeed();
newsFeed.add("Breaking")
newsFeed.add("News")
newsFeed.add("politics")
newsFeed.add("in")
newsFeed.add("uk")
let array = ['Breaking', 'News', 'politics', 'in', 'uk']
expect(newsFeed.listHeadlines()).compareArray(array);

console.log("Expect 'NewsFeed.add' to push a headline to the newsFeed array")
newsFeed = new NewsFeed();
newsFeed.add("Hello");
expect(newsFeed.listHeadlines()[0]).toEqual("Hello");
