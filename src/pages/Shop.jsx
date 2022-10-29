import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/commonSection/CommonSection';
import Helmet from './../components/Helmet/Helmet';
import {BiSearchAlt} from "react-icons/bi"

import "../styles/shop.css"
import products from './../assets/data/products';
import ProductsList from './../components/Products/ProductsList';

const Shop = () => {

  const [productsData, setProductsData] = useState(products)


                                           /*FILTRAR (---SELECT--) PRODUCTOS POR: -------------*/
  const handleFilter = (e) => {
      const filterValue = e.target.value;
      if(filterValue === "sofa"){
        const filteredProducts = products.filter(item => item.category === "sofa");

        setProductsData(filteredProducts)
      };

      if(filterValue === "mobile"){
        const filteredProducts = products.filter(item => item.category === "mobile");

        setProductsData(filteredProducts)
      };
      if(filterValue === "chair"){
        const filteredProducts = products.filter(item => item.category === "chair");

        setProductsData(filteredProducts)
      };
      if(filterValue === "watch"){
        const filteredProducts = products.filter(item => item.category === "watch");

        setProductsData(filteredProducts)
      };
      if(filterValue === "wireless"){
        const filteredProducts = products.filter(item => item.category === "wireless");

        setProductsData(filteredProducts)
      };
      
  }

  const handleSearch = e => {                               /*FILTRAR (-INPUT SEARCH-) PRODUCTOS: -------------*/
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item => item.productName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    setProductsData(searchedProducts)
  }


  return (
    <Helmet title={"Shopping"}>
      <CommonSection/>      {/* COMMONSECTION COMPONENT */}
      <section>
      <Container>
          <Row>
                <Col lg="3" md="6">             
                <select name="" className="filter__container mb-3" onChange={handleFilter}>
                      <option>Filtrar por Categoria</option>
                      <option value="sofa">Sofa</option>
                      <option value="mobile">Movil</option>
                      <option value="chair">Silla</option>
                      <option value="watch">Reloj</option>
                      <option value="wireless">Auricular</option>
                    </select>                 
                </Col> 

                <Col lg="3" md="6" className='text-start'>             
                    <select className="filter__container" onChange={handleFilter}>
                      <option>Ordenar Por</option>
                      <option value="ascending">Ascendente</option>
                      <option value="descending">Descendente</option>
                    </select>                                
               </Col> 

                <Col lg="6" md="12">
                  <div className="search__box">
                    <input type="text" placeholder='Buscar...'  onChange={handleSearch}/>  
                    <span><BiSearchAlt className='search-icon' size={20}/> </span>
                  </div>  
                </Col> 
          </Row>
      </Container>
      </section>

      <section className=''>
        <Container>
          <Row>
            {
              productsData.length === 0 ? <h1 className='text-center'>No se encontraron productos!</h1>
               : (
                  <ProductsList data={productsData}/>
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop