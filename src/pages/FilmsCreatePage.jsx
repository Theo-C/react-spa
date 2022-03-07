import { Row, Col, Form, Button, Image } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function FilmsUpdatePage() {
  const [id, setId] = useState(useParams().id)
  const [Films, setFilms] = useState({})
  const [form, setForm] = useState({
    title: '',
    duration: '',
    genre: '',
    director: '',
    year: '',
    img: '',
  })
  const navigate = useNavigate()

  useEffect(() => {}, [])

  async function save() {
    const datas = await axios.post('http://localhost:3100/Films', form)
    navigate('../Films')
  }
  return (
    <>
      <h1>
        Formulaire d'ajout du Film :{form.title}
        <Badge className="float-end" bg="warning">
          Creation
        </Badge>
      </h1>
      <hr />

      <Row>
        <Col md="6">
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              save()
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le titre"
                value={form.title}
                onChange={(e) => {
                  let tmp = { ...form }
                  tmp.title = e.target.value
                  setForm(tmp)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Durée</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez la durée"
                value={form.duration}
                onChange={(e) => {
                  let tmp = { ...form }
                  tmp.duration = e.target.value
                  setForm(tmp)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter le genre"
                value={form.genre}
                onChange={(e) => {
                  let tmp = { ...form }
                  tmp.genre = e.target.value
                  setForm(tmp)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Réalisateur</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez un réalisateur"
                value={form.director}
                onChange={(e) => {
                  let tmp = { ...form }
                  tmp.director = e.target.value
                  setForm(tmp)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Année de sortie</Form.Label>
              <Form.Control
                type="text"
                placeholder="Saisir une année"
                value={form.year}
                onChange={(e) => {
                  let tmp = { ...form }
                  tmp.year = e.target.value
                  setForm(tmp)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez une image"
                value={form.img}
                onChange={(e) => {
                  let tmp = { ...form }
                  tmp.img = e.target.value
                  setForm(tmp)
                }}
              />
            </Form.Group>

            <hr />

            <Button as={Link} to="/Films" variant="outline-secondary">
              Retour
            </Button>
            <span className="float-end">
              <Button
                type="reset"
                onClick={() => setForm({ ...Films })}
                variant="secondary"
              >
                Annuler
              </Button>{' '}
              &nbsp;
              <Button type="submit" variant="warning">
                Enregistrer
              </Button>
            </span>
          </Form>
        </Col>
        <Col md="6">
          <Image className="float-end" fluid="true" src={Films.img} />
        </Col>
      </Row>
    </>
  )
}
