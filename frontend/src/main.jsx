import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import StudentDashboard from './components/StudentDashboard/StudentDashboard.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import { AppProvider } from './context/AppContext.jsx'
import About from './components/About/About.jsx'
import Bookmark from './components/Bookmark/Bookmark.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <Layout/>,
  children: [
    {path: "",
     element: <Home/>},
     {path: "StudentDashboard",
     element: <StudentDashboard/>},
      {path: "About",
     element: <About/>},
     { path: 'Bookmarks',
       element: <Bookmark/> }, 
    
    
     
     ]
     },
{
     path: '/login',
     element: <Login/>,},
     {
  path: '/signup',
  element: <Signup />
}


    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <RouterProvider router={router}/>
    </AppProvider>
  </StrictMode>,
)
