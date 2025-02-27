import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage/mainPage.tsx';
import { TheoryPage } from './pages/theory/theory.tsx';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/theory" element={<TheoryPage />} />
            </Routes>
        </>
    );
}

export default App;
