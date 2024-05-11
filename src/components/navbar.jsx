import { useState, useEffect, useRef } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Toggle } from './toggle';
import './navbar.css'


export default function NavBar({ handleTheme, isDark }) {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const onUpdateActiveLink = (value) => { setActiveLink(value); }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    // Navbar BG Blur
    const navbarBgBlur_ref = useRef(null);
    const ToggleScreenBlur = () => {
        navbarBgBlur_ref.current.classList.toggle('hidden');
    }

    //NavBar Collapse 
    const navbarToggler_ref = useRef(null);
    function CollapseNavbar() {
        if (!navbarToggler_ref.current?.style.display === 'none') {
            navbarToggler_ref.current?.click();
        }
    }

    return (
        <Navbar className={scrolled ? "scrolled" : ""} expand="lg" variant={isDark ? 'dark' : 'light'}>
            <Container>
                <Navbar.Brand href="#home" className="">OsmarNeto.dev</Navbar.Brand>
                <Navbar.Toggle ref={navbarToggler_ref} aria-controls="#basic-navbar-nav" onClick={() => { ToggleScreenBlur }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <div id='navbar-blur' ref={navbarBgBlur_ref}></div>
                        <div id='navbar-sections'>
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => { CollapseNavbar(); onUpdateActiveLink('home'); }}>
                                Início
                            </Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => { CollapseNavbar(); onUpdateActiveLink('about'); }}>
                                Sobre
                            </Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => { CollapseNavbar(); onUpdateActiveLink('skills'); }}>
                                Habilidades
                            </Nav.Link>
                            <Nav.Link href="#jobs" className={activeLink === 'jobs' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => { CollapseNavbar(); onUpdateActiveLink('jobs'); }}>
                                Serviços
                            </Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => { CollapseNavbar(); onUpdateActiveLink('projects'); }}>
                                Projetos
                            </Nav.Link>
                            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active-link navbar-link' : 'navbar-link'} onClick={() => { CollapseNavbar(); onUpdateActiveLink('contact'); }}>
                                Contato
                            </Nav.Link>
                        </div>
                        <Toggle isChecked={isDark} handleChange={handleTheme} onClick={CollapseNavbar()} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

