import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <Container className="mt-4">
            <Row className="text-center my-5">
                <h1 className='display-3 fw-bold' style={{color: '#f8f9fa'}}>Marvel Character Emporium!</h1>
            </Row>

            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Link to="/characters"><img className='d-block w-100' src='media/marvel_characters.jpg' alt='Marvel Characters' /></Link>

                        <Carousel.Caption style={{textShadow: '3px 3px rgba(226, 54, 54, 0.5)'}}>
                            <h2 className='display-6'>Explore the Marvel Characters</h2>
                            <p className='fs-5 mb-0'>Click here now!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Link to="/addCharacter"><img className='d-block w-100' src='media/captain_america.jpg' alt='Captain America' /></Link>

                        <Carousel.Caption style={{textShadow: '2px 2px rgba(226, 54, 54, 0.5)', color: '#f8f9fa'}}>
                            <h2 className='display-6'>Add Characters!</h2>
                            <p className='fs-5 mb-0'>Click here now!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Link to="/editCharacter"><img className='d-block w-100' src='media/thanos.jpg' alt='Thanos' /></Link>

                        <Carousel.Caption style={{textShadow: '3px 3px rgba(249, 202, 36, 0.5)'}}>
                            <h2 className='display-6'>Edit Characters!</h2>
                            <p className='fs-5 mb-0'>Click here now!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Row>

            <Row className='text-center my-5'>
                <h3 className='my-5' style={{color: '#f8f9fa'}}>
                    💥Discover the vast universe of Marvel characters and their powers and even create some of your own!💥
                </h3>
            </Row>
        </Container>
    );
}

export default Home;