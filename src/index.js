import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppNavbar from './components/AppNavbar/AppNavbar'
import { Col, Container, Row } from 'react-bootstrap'
import HomePage from './pages/HomePage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppNavbar />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
