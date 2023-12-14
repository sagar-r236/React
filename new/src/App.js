import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./componenets/Header";
import Body from "./componenets/Body";
import About from "./componenets/About";
import Error from "./componenets/Error";
import Contact from "./componenets/Contact";
import RestaurantMenu from "./componenets/RestaurantMenu";
import Test from "./componenets/test";
import { createBrowserRouter, Route, RouterProvider, Outlet } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root')) 


const AppComponent = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
            
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <AppComponent />,
        errorElement: <Error />, 
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "restaurant/:id",
                element: <RestaurantMenu /> 
            },
            {
                path: "/test",
                element: <Test />
            }
        ]
    }
    
])



root.render(<RouterProvider router={appRouter}  />)
