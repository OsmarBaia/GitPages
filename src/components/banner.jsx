import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { TypeAnimation } from 'react-type-animation';

//Styles
import './banner.css';

// const ComponentToTrack = ({ isVisible }) => {
//     const style = {
//         background: isVisible ? 'red' : 'blue'
//     };
//     return <span style={style} className="tagline">Welcome to my Portfolio</span>
// }

const JobList = () => {
    return (
        <TypeAnimation
            sequence={[
                'Web Designer',
                1000, // Waits 1s
                'Desenvolvedor Web',
                2000, // Waits 2s
                'Analista de Sistemas',
                // () => {
                //     console.log('Sequence completed');
                // },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', display: 'inline-block' }}
        />
    );
};

export default function Banner() {
    return (
        <>
            <section className="banner" id="home">
                <Container>
                    <Row className="banner-content aligh-items-center flex-md-row-reverse">
                        <Col xs={12} md={6} xl={5}>
                            <div className='banner-section banner-pic'>
                                <img src={headerImg} alt="Profile Picture" />
                            </div>
                            {/* <TrackVisibility>
                                {
                                    ({ isVisible }) => {
                                        <div style={'height: 50%'} className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                            <img src={headerImg} alt="Profile Picture" />
                                        </div>
                                    }
                                }
                            </TrackVisibility> */}
                        </Col>
                        <Col xs={12} md={6} xl={7}>
                            <div className='banner-section banner-text'>
                                <h1>Oi! Eu sou <span>Osmar</span></h1>
                                <h2><TypeAnimation
                                    sequence={['Analista de Sistemas', 500, 'Web Designer', 500, 'Desenvolvedor Web', 500]}

                                    repeat={Infinity}
                                /></h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et dolorem fuga accusamus quos delectus doloribus nulla velit, sequi sed, facere laboriosam? Tempore minus ab quaerat consequatur a earum quibusdam.</p>
                                <Button className='banner-button'>Contato <ArrowRightCircle /></Button>
                            </div>

                            {/* <TrackVisibility>
                                {
                                    ({ isVisible }) => {
                                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                            <img src={headerImg} alt="Profile Picture" />
                                        </div>
                                    }
                                }
                            </TrackVisibility> */}

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}