import { useState } from 'react'
import './App.css'

// React - Bootstrap
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import NavBar from './components/navbar';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return JSON.parse(localStorage.getItem('isDark'));
  });

  return (
    <div className='App' data-theme={isDark ? 'dark' : 'light'}>
      <header className='container-fluid'>
        <NavBar isDark={isDark} handleChange={
          function changeTheme() {
            localStorage.setItem('isDark', JSON.stringify(!isDark));
            setIsDark(!isDark);
          }}></NavBar>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  )
}
