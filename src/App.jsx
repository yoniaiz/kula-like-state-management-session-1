import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./screens/character";
import Characters from "./screens/characters";
import "./App.css";
import CharacterContextProvider from "./context/CharactersContext";

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty - State management</h1>
      <CharacterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/character/:id" element={<Character />} />
            <Route path="*" element={<Characters />} />
          </Routes>
        </BrowserRouter>
      </CharacterContextProvider>
    </div>
  );
}

export default App;
