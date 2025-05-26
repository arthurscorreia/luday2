import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Galeria from './components/Galeria';
import Quiz from './components/Pre_Quiz';
import Pergunta1 from './components/Perguntas/Pergunta1';
import Pergunta2 from './components/Perguntas/Pergunta2';
import Pergunta3 from './components/Perguntas/Pergunta3';
import Pergunta4 from './components/Perguntas/Pergunta4';
import Pergunta5 from './components/Perguntas/Pergunta5';
import QuizFinal from './components/Quiz_Final';
// import Textinho from './components/Textinho';
/* import './App.css'; */

function App() {
  return (
    <Router>   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/pergunta1" element={<Pergunta1 />} />
          <Route path="/pergunta2" element={<Pergunta2 />} />
          <Route path="/pergunta3" element={<Pergunta3 />} />
          <Route path="/pergunta4" element={<Pergunta4 />} />
          <Route path="/pergunta5" element={<Pergunta5 />} />
          <Route path="/quizFinal" element={<QuizFinal />} />
          {/* <Route path="/textinho" element={<Textinho />} /> */}
          {/* <Route path="/pergunta5" element={<Pergunta5 />} /> */}
        </Routes>
    </Router>
  );
}

export default App;