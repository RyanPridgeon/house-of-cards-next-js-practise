import Layout from '../../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import HouseOfCardsInfo from '../../utils/HouseOfCardsInfo.js';

const Post = props => {
  return (
    <Layout>
      <h1>{props.episode.name}</h1>
      <p>{props.episode.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {props.episode.image ? <img src={props.episode.image.medium} /> : null}
    </Layout>
  )
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  return { episode: await HouseOfCardsInfo.getSingleEpisode(id) };
};

export default Post;