import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar>
      <Navbar.Brand>House of Cards Episodes</Navbar.Brand>
      <Navbar.Collapse>
        <Nav>
          <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
          <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
