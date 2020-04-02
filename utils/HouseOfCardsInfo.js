import fetch from 'isomorphic-unfetch'

async function getAllEpisodes() {
  const res = await fetch('https://api.tvmaze.com/shows/175/episodes');
  const data = await res.json();
  const groupedBySeason = data.reduce(function(map, obj) {
    if (!(obj.season in map)) {
      map[obj.season] = {
        name: "Season " + obj.season,
        episodes: []
      };
    }
    map[obj.season].episodes.push(obj);
    return map;
  }, {});

  return Object.values(groupedBySeason);
}

async function getSingleEpisode(id) {
    const res = await fetch(`http://api.tvmaze.com/episodes/${id}`);
    return await res.json();
}

export default {
    getAllEpisodes,
    getSingleEpisode
}