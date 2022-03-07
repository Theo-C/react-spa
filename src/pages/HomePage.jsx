import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    <>
      <div
        className="p-5 mb-4 bg-light rounded-3"
        style={{
          backgroundImage: `url("https://imgs.search.brave.com/m0LrVdbQ849cKvP0DCOaOyp4Jd65nVPXhJG6H0kDz4g/rs:fit:400:225:1/g:ce/aHR0cDovL2Nkbi5z/aGFwZWNoZWYuY29t/L2Jsb2cvc3RhcnMu/cG5n")`,
        }}
      >
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold" id="title">
            Application React{' '}
          </h1>
          <p className="col-md-8 fs-4" id="subtitle">
            -un film pour ce soir-
          </p>
          <br></br>
          <p id="description">
            Cette application va vous permettre de trouver un film pour ce soir
            grâce au générateur. vous pouvez également enrichir la collection
            avec vos films favoris.
          </p>
          <br></br>
          <br></br>
          <span className="float-end">
            <Button
              classeName="valider"
              variant="primary"
              size="lg"
              as={Link}
              to="/Films"
            >
              <h3>voir les films</h3>
            </Button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button
              classeName="valider"
              variant="primary"
              size="lg"
              as={Link}
              to="/generateur"
            >
              <h3>Générateur</h3>
            </Button>
          </span>
        </div>
      </div>
    </>
  )
}
