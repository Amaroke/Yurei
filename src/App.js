import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Video from './components/Video/Video';
import Teams from './components/Teams/Teams';
import Partners from './components/Partners/Partners';
import Streams from './components/Streams/Streams';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router basename='/Yurei'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Video />} />
          <Route path="/teams/main" element={<Teams />} />
          <Route path="/teams/academy" element={<Teams />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/streams" element={<Streams />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
