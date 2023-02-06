import { Route, Routes, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharactersPageDetail from './pages/CharactersPageDetail/CharactersPageDetail';
import HomePage from './pages/HomePage/HomePage';

function App() {



  return (
    <Router>
    <div className="App">
    <Header></Header>
    <Routes>
    <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/characters" element={<CharactersPage></CharactersPage>}></Route>
    <Route path="/characters/:id" element={<CharactersPageDetail></CharactersPageDetail>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
