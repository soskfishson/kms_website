import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage/mainPage.tsx';
import { TheoryPage } from './pages/theory/theory.tsx';
import { StructurePage } from './pages/structurePage/structurePage.tsx';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/theory" element={<TheoryPage />} />
                <Route path='/structure' element={<StructurePage/>}/>
            </Routes>
        </>
    );
}

export default App;
