import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Toggle } from './toggle';
import './navbar.css'

export default function NavBar({ handleChange, isDark }) {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isHidden, setHidden] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                s
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => setActiveLink(value);

    // Navbar Collapse on Link Click
    const navbarMenu = document.querySelector('#basic-navbar-nav');
    function onLinkClick() {
        navbarMenu.classList.toggle('show');
    }
    const navlinks = document.querySelectorAll('a.nav-link');
    navlinks.forEach((e) => {
        e.addEventListener('click', onLinkClick);
    })


    return (

        <Navbar className={scrolled ? "scrolled" : ""} expand="lg" variant={isDark ? 'dark' : 'light'}>
            <Container>
                <Navbar.Brand href="#home" className="">OsmarNeto.dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setHidden(!isHidden)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <div id='navbar-blur' className={isHidden ? 'hidden' : ''}></div>
                        <div id='navbar-sections'>
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('home') }}>
                                Início
                            </Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>
                                Sobre
                            </Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
                                Habilidades
                            </Nav.Link>
                            <Nav.Link href="#jobs" className={activeLink === 'jobs' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('jobs')}>
                                Serviços
                            </Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
                                Projetos
                            </Nav.Link>
                            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
                                Contato
                            </Nav.Link>
                        </div>
                        <Toggle isChecked={isDark} handleChange={handleChange}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

