export function fetchStory(id) {
  const storyEndpoint = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty"`;
  return fetch(storyEndpoint).then(res => res.json());
}

export function fetchTopItems() {
  const topEndpoint =
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
  //why return fetch?
  return (
    fetch(topEndpoint)
      // .then(res => console.log(res))
      .then(res => res.json())
      //res is a json object of IDs
      // .then(res => console.log(res))
      //if there are no ids, throw an error
      .then(ids => {
        if (!ids) {
          throw new Error("this is an error");
        }
        console.log(ids);
        return ids.slice(0, 50);
      })
  );
  // .then(ids => console.log(ids));
}
