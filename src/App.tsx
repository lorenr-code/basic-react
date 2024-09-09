import { useState } from 'react'
import './App.css'
import {RouterProvider} from 'react-router-dom'
import RoutesConfig from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={RoutesConfig} />
    </>
  )
}

export default App
