import { Button, Row } from 'react-bootstrap'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Col, Card } from 'react-bootstrap'
import axios from 'axios'

export default function Generator() {
  const [genre, setGenre] = useState('')
  const [duree, setDuree] = useState('')
  const [randomFilms, setrandomFilms] = useState([])

  var dureemin = 0
  var dureemax = 0
  var randomId = 0

  async function showRandomFilm() {
    if (duree === '1') {
      dureemin = 0
      dureemax = 60
    }
    if (duree === '2') {
      dureemin = 60
      dureemax = 90
    }
    if (duree === '3') {
      dureemin = 90
      dureemax = 120
    }
    if (duree === '4') {
      dureemin = 120
      dureemax = 165
    }
    if (duree === '5') {
      dureemin = 165
      dureemax = 1000
    }
    console.log('genre => ' + genre)
    console.log('durée => ' + duree)
    console.log('duréemin => ' + dureemin)
    console.log('duréemax => ' + dureemax)
    const datas = await axios.get(
      `http://localhost:3100/Films/${genre}/${dureemin}/${dureemax}`
    )
    setrandomFilms(datas.data)
    randomId = Math.floor(Math.random() * randomFilms.length)
    //setrandomFilms(datas.data[randomId])
    console.log('randInt => ' + randomId)
    console.log(datas)
    //setrandomFilms(datas.data[randomId])
  }

  let displayFilms = randomFilms.map((randomFilms, indice) => {
    return (
      <Col md="4" key={'Films-' + indice}>
        <Card>
          <Card.Img variant="top" className="img-card" src={randomFilms.img} />
          <Card.Body>
            <Card.Title>
              {randomFilms.title} ({randomFilms.year})
            </Card.Title>
            <Card.Text>Durée : {randomFilms.duration} min </Card.Text>
            <Card.Text>Genre : {randomFilms.genre} </Card.Text>
            <Card.Text>Direction : {randomFilms.director} </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
      </Col>
    )
  })

  return (
    <>
      <div className="p-4 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">🔥 Le super générateur ⚡</h1>
          <p>
            Ce générateur va permettre de trouver un film aléatoire parmis les
            critères choisis
          </p>
        </div>

        <Form>
          <Form.Select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option>Choisir le genre 🎬</option>
            <option value="Comédie">Comédie</option>
            <option value="Drame">Drame</option>
            <option value="Romance">Romance</option>
            <option value="Action">Action</option>
            <option value="Western">Western</option>
            <option value="Aventure">Aventure</option>
            <option value="Science-fiction">Science-fiction</option>
            <option value="Horreur">Horreur</option>
            <option value="Fantastique">Fantastique</option>
            <option value="Thriller">Thriller</option>
          </Form.Select>

          <br></br>

          <Form.Select value={duree} onChange={(e) => setDuree(e.target.value)}>
            <option>Choisir la durée ⌚</option>
            <option value="1">Moins d'une heure</option>
            <option value="2">Entre 1h et 1h30</option>
            <option value="3">Entre 1h30 et 2h</option>
            <option value="4">Entre 2h et 2h45</option>
            <option value="5">Plus de 2h45</option>
          </Form.Select>
        </Form>

        <br></br>
        <div class="text-center">
          <Button
            id="text-police"
            variant="primary"
            size="lg"
            onClick={showRandomFilm}
          >
            Je trouve mon film
          </Button>
        </div>

        <br></br>
        <br></br>

        <Row>{displayFilms}</Row>
      </div>
    </>
  )
}
