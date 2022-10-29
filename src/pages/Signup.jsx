import { useState } from 'react';
import Helmet from './../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/login.css"

import { db } from './../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../firebase';

import { toast } from 'react-toastify';



const Signup = () => {
  const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const signUpAuth = async (e) => {
        e.preventDefault();
        setLoading(true)
         try {       
                                                           /*sign up----------*/
      const userCredentials = await createUserWithEmailAndPassword(auth,email, password, name)

      const user = userCredentials.user;

                                    //store user data firebase database------- 
    
        await setDoc(doc(db,"users", user.uid),{
          uid:user.uid,
          displayName:name,
          email

        })

          toast.success("Cuenta Creada, Bienvenido!")
          navigate("/home")
          setLoading(false)
        } catch (error) {
          toast.success("Algo Salio Mal!")
          setLoading(false)
          console.log(error);
        }
    }



  return (
    <Helmet title={"Signup"}>
      <section>
          <Container>
              <Row>
                    {
                      loading ? <Col className='text-center h-full'><h5 className='fw-bold'>Cargando...</h5> </Col>
                      : (
                        <Col lg="6" className='m-auto text-center'>
                      <h3 className='fw-bold fs-4 mb-4'>Registrate</h3>
                        <Form 
                        onSubmit={signUpAuth}
                        className='auth__form'>

                        <FormGroup className='form__group'>
                            <input
                            value={name}
                            onChange={e => setName(e.target.value) }
                             type="text" className='w-100 p-1'
                             placeholder='Nombre...' />
                          </FormGroup>

                          <FormGroup className='form__group'>
                            <input
                            value={email}
                            onChange={e => setEmail(e.target.value) }
                             type="email" className='w-100 p-1'
                             placeholder='Email...' />
                          </FormGroup>
                          <FormGroup className='form__group'>
                            <input 
                            onChange={e => setPassword(e.target.value) }
                             value={password}
                            type="password"
                             className='w-100 p-1' 
                             placeholder='Contraseña...'/>
                          </FormGroup>
                          <button className='login__btn'>Registrate</button>
                          <p className='p__text'>Ya tienes cuenta? <Link to="/login">Inicia sesión!</Link> </p>
                        </Form>
                    </Col>
                      )
                    }
              </Row>
          </Container>
      </section>
    </Helmet>
  )
}

export default Signup