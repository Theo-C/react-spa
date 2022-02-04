import {
  Button,
  ButtonGroup,
  Modal,
  Row,
  Col,
  Container,
} from 'react-bootstrap'
import BarcodeScannerComponent from 'react-qr-barcode-scanner'
import { useState } from 'react'
export default function ModalScan(props) {
  const { displayModal } = props

  const { closeModal } = props
  const { setInputEan } = props
  const { addProduit } = props
  const [mode, setMode] = useState('environment')
  return (
    <>
      <Modal show={displayModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Scannez un code barre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <ButtonGroup aria-label="Basic example" className="mb-3">
                  <Button
                    variant="outline-primary"
                    onClick={() => setMode('user')}
                  >
                    Camera Avant
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setMode('environment')}
                  >
                    Camera Arrière
                  </Button>
                </ButtonGroup>
                <BarcodeScannerComponent
                  height={500}
                  facingMode={mode}
                  onUpdate={(err, result) => {
                    if (result) {
                      setInputEan(result.text)
                      addProduit()
                      closeModal()
                    }
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={closeModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
