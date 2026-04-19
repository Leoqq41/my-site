import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PythonCourse from './pages/PythonCourse';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/python-course" element={<PythonCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
