import Layout from '../components/MyLayout.js'

export default function About() {
  return (
    <Layout>
      <p>
        A site to view episodes of House of Cards. Retrieves information from the TV Maze API.
      </p>
      <p>
        This was originally based on the NextJS tutorial <a href="https://nextjs.org/learn/basics/fetching-data-for-pages">
        "Fetching Data for Pages"</a>, but changed to show episodes of House of Cards instead of Batman shows, then integrated
        with react-bootstrap for styling.
      </p>
    </Layout>
  )
}
