import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
const initialState = {records:[],loading:false,error:null,record:null}; 
export const getPost=createAsyncThunk('post/getPost',async (_,thunkAPI)=>{
    const {rejectedWithValue } = thunkAPI;
    try{
    const res = await fetch('http://localhost:3006/product');
    const data = await res.json();
    return data;
}
    catch(error){
        return rejectedWithValue (error.message)
    }
});
export const fetchPost=createAsyncThunk('post/fetchPost',async (id,thunkAPI)=>{
    const{rejectedWithValue  } = thunkAPI;
    try{
        const res =await fetch(`http://localhost:3006/product/${id}`)
    const data =await res.json();
    return data
}
    catch(error){ 
        return rejectedWithValue(error.message)
    }
    }
    
)
export const insertPost=createAsyncThunk('post/insertPost',async (postData,thunkAPI)=>{
    const{rejectedWithValue , getState} = thunkAPI;
    const {auth}=getState();
        postData.userId= auth.userId;
    try{
        const res= await fetch('http://localhost:3006/product',{
        method:'POST',
        body:JSON.stringify(postData),
        headers: {
            "Content-type": "application/json",
            }
    });
        
        const data = await res.json();
        return data;
    }
    catch(error){
        return rejectedWithValue (error.message);
    }

}); 

export const deletePost=createAsyncThunk('post/deletePost',async (product,thunkAPI)=>{
    const {rejectedWithValue } = thunkAPI;
    try{
    await fetch(`http://localhost:3006/product/${product}`,{
    method: 'DELETE' }   );
    return product;
}
    catch(error){
        return rejectedWithValue (error.message)
    }
});

//edit post
export const editPost=createAsyncThunk('post/editPost',async (product , thunkAPI)=>{
    const {rejectedWithValue } = thunkAPI;
    try{
        const res = await fetch(`http://localhost:3006/product/${product.id}`,{
            method:'PATCH',
            body:JSON.stringify(product),
            headers: {
                "Content-type": "application/json",
                }});
            const data = await res.json();
            return data;
    }
    catch(error){
            return rejectedWithValue (error.message)
    }

})


const postSlice=createSlice(
    {
        name:'post',
        initialState: initialState,
        reducers:{
        },
        extraReducers:{
            [getPost.pending]:(state , action)=>{ 
                state.loading=false;
                state.error=null;
                
            },
            [getPost.fulfilled]:(state , action)=>{
                state.loading=false;
                state.records=action.payload;
                state.record=null;
                
            },
            [getPost.rejected]:(state , action)=>{
                state.error=action.payload;
                
            },
            [fetchPost.pending]:(state , action)=>{ 
                state.loading=false;
                state.error=null;
                
            },
            [fetchPost.fulfilled]:(state , action)=>{
                state.loading=false;
                state.record=action.payload;
                
            },
            [fetchPost.rejected]:(state , action)=>{
                state.error=action.payload;
                
            },
            [deletePost.pending]:(state , action)=>{ 
                state.loading=false;
                state.error=null;
                
            },
            [deletePost.fulfilled]:(state , action)=>{
                state.loading=false;
                state.records=state.records.filter((record) =>record.id !== action.payload );

                
            },
            [deletePost.rejected]:(state , action)=>{
                state.error=true;                
            },
            [insertPost.pending]:(state , action)=>{
                state.loading=true;
            },
            [insertPost.fulfilled]:(state , action)=>{
                state.loading=false;
                state.records.push(action.payload);
                console.log(action);
            },
            [insertPost.rejected]:(state , action)=>{
                state.loading=false;

            },
            [editPost.pending]:(state , action)=>{
                state.loading=true;
                state.record=action.payload;
            },
            [editPost.fulfilled]:(state , action)=>{
                state.loading=false;
                state.record=action.payload;
            },
            [editPost.rejected]:(state , action)=>{
                state.loading=false;
                state.error=action.payload;
            },

        }
    }
)
export default postSlice.reducer;