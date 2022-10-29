import { Container,Row ,Col } from 'reactstrap';
import {motion} from "framer-motion"
import "./services.css"

import serviceData from "../assets/data/serviceData"

const Services = () => {
  return (
    <section className="services">
        <Container>
            <Row>
            {
                serviceData.map((service,index) => (
                    <Col lg="3" md="4">
                    <motion.div 
                      key={index}
                    whileHover={{scale:1.05}}
                    style={{background:`${service.bg}`}}
                    className="services__item">
                        <span>
                            <i className={service.icon} ></i> 
                        </span>

                        <div className="">
                            <h4>{service.title} </h4>
                            <p>{service.subtitle} </p>
                        </div>
                    </motion.div>
                </Col>
                ))
            }
            </Row>
        </Container>
    </section>
  )
}

export default Services