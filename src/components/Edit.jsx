import React from 'react'
import { useParams  } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { editPost , fetchPost } from '../state/productSlice';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
 const Edit=()=> {
  const {record} =useSelector(state=> state.post)
  const params=useParams().id;
  const dispatch=useDispatch()
  const [title, setTitle]=useState("");
  const [description, setDisc]=useState("");
  const navigate =useNavigate();

useEffect(()=>{
  if(record && !title && !description){
      setTitle(record.title);
      setDisc(record.description)
  }
  else{
  }
},[title ,description , record , params , dispatch])
  const editHandeler=(e)=>{
  e.preventDefault();
  dispatch(editPost({id:params,title:title,description:description}))
  navigate('/')
}
const appearItem=()=>{
  dispatch(fetchPost(params))
}


  return (
    <div>
        <Form onSubmit={editHandeler} >
          <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Enter the title of your product" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Discription</Form.Label>
            <Form.Control value={description} onChange={(e)=>{setDisc(e.target.value)}} as="textarea" rows={3} />
          </Form.Group>
          <button className='btn btn-outline-primary' onClick={editHandeler} >Submit</button>
          <span onClick={appearItem} className='btn btn-outline-danger m-1' >Show your item</span>
          
        </Form>
      

    </div>
  )
}
export default Edit;