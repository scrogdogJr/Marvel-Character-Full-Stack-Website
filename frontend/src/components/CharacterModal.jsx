import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useState } from 'react';

const CharacterModal = ({ character, showModal, handleClose, message }) => {

    const [powers, setPowers] = useState([]);

    useEffect(() => {
        setPowers(character.powers.split(',').map(power => power.trim().replace('and ', '')));
    }, [character]);


    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton style={{backgroundColor: '#121212'}}>
                <Modal.Title style={{color: '#f8f9fa', textShadow: '2px 2px rgba(108, 117, 125, 1)'}} className='w-100 text-center fs-3'>{character.name} {message}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#1e1e1e'}}>
                <div className='d-flex justify-content-center'>
                    <Row className='mt-5 p-3'>
                        <Col md={6} className='text-end'>
                            <img src={character.image_url} alt={character.name} className='img-fluid' />
                        </Col>

                        <Col md={6}>
                            <Row className='g-0'>
                                <p style={{color: '#f8f9fa'}} className='fs-5 mb-3'>Alias: {character.alias || 'No alias available'}</p>
                                <p style={{color: '#f8f9fa'}} className='fs-5 my-3'>Alignment: {character.alignment}</p>
                                <h3 style={{color: '#f8f9fa'}} className='mt-3'>Powers: </h3>
                                <ul className='ms-5'>
                                    {powers.map((power, index) => (
                                        <li key={index} style={{color: '#f8f9fa'}} className='fs-6'>{power}</li>
                                    ))}
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: '#121212'}}>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CharacterModal;