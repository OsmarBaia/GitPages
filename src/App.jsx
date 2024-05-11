import { useState } from 'react'
import './App.css'

// React - Bootstrap
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

//Componets
import NavBar from './components/navbar';
import Banner from './components/banner'

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return JSON.parse(localStorage.getItem('isDark'));
  });

  const changeTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark));
    setIsDark(!isDark);
  }

  return (
    <div className='App' data-theme={isDark ? 'dark' : 'light'}>
      <header className='container-fluid'>
        <NavBar isDark={isDark} handleTheme={changeTheme} />
        <Banner />
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  )
}
