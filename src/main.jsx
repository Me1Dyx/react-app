import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import ErrorComponent from './components/ErrorComponent.jsx'
import RegistrationComponent from './components/RegistrationComponent.jsx'
import SignupComponent from './components/SignupComponent.jsx'
import MainComponent from './components/MainComponent.jsx'
import UserRequestsComponent from './components/UserRequestsComponent.jsx'
import RequestDetailComponent from './components/RequestDetailComponent.jsx'
import AdminRequestsComponent from './components/AdminRequestsComponent.jsx'
import AdminRequestDetailComponent from './components/AdminRequestDetailComponent.jsx'

let router = createBrowserRouter([
  { path: "/", Component: App, children: [
    { path: "/", Component: MainComponent },
    { path: "/reg", Component: RegistrationComponent },
    { path: "/login", Component: SignupComponent },
    { path: "/requests", Component: UserRequestsComponent },
    { path: "/requests/:id", Component: RequestDetailComponent },
    { path: "/admin/requests", Component: AdminRequestsComponent },
    { path: "/admin/requests/:id", Component: AdminRequestDetailComponent }
  ] },
  { path: "*", Component: ErrorComponent }
])

let root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
