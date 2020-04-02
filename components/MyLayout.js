import Header from './Header'
import Head from 'next/head'
import { Badge, Container, Row, Col } from 'react-bootstrap'

export default function Layout(props) {

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <div>
        <Header />
        <Container bg="light" className="pt-5 pl-5 pr-5 pb-5 border">
          <Row>
            <Col>
              {props.children}
              <p />
            </Col>
          </Row>
          <Row>
            <Col>
              <Badge color="dark" variant="dark">
                ryanp.tech 2020
              </Badge>
            </Col>
          </Row>
        </Container>   
      </div>
    </>
  )
}
