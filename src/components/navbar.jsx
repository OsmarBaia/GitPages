import { useState, useEffect, useRef } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Toggle } from './toggle';
import './navbar.css'


export default function NavBar({ handleChange, isDark }) {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isHidden, setHidden] = useState(true);
    const onUpdateActiveLink = (value) => { setActiveLink(value); }

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


    const ToggleScreenBlur = () => {
        navbarScreenBlur.current.classList.toggle('hidden');
    }

    //NavBar Collapse WorkAround
    const navbarToggler = useRef(null);
    const navbarNavContainer = useRef(null);
    const navbarScreenBlur = useRef(null);

    function CollapseNavbar() {
        navbarNavContainer.current.classList.toggle('show');
        navbarToggler.current.classList.toggle('collapsed');
        ToggleScreenBlur;
    }

    return (
        <Navbar className={scrolled ? "scrolled" : ""} expand="lg" variant={isDark ? 'dark' : 'light'}>
            <Container>
                <Navbar.Brand href="#home" className="">OsmarNeto.dev</Navbar.Brand>
                <Navbar.Toggle ref={navbarToggler} aria-controls="#basic-navbar-nav" onClick={() => { ToggleScreenBlur }} />
                <Navbar.Collapse ref={navbarNavContainer} id="basic-navbar-nav">
                    <Nav>
                        <div id='navbar-blur' ref={navbarScreenBlur}></div>
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
                        <Toggle isChecked={isDark} handleChange={handleChange} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

