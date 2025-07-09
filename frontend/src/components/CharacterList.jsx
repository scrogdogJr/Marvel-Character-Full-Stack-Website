import axios from 'axios';

async function GetCharacterList(setCharacters, setError, setLoading) {
    try {
        const response = await axios.get('http://127.0.0.1:5000/characters');
        setCharacters(response.data);
    } catch (error) {
        setError('Failed to fetch character list');
    }
    setLoading(false);
}

export default GetCharacterList;