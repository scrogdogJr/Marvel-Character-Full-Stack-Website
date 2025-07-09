import { use, useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import Select from 'react-select';
import CharacterModal from './CharacterModal';
import CharacterList from './CharacterList';

const EditCharacter = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        alias: '',
        alignment: '',
        powers: '',
        image_url: ''
    })

    const [powerList, setPowerList] = useState([]);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const [success, setSuccess] = useState(false);
    const [validated, setValidated] = useState(false);
    const [character, setCharacter] = useState(null);
    const [characterList, setCharacterList] = useState([]);
    const [powerCount, setPowerCount] = useState(1);

    useEffect(() => {
        CharacterList(setCharacterList, setError, setValidated);
    }, []);


    const alignmentOptions = [
        { value: 'hero', label: 'Hero' },
        { value: 'villain', label: 'Villain' }
    ];

    const characterOptions = characterList.map((character, index) => ({
        value: index, label: character.name
    }));

    const handleCharacterOptChange = (selectedOption) => {
        const updatedCharacter = {...characterList[selectedOption.value]};
        setFormData({...updatedCharacter});
        const updatedPowerList = updatedCharacter.powers.split(',').map(power => power.trim().replace('and ', ''))
        setPowerList(updatedPowerList);
        setPowerCount(updatedPowerList.length);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleAlignmentChange = (selectedOption) => {
        setFormData({
            ...formData,
            alignment: selectedOption ? selectedOption.value : ''
        });
    }

    const alignmentBorder = () => {
        if (validated && formData.alignment === '') {
            return '#dc3545';
        }

        else if (validated && formData.alignment !== '') {
            return '#198754';
        }

        else {
            return 'white';
        }
    }

    const handleAddPower = () => {
        setPowerCount(powerCount + 1);
    }

    const handlePowerChange = (event) => {
        const { name, value } = event.target;
        const updatedPowerList = [...powerList];
        updatedPowerList[name] = value;
        updatedPowerList.filter(power => power.trim() !== '');
        setPowerList(updatedPowerList);

        setFormData({
            ...formData,
            powers: updatedPowerList.join(', ')
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            event.stopPropagation();
        }

        else {
            try {
                console.log('Submitting form data:', formData);
                const response = await axios.put(`http://127.0.0.1:5000/characters/${formData.id}`, formData);
                setCharacter(response.data);
                setSuccess(true);
                setShowModal(true);
            } catch (error) {
                setError('Failed to edit character');
            }
            setValidated(true);
        }
    }

    return (
        <Container>

            {showModal && (<CharacterModal character={character} showModal={showModal} handleClose={handleCloseModal} message={"Updated!"}/>)}
            <h1 className='text-center mt-5' style={{color: '#f8f9fa'}}>Edit Character</h1>

            {error && <Alert variant="danger" dismissible onClose={() => setError('')}>{error}</Alert>}
            {success && (<Alert variant="success" dismissible onClose={() => setSuccess(false)}>Character edited successfully!</Alert>)}
            <Form onSubmit={handleSubmit} noValidate className={validated ? 'was-validated' : ''}>

                <Row className='my-4 d-flex justify-content-center'>
                    <Col md={6} className='text-center'>
                        <Select options={characterOptions} name="alignment" value={characterOptions.find(option => option.label === formData.name)} onChange={handleCharacterOptChange} placeholder="Choose character to edit" className="fs-5" styles={{ control: (base) => ({ ...base, minHeight: 59, fontSize: '1.05rem', borderColor: alignmentBorder(), borderWidth: 2 }), menu: (base) => ({ ...base, zIndex: 10}), singleValue: (base) => ({ ...base, fontSize: '1.25rem'}) }}/>
                    </Col>
                </Row>

                <Row className="my-4">
                    <Col md={6}>
                        <FloatingLabel controlId="name" label="Name" className="mb-3">
                            <Form.Control type="text" placeholder="Name" name="name" value={formData.name} className="fs-5" onChange={handleChange} required />

                            <Form.Control.Feedback type="invalid">
                                Please provide a name.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel controlId="alias" label="Alias" className="mb-3">
                            <Form.Control type="text" placeholder="Alias" name="alias" value={formData.alias} className="fs-5" onChange={handleChange} required />

                            <Form.Control.Feedback type="invalid">
                                Please provide an alias.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col md={6}>
                        <Select options={alignmentOptions} name="alignment" value={alignmentOptions.find(option => option.value === formData.alignment)} onChange={handleAlignmentChange} placeholder="Select Alignment" className="fs-5" styles={{ control: (base) => ({ ...base, minHeight: 59, fontSize: '1.05rem', borderColor: alignmentBorder(), borderWidth: 2 }), menu: (base) => ({ ...base, zIndex: 10}), singleValue: (base) => ({ ...base, fontSize: '1.25rem'}) }}/>
                        {formData.alignment === '' && validated && (
                            <div className="invalid-feedback d-block mt-0">
                                Please select an alignment.
                            </div>
                        )}
                    </Col>
                    <Col md={6}>
                        <FloatingLabel controlId="image_url" label="Image URL" className="mb-3">
                            <Form.Control type="text" placeholder="Image URL" name="image_url" value={formData.image_url} className="fs-5" onChange={handleChange} required />

                                <Form.Control.Feedback type="invalid">
                                    Please provide an image URL.
                                </Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="my-4">
                    {Array.from({length: powerCount}).map((_, index) => (
                        <Col key={index} md={6} className='mb-4'>
                            <FloatingLabel controlId={`power_${index}`} label={`Power ${index + 1}`} className="mb-3">
                                <Form.Control type="text" placeholder={`Power ${index + 1}`} name={index} value={powerList[index] || ''} required={index === 0} className={`fs-5${validated && index === 0 && powerList.length === 0 ? ' is-invalid' : ''}`} onChange={handlePowerChange} />
                                
                                <Form.Control.Feedback type="invalid">
                                    Please provide a power.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                    ))}
                    {powerCount < 6 && <Col md={6} className='mb-4'><Button variant="primary" className='btn-lg ms-4' onClick={handleAddPower}>+ Add Power</Button></Col>}
                </Row>

                <div className='d-flex justify-content-center'>
                    <Button type="submit" className='mt-3 btn-lg btn-danger'>Update Character</Button>
                </div>
            </Form>
        </Container>
    );
}

export default EditCharacter;