import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'




const Body = () => {
  
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browser",
            element:<Browse/>,
        }
    ])

    
  return (
    <div>
     <RouterProvider router={appRouter}/>
     
    </div>
  )
}

export default Body;
