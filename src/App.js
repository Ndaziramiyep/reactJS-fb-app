import React from 'react'
import Rightbar from './components/rightbar/Rightbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './new/Home'
// const router = createBrowserRouter([
//     {path:'/', element:<Home/>},
//     {path:'/right', element:<Rightbar/>}
// ]);
function App(){
  return ( 
    <>
    {/* <RouterProvider router={router}/> */}
        <Home/>
    </>
  );
};

export default App;
