import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RouteLayout from './web/RouteLayout'
import Home from './pages/home/Home'
import SingleProduct from './componets/product/SingleProduct'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route   element={<RouteLayout/>}>
      <Route path='/' element={ <Home/> }/>
      <Route path='product/:id' element={ <SingleProduct/> }/>
    </Route>
  ))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App