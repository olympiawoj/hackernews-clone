export function fetchStory(id) {
  const storyEndpoint = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty"`;
  return fetch(storyEndpoint).then(res => res.json());
}

export function fetchStories(type) {
  const endpoint = `https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`;
  //why return fetch?
  return (
    fetch(endpoint)
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
      .then(ids => Promise.all(ids.map(fetchStory)))
  );

  // .then(ids => console.log(ids));
}
