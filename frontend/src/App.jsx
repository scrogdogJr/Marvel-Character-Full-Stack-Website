import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import GetCharacterList from './components/CharacterList';
import Characters from './components/Characters';
import CharacterInfo from './components/CharacterInfo';
import AddCharacter from './components/AddCharacter';
import EditCharacter from './components/EditCharacter';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character-info/:id" element={<CharacterInfo />} />
        <Route path="/add_character" element={<AddCharacter />} />
        <Route path="/edit_character" element={<EditCharacter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
