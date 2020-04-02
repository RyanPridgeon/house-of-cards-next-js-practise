import Layout from '../../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

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
  const res = await fetch(`http://api.tvmaze.com/episodes/${id}`);
  const episode = await res.json();

  console.log(episode.name);

  return { episode };
};

export default Post;