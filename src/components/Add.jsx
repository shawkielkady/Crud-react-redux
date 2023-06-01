import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { insertPost } from '../state/productSlice';
 const Add =()=> {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [title,setTitle]=useState("")
  const [description,setDisc]=useState("")
  const {loading}=useSelector(state => state.post)
  const insertHandeler=(e)=>{
    e.preventDefault();
    const id = Math.floor(Math.random() * 500);
    const myobj={id:id, title:title , description:description};
    dispatch(insertPost(myobj))
    .then(()=>navigate('/'));
    console.log(myobj);
  }
    
  
  return (
    <div>
          <Form onSubmit={insertHandeler} >
          <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Enter the title of your product" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Discription</Form.Label>
            <Form.Control onChange={(e)=>{setDisc(e.target.value)}} as="textarea" rows={3} />
          </Form.Group>
          <button className='btn btn-outline-primary' >{loading===true ? 'Loading...':"Submit"}</button>
          
    </Form>

    </div>
  )
}
export default Add;
