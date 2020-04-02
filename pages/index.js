import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const SeasonListing = props => (
  <>
    <h3>{props.season.name}</h3>
    <ol>
      {props.season.episodes.map(episode => (
        <li>
          <Link href="/p/[id]" as={`/p/${episode.id}`}>
            <a>{episode.name}</a>
          </Link>
        </li>
      ))}
    </ol>
  </>
);

const Index = props => (
  <Layout>
    <h1>House of Cards Episodes</h1>
    <div class="mt-5">
      {props.seasons.map(season => (
        <div>
          <SeasonListing season={season} />
        </div>
      ))}
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/shows/175/episodes');
  const data = await res.json();
  const groupedBySeason = Object.values(data.reduce(function(map, obj) {
    if (!(obj.season in map)) {
      map[obj.season] = {
        name: "Season " + obj.season,
        episodes: []
      };
    }
    map[obj.season].episodes.push(obj);
    return map;
  }, {}));

  console.log(groupedBySeason);

  return {
    seasons: groupedBySeason
  };

}

export default Index;