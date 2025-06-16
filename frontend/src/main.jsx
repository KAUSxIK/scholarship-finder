import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import StudentDashboard from './components/StudentDashboard/StudentDashboard.jsx'
import Bookmark from './components/Bookmark/Bookmark.jsx'
import Notification from './components/Notification/Notification.jsx'
const router = createBrowserRouter([
{
  path: '/',
  element: <Layout/>,
  children: [
    {path: "",
     element: <Home/>},
     {path: "StudentDashboard",
     element: <StudentDashboard/>},
      {path: "Bookmark",
     element: <Bookmark/>},
      {path: "Notification",
     element: <Notification/>},
     
     ]
     }
    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
