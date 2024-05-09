import { useState } from 'react'
import './App.css'

// React - Bootstrap
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import NavBar from './components/navbar';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='container-fluid'>
        <NavBar></NavBar>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </>
  )
}
