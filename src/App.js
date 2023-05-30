import logo from './logo.svg';
import './App.css';
import Login from './login/Login';
import Inscrit from './inscription/Inscrit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashbord from './accueil/page1/Dashbord';
import PaimmentFacture from './accueil/page2/PaimmentFacture';
import Hsitorique from './accueil/page3/Hsitorique';
import Assistance from './accueil/page4/Assistance';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/inscrire" element={<Inscrit/>}/>
      <Route path="/accueil" element={<Dashbord/>}/>
      <Route path="/service" element={<PaimmentFacture/>}/>
      <Route path="/historique" element={<Hsitorique/>}/>
      <Route path="/assistance" element={<Assistance/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
