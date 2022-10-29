import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'reactstrap';

import heroImg from "../assets/images/hero-img.png"

import Services from '../services/Services';
import Helmet from './../components/Helmet/Helmet';
import ProductsList from '../components/Products/ProductsList';

import products from ".././assets/data/products"
import "../styles/home.css"

import counterImg from "../assets/images/counter-timer-img.png"
import Clock from '../components/Clock/Clock';
import { motion } from "framer-motion"

const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);


    const year = new Date().getFullYear();




    useEffect(() => {
        const filteredTrendingProducts = products.filter(
            item => item.category === "chair");

        const filteredBestSalesProducts = products.filter(
            item => item.category === "sofa");

        const filteredmobileProducts= products.filter(
            item => item.category === "mobile");

        setTrendingProducts(filteredTrendingProducts);
        setBestProducts(filteredBestSalesProducts);
        setMobileProducts(filteredmobileProducts)
    }, []);

    return (
        <Helmet title={"Inicio"} >
            {/*HOME*/}
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero__content">
                                <p className="hero__subtitle">
                                    Productos de Tendencia en {year}
                                </p>
                                <h2>Lorem ipsum dolor sit amet.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Natus quasi aliquam quo
                                    temporibus corrupti accusantium ea quis vel
                                    iste dolores.
                                </p>
                                <Link to="/shop">
                                    <button className="buy__btn">Comprar Ahora</button>
                                </Link>
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="hero__img">
                                <img src={heroImg} alt="hero-img" />
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
            {/*SERVICES COMPONENT-----*/}
            <Services />

            <section className="trending__products">   {/*TRENDING PRODUCTS SECTION-----*/}
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2 className='section__title'>
                                Tendencias
                            </h2>
                        </Col>
                        {/*PRODUCTLIST COMPONENT-----*/}
                        <ProductsList data={trendingProducts} />
                    </Row>

                </Container>
            </section>

            <section className="timer__count">     {/*COUNTER SECTION-----*/}
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="clock__top-content">
                                <h4 className='text-white fs-6 mb-2'>Ofertas Limitadas</h4>
                                <h3 className='text-white fs-2 mb-3'>Lorem, ipsum dolor.</h3>
                                <Clock />
                                <motion.button whileHover={{ scale: 1.1 }} className="store__btn"><Link to="/shop">Ver Tienda</Link> </motion.button>
                            </div>
                        </Col>

                        <Col lg="6" md="6" className='text-end'>
                            <img className='img-clock' src={counterImg} alt="img-counter" />
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="best__sales">        {/*BEST SALES SECTION -----*/}
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2 className='section__title'>
                                Lo más vendido
                            </h2>
                        </Col>
                        {/*PRODUCTLIST COMPONENT-----*/}
                        <ProductsList data={bestSalesProducts} />
                    </Row>

                </Container>
            </section>




            <section className="new__arrivals">
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2 className='section__title'>
                                Nuevos Arribos
                            </h2>
                        </Col>
                        {/*PRODUCTLIST COMPONENT-----*/}
                        <ProductsList data={mobileProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home