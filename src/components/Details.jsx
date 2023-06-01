import React from 'react'
import { useParams  } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { fetchPost } from '../state/productSlice';
import { useEffect } from 'react';
 const Details=()=> {
  const {record} =useSelector(state=> state.post)
  const params=useParams().id;
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(fetchPost(params))},[dispatch,params]);

  return (
    
    <div>
        <h2>Product Detail</h2>
        <div>Title : {record.title}</div>
        <div>Description : {record.description}</div>
        <div>#ID : {record.id}</div>

    </div>
  )
}
export default Details;