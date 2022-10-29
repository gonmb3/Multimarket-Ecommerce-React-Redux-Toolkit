
import { AiOutlinePlusCircle } from "react-icons/ai"
import { motion } from "framer-motion"

import "../../styles/productCard.css"

import { Col } from "reactstrap"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addItem } from "../../redux/slices/cartSlice"
import {toast} from "react-toastify"



const ProductCard = ({item}) => {

    const dispatch = useDispatch();
   
    const addToCart = () =>{
        dispatch(addItem({
            id:item.id,
            productName:item.productName,
            price:item.price,
            imgUrl:item.imgUrl,
        }));
        toast.success("Producto Agregado Correctamente")
    }

    return (
        <Col lg="3" md="4" className="mb-2">
            <div className="product__item ">
            <Link to={`/shop/${item.id}`}>  
                    <div className="product__img">
                        <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="product-img" />
                    </div>
                    <div className="p-2 product__info">
                  
                        <h3 className="product__name text-center">
                           {item.productName}
                        </h3>
                  
                        <span className="">{item.category} </span>
                    </div>
                    </Link>
        
                <div className="product__card-bottom d-flex align-items-center justify-content-between">
                    <span className="price fw-bold">${item.price}.00 </span>
                    <motion.span
                    onClick={addToCart}
                     whileTap={{ scale: 1.2 }}>
                        <AiOutlinePlusCircle className="product__plus-icon" size={25} /> 
                    </motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard