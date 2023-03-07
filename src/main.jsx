import React from 'react'
import ReactDOM from 'react-dom/client'
import '../dist/index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import ErrorPage from './routes/ErrorPage'
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/Root'
import Lab, { loader as labLoader } from './routes/Lab'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: '/labs/:labNumber',
        element: <Lab />,
        loader: labLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
