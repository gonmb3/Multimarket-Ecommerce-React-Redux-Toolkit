import React from 'react'
import CommonSection from '../components/commonSection/CommonSection';
import Helmet from './../components/Helmet/Helmet';
import { Container, Row,Col, Form, FormGroup} from 'reactstrap';
import ".././styles/checkout.css"
import { useSelector } from 'react-redux';

const Checkout = () => {

  const {totalAmount, totalQuantity} = useSelector(state => state.cart)
  const shipping = totalAmount / 5;
  const total = (totalAmount ) + shipping;
  


  return (
    <Helmet title={"Checkout"}>
      <CommonSection/>  {/*COMMONSECTION COMPONENT----*/}
      <section>
          <Container>
            <Row>
              <Col lg="8">
                    <h6 className='mb-6 fw-bold'>Información </h6>
                    <Form className='data__form'> 
                        <FormGroup className='form__group '>
                            <input type="text" className='w-100 p-1' placeholder='Nombre...' />
                        </FormGroup>
                        <FormGroup className='form__group'>
                            <input type="email"  className='w-100 p-1' placeholder='Email...' />
                        </FormGroup>
                        <FormGroup className='form__group'>
                            <input type="number"  className='w-100 p-1' placeholder='Telefono...' />
                        </FormGroup>
                        <FormGroup className='form__group'>
                            <input type="text"  className='w-100 p-1' placeholder='Direccion...' />
                        </FormGroup>
                        <FormGroup className='form__group'>
                            <input type="text"  className='w-100 p-1'placeholder='Ciudad...' />
                        </FormGroup>
                    </Form>
              </Col>
              <Col lg="4">
                <div className="checkout__cart">
                <h6>Productos: <span>{totalQuantity}</span></h6>
                    <h6>Subtotal: <span>${totalAmount.toFixed(2)}</span></h6>
                    <h6>Envio: <span>${shipping.toFixed(2)}</span></h6>
                    <h4>Costo Total: <span>${total.toFixed(2)}</span> </h4>
                </div>
                <button className='buy_btn auth__btn w-100'>Realizar Compra</button>
              </Col>
            </Row>
          </Container>
      </section>
    </Helmet>
  )
}

export default Checkout