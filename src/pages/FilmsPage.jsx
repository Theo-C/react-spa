import { Button, Row, Col, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './FilmsPage.css'

export default function FilmsPage() {
  const [Films, setFilms] = useState([])

  useEffect(() => {
    getFilms()
  }, [])

  async function createFilms() {
    const create = await axios.post('http://localhost:3100/Films')
    console.log(create)
  }

  async function getFilms() {
    const datas = await axios.get('http://localhost:3100/Films')
    console.log(datas)
    setFilms(datas.data)
  }

  async function deleteFilms(Films) {
    let rep = window.confirm(
      `Etes-vous sûr de vouloir supprimer le Film : ${Films.title} ? `
    )
    if (rep === true) {
      const res = await axios.delete(`http://localhost:3100/Films/${Films._id}`)
      console.log(res)
      getFilms()
    }
  }

  let displayFilms = Films.map((Films, indice) => {
    return (
      <Col md="4" key={'Films-' + indice}>
        <Card>
          <Card.Img variant="top" className="img-card" src={Films.img} />
          <Card.Body>
            <Card.Title>
              {Films.title} ({Films.year})
            </Card.Title>
            <Card.Text>Durée : {Films.duration} min </Card.Text>
            <Card.Text>Genre : {Films.genre} </Card.Text>
            <Card.Text>Direction : {Films.director} </Card.Text>
            <Button
              id="text-police"
              variant="warning"
              as={Link}
              to={`/Films/${Films._id}`}
            >
              Modifier
            </Button>{' '}
            <Button
              id="text-police"
              variant="outline-danger"
              onClick={() => deleteFilms(Films)}
            >
              Supprimer
            </Button>
          </Card.Body>
        </Card>
        <br></br>
      </Col>
    )
  })
  return (
    <>
      <h1>Liste des Films</h1>
      <hr />
      <Row>
        <Button id="add-btn" as={Link} to={`/Films/create`}>
          <h3>Ajouter un film</h3>
        </Button>
      </Row>
      <br></br>

      <Row>{displayFilms}</Row>
    </>
  )
}
