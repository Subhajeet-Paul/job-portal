import Navbar from "./components/shared/navbar.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/home.jsx"
import Login from "./components/auth/login.jsx"
import Signup from "./components/auth/signup.jsx"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
 
])
function App() {
 

  return (
    <>
      <RouterProvider router={appRouter} />
     
    </>
  )
}

export default App
