import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Card,
} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import BarcodeScannerComponent from 'react-qr-barcode-scanner'
import ModalScan from '../components/AppNavbar/ModalScan'

export default function ProduitPage() {
  const [inputEan, setInputEan] = useState('')
  const [produits, setProduits] = useState([])

  const [displayModal, setDisplayModal] = useState(false)
  const closeModal = () => setDisplayModal(false)
  const showModal = () => setDisplayModal(true)

  function add() {
    axios
      .get(`https://world.openfoodfacts.org/api/v0/product/${inputEan}.json`)
      .then((datas) => {
        if (datas.data.status === 1) {
          alert(`Produit trouvé : ${datas.data.product.product_name_fr}`)
          let produit = {
            id: datas.data.product._id,
            marque: datas.data.product.brands,
            nom: datas.data.product.product_name_fr,
            img: datas.data.product.image_url,
            imgSmall: datas.data.product.image_thumb_url,
            nutriscore: datas.data.product.nutriscore_grade,
          }
          setProduits([...produits, produit])
          setInputEan('')
        } else alert('Produit non trouvé')
      })
  }

  let displayProduits = produits.map((produit, indice) => {
    return (
      <Col md="4">
        <Card>
          <Card.Img variant="top" className="img-card" src={produit.img} />
          <Card.Body>
            <Card.Title>{produit.nom}</Card.Title>
            <Card.Text>{produit.marque}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  })
  return (
    <>
      <h1>Liste des produits</h1>
      <hr />

      <Row>
        <Col md="6">
          <InputGroup className="mb-3">
            <Button variant="info" onClick={showModal}>
              Scanner
            </Button>
            <FormControl
              placeholder="Saisir un EAN"
              value={inputEan}
              onChange={(e) => setInputEan(e.target.value)}
              maxLength="13"
            />
            <Button variant="primary" onClick={add}>
              Ajouter
            </Button>
          </InputGroup>
        </Col>
      </Row>

      <Row>{displayProduits}</Row>

      <ModalScan
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        closeModal={closeModal}
        showModal={showModal}
      />
    </>
  )
}
