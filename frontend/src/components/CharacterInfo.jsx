import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Allows us to us those route parameters in the url
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CharacterInfo() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [powers, setPowers] = useState([]);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/characters/${id}`);
                setCharacter(response.data);
                setPowers(response.data.powers.split(',').map(power => power.trim().replace('and ', '')));
            } catch (error) {
                setError('Failed to fetch character information');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchCharacter();
        }
    }, [id]);

    if (loading) {
        return (
            <Container className='text-center'>
                <Spinner animation="border" variant='white' />
                <h3 variant="white">Loading character information...</h3>
            </Container>
        );
    }

    if (error) {
        return <Container className='text-center'><div variant="danger">{error}</div></Container>;
    }

    return (
        <Container>
            <h1 className='text-center display-1 mt-5' style={{color: '#f8f9fa', textShadow: '3px 3px rgba(108, 117, 125, 1)'}}>{character.name}</h1>
            <div className='d-flex justify-content-center'>
                <Row className='mt-5 gx-5 py-5 rounded-3 w-75' style={{backgroundColor: '#1e1e1e'}}>
                    <Col md={6} className='text-end'>
                        <img src={character.image_url} alt={character.name} className='img-fluid' />
                    </Col>

                    <Col md={6}>
                        <Row className='g-0'>
                            <p style={{color: '#f8f9fa'}} className='fs-4 mb-3'>Alias: {character.alias || 'No alias available'}</p>
                            <p style={{color: '#f8f9fa'}} className='fs-4 my-3'>Alignment: {character.alignment}</p>
                            <h3 style={{color: '#f8f9fa'}} className='mt-3'>Powers: </h3>
                            <ul className='ms-5'>
                                {powers.map((power, index) => (
                                    <li key={index} style={{color: '#f8f9fa'}} className='fs-5'>{power}</li>
                                ))}
                            </ul>
                        </Row>
                    </Col>
                </Row>
            </div>

        </Container>
    );
}

export default CharacterInfo;