import React from 'react'
import { Table, Button, ButtonGroup } from "react-bootstrap";
import { useSelector  , useDispatch} from 'react-redux';
import { useEffect  } from 'react';
import { getPost , deletePost } from '../state/productSlice';
import { useNavigate } from 'react-router-dom';
const PostList =()=> {
    const {records  , loading}=useSelector(state => state.post)
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const deleteHandeler=(id)=>{
        if(window.confirm('Are you sure you want to delete')){
            dispatch(deletePost(id))
        }
    }
    useEffect(()=>{dispatch(getPost())}
    ,[dispatch]  )


    const record =records.length>0? records.map((rec) =>(
        <tr key={rec.id}>
        <td>#{rec.id}</td>
        <td>{rec.title}</td>
        <td>
            <ButtonGroup aria-label="Basic example">
            <Button onClick={()=>{navigate(`/${rec.id}/edit`)}} variant="success">Edit</Button>
            <Button onClick={()=>deleteHandeler(rec.id) } variant="danger">Delete</Button>
            <Button onClick={()=>{navigate(`/${rec.id}`)}} variant="primary">Show</Button>
            </ButtonGroup>
        </td>
        </tr>        
    )):"There is No Products to show"; 

return (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th style={{ width: "70%" }}>Title</th>
            <th style={{ width: "10%" }}></th>
            </tr>
        </thead>
        <tbody>
        {loading===false ? record :"Wait for loading Products" }
        </tbody>
        </Table>  )
}
export default  PostList;
