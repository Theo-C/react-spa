import { Row, Col, Form, Button, Image } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ProduitUpdatePage() {
  const [id, setId] = useState(useParams().id)
  const [produit, setProduit] = useState({})
  const [form, setForm] = useState({
    ean: '',
    nom: '',
    marque: '',
    img: '',
    imgSmall: '',
    nutriscore: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    getProduit()
  }, [])
  async function getProduit() {
    const datas = await axios.get('http://localhost:3100/produits/' + id)
    if (datas.data._id !== undefined) {
      setProduit(datas.data)
      setForm(datas.data)
    }
  }

  async function save() {
    const datas = await axios.put('http://localhost:3100/produits/' + id, form)
    navigate('/produits')
  }
  return (
    <>
      <h1>
        Formulaire Produits ({id})
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
              <Form.Label>Ean</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter EAN"
                value={form.ean}
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Nom"
                value={form.nom}
                onChange={(e) => {
                  let tmp = { ...form }
                  tmp.nom = e.target.value
                  setForm(tmp)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Marque</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Marque"
                value={form.marque}
                onChange={(e) => {
                  let tmp = { ...form }
                  tmp.marque = e.target.value
                  setForm(tmp)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nutriscore</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Nutriscore"
                value={form.nutriscore}
                onChange={(e) => {
                  let tmp = { ...form }
                  tmp.nutriscore = e.target.value
                  setForm(tmp)
                }}
              />
            </Form.Group>

            <hr />

            <Button as={Link} to="/produits" variant="outline-secondary">
              Retour
            </Button>
            <span className="float-end">
              <Button
                type="reset"
                onClick={() => setForm({ ...produit })}
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
          <Image className="float-end" fluid="true" src={produit.img} />
        </Col>
      </Row>
    </>
  )
}
