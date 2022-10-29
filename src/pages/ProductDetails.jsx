
import { useEffect } from 'react';
import Helmet from './../components/Helmet/Helmet';
import CommonSection from './../components/commonSection/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from './../assets/data/products';
import {AiFillStar} from "react-icons/ai"
import {FaStarHalfAlt} from "react-icons/fa"
import "../styles/productDetails.css"
import { useDispatch } from 'react-redux';
import {addItem} from "../redux/slices/cartSlice"
import { toast } from 'react-toastify';

const ProductDetails = () => {

  const {id} = useParams();
  const product = products.find(item => item.id === id )

  const {imgUrl, productName, price, avgRating,shortDesc } = product;
  
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({
      id,
      imgUrl:imgUrl,
      productName,
      price,
    }))
    toast.success("Producto Agregado Correctamente")
  }

    useEffect(() => {
      window.scrollTo(0,0)
    },[product])
  

  return (
    <Helmet >         
      <CommonSection/> {/*COMMONSECTION COMPONENT----*/}
      <section>
          <Container>
            <Row>
              <Col lg="6">
                  <img src={imgUrl} alt="img-product"/>
              </Col>

              <Col lg="6">
                <div className="product__details">
                      <h2>{productName} </h2>
                      <div className="product__rating d-flex align-items-center gap-2 mb-4">
                            <AiFillStar size={20} />
                            <AiFillStar size={20} />
                            <AiFillStar size={20} />
                            <AiFillStar size={20} />
                            <FaStarHalfAlt size={17}/>
                            <p> {avgRating} </p>
                      </div>
                      <span className='price'>${price}.00 </span>
                      <p className='mt-3'>{shortDesc} </p>
                      <button className='btn__buy' onClick={() => dispatch(addToCart)} >Agregar al Carrito </button>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails