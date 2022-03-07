import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Style.css'
import './font/starjedi/Starjedi.ttf'
export default function AppNavbar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="mb-5"
      style={{
        backgroundImage: `url("https://imgs.search.brave.com/m0LrVdbQ849cKvP0DCOaOyp4Jd65nVPXhJG6H0kDz4g/rs:fit:400:225:1/g:ce/aHR0cDovL2Nkbi5z/aGFwZWNoZWYuY29t/L2Jsb2cvc3RhcnMu/cG5n")`,
      }}
    >
      <Container className="navv" style={{ color: 'white' }}>
        <Navbar.Brand className="title" href="/" style={{ color: '#0697fc' }}>
          un film pour ce soir
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              class="title"
              as={Link}
              to="/Films"
              style={{ color: 'yellow' }}
            >
              <h3>Films </h3>
            </Nav.Link>
            <Nav.Link as={Link} to="/generateur" style={{ color: 'yellow' }}>
              <h3>Générateur </h3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
