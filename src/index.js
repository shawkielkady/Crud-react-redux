import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter ,RouterProvider  } from "react-router-dom";
import App from "./App";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Details from "./components/Details";
import PostList from "./components/PostList";
import ErrorPage from "./components/ErrorPage";
import store from "./state/store";
import  Login from "./components/login";
import { Provider } from "react-redux";

const paramHadeler=({params})=>{
  if(isNaN(params.id)){
    throw new Response("Bad Request", { 
      statusText:"Please enter a valid id",
      status: 400 });
  };

}
const router =createBrowserRouter(
  [{
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage />,
    children:
    [
              {index:true , element:<PostList />},
              {path:'add',element:<Add />},
              {path:':id/edit',element:<Edit />,loader:paramHadeler},
              {path:'login',element:<Login />},
              {
                path:':id',
                element:<Details />,
                loader:paramHadeler
                //(render before component like useFeect)loader:(data)=>{console.log(data.params.id);}

              },
  ]
  }])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
          <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
