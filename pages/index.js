import Layout from '../components/MyLayout.js'
import Link from '../components/Link'
import HouseOfCardsInfo from '../utils/HouseOfCardsInfo.js';

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
  return {
    seasons: await HouseOfCardsInfo.getAllEpisodes()
  };
}

export default Index;