import { useState, useEffect } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

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

    const onUpdateActiveLink = (value) => { setActiveLink(value); }

    return (
        <Navbar className={scrolled ? "scrolled" : ""} expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="#" className={activeLink === '' ? 'active navbar-brand' : 'navbar-brand'} onClick={() => onUpdateActiveLink('')}>osmarneto.dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <div id='navbar-sections'>
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                                Início
                            </Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
                                Habilidades
                            </Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
                                Projetos
                            </Nav.Link>
                        </div>
                        <div id='navbar-socials'>
                            <Nav.Link className='navbar-link social-media' href="https://www.instagram.com/osmarortsac/" target='blank'>
                                <i class="bi bi-instagram"></i>
                            </Nav.Link>
                            <Nav.Link className='navbar-link social-media' href="https://www.linkedin.com/in/osmarbaia/" target='blank'>
                                <i class="bi bi-linkedin"></i>
                            </Nav.Link>
                            <Nav.Link className='navbar-link social-media' href="https://www.behance.net/osmarneto8" target='blank'>
                                <i class="bi bi-behance"></i>
                            </Nav.Link>
                        </div>
                        <Button variant="light">
                            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
                                Contato
                            </Nav.Link>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

