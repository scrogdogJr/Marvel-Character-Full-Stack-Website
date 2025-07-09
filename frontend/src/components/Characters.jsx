import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import GetCharacterList from './CharacterList';
import { Link } from 'react-router-dom';

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        GetCharacterList(setCharacters, setError, setLoading);
    }, []);

    if (loading) {
        return (
            <>
                <Spinner animation="border" variant='white' />
                <h3 variant="white">Loading characters...</h3>
            </>
        );
    }

    if (error) {
        return <div variant="danger">{error}</div>;
    }

    return (
        <Container className='text-center'>
            <h1 className="my-4 display-2" style={{color: '#f8f9fa', textShadow: '3px 3px rgba(108, 117, 125, 1)'}}>Characters at a Glance</h1>
            <Row className='g-5 mb-5'>
                {characters.map((character) => (
                    <Col key={character.id} md={4}>
                        <Card>
                            <Card.Body className="text-center" style={{backgroundColor: '#1e1e1e'}}>
                                <Card.Title style={{color: '#6c757d'}} className='fs-2'>{character.name}</Card.Title>
                                <Card.Text><img src={character.image_url} alt={character.name} width={272} height={362} /></Card.Text>
                                <Link to={`/character-info/${character.id}`}>
                                    <Button variant="danger" className='btn-lg'>View Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Characters;
