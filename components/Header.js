import Link from '../components/Link'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>House of Cards Episodes</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
            <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
