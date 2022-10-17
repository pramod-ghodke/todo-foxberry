import React, {useState} from 'react';
import * as Icon from 'react-bootstrap-icons';

import {Container, Row, Col, Form, Button, ButtonGroup}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Components/style.css';



const Todo = () => {

  

    // Usestate fro storing Form Inputs 
    const [store, setStore]= useState({name:''});

     // Usestate for getting or printing outputs in card belpw hr
     const [out, setOut]= useState([]);
     const input1= (e)=>{
          const name = e.target.name;
          const value = e.target.value;
          setStore({...store,[name]:[value]});
          e.preventDefault();
         //console.log(name, value);
     }



    // Usestate for counter label of card
     //const [counter, setCounter] = useState(0);

     const submitted =(e)=>{
       e.preventDefault();
       setOut([...out,{...store, id:out.length+1}]);
       
 }



  return (
    <>


<Container>
  <Row className="d-flex justify-content-center mt-3">

    <h1 className='text-center mb-4'>THINGS TO DO</h1>
  <Col md={4}>

  <Form onSubmit={submitted}>
      <Form.Group as={Row} className="mb-3 justify-content-center">
       
        <Col sm={8}>
          <Form.Control type="name" placeholder="Add task" name="name" value={store.name} onChange={input1} required/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col xs={{ span: 4, offset: 4 }}>
          <Button type="submit" className='btn-submit'><Icon.PlusCircle className='me-2'/>Add</Button>
          
        </Col>
      </Form.Group>
    </Form>
      

   </Col>
  
  </Row>

  <Row>
    <Col>

    </Col>
  </Row>

</Container>

<hr/>

<Container>
  <Row >
  <ButtonGroup aria-label="Basic example">
      <Button variant="primary me-2">Active</Button>
      <Button variant="primary">Completed</Button>
      </ButtonGroup>
    
    <Col className="d-flex flex-wrap justify-content-evenly mt-5">
    {out.map(ele =>(
<div className="mb-3 me-2 out">
<Form>
      <Form.Check 
        type="switch"
     
        label=""
      
        name="name" value={store.id} 
      />
     
   
    <button className='btn btn-id_counter mt-2 mb-2'>{ele.id}</button>
      <h5>Task = {ele.name}</h5>
      </Form>
     
      </div>
   
     
 
    ))}


    </Col>

 
  </Row>
</Container>



    </>
    
  )
}

export default Todo;