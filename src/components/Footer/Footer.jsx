import { Link } from "react-router-dom"
import {MdPlace} from "react-icons/md";
import {BiEnvelope} from "react-icons/bi"
import {AiOutlinePhone} from "react-icons/ai"
import { Col, Row, Container, ListGroupItem, ListGroup } from "reactstrap"
import logo from "../../assets/images/eco-logo.png"
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()
  
  return (

    <footer className="footer">
      <Container>
        <Row>
          <Col lg="5">
            <div className="logo">
            <div>
                <h1 className="text-white">MultiAhorro</h1>
              </div>
            </div>
            <p className="footer__text mb-4">
              Lorem ipsum dolor sit amet consectetur adipi
              iste excepturi tempora veritatis nemo non
              voluptatem, dignissimos, voluptas corrupti?
            </p>
          </Col>

     


          <Col lg="3">
          <div className="footer__quick-links">
              <h4 className="footer__links-title text-white fw-bolder">Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/">
                    Inicio
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">
                    Carrito
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">
                    Login
                  </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">
                    Politica de Privacidad
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
          <div className="footer__quick-links ">
              <h4 className="footer__links-title text-white fw-bolder">Contacto</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span> <MdPlace color="white" size={26}/> </span>
                  <p className="text-white">12345 Lorem, Ipsum dolor.</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span> <AiOutlinePhone color="white" size={26}/> </span>
                  <p className="text-white">+09912356789</p>       
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span> <BiEnvelope color="white" size={26}/> </span>
                  <p className="text-white">multiahorro@gmail.com</p>                   
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>

      <Col lg="12">
        <p className="footer__copyright">
          Copyrigtht {year} Diseñado por GZM.
        </p>
      </Col>

      </Container>
    </footer>
  )
}

export default Footer