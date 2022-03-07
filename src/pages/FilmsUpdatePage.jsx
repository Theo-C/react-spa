import { Row, Col, Form, Button, Image } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './FilmsPage.css'

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

  useEffect(() => {
    getFilms()
  }, [])
  async function getFilms() {
    const datas = await axios.get('http://localhost:3100/Films/' + id)
    if (datas.data._id !== undefined) {
      setFilms(datas.data)
      setForm(datas.data)
    }
  }

  async function save() {
    const datas = await axios.put('http://localhost:3100/Films/' + id, form)
    navigate('/Films')
  }
  return (
    <>
      <h1>
        Formulaire Films ({form.title})
        <Badge className="float-end" bg="warning">
          Modification
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
                placeholder="Saisir le titre"
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
                placeholder="Saisir la durée"
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
                placeholder="Saisir le genre"
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
                placeholder="Saisir le réalisateur"
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
                placeholder="Saisir le lien de l'image"
                value={form.img}
                onChange={(e) => {
                  let tmp = { ...form }
                  tmp.img = e.target.value
                  setForm(tmp)
                }}
              />
            </Form.Group>

            <hr />

            <Button
              id="text-police"
              as={Link}
              to="/Films"
              variant="outline-secondary"
            >
              Retour
            </Button>
            <span className="float-end">
              <Button
                id="text-police"
                type="reset"
                onClick={() => setForm({ ...Films })}
                variant="secondary"
              >
                Annuler
              </Button>{' '}
              &nbsp;
              <Button id="text-police" type="submit" variant="warning">
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
