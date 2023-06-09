import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Gallery from './Components/Gallery';
import Pokemon from './Components/Pokemon';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Gallery />}/>
          <Route path='/pokemon/:name' element={<Pokemon />}/>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;