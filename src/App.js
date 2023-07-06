import './App.css';
import NavBar from './components/NavBar/NavBar';
import Video from './components/Video/Video';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Video />
      </BrowserRouter>
    </div>
  );
}

export default App;
