import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Configure from './pages/Configure';
import ServerDashboard from './pages/ServerDashboard';
import Contact from './pages/Contact';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/harga" element={<Pricing />} />
        <Route path="/beli" element={<Configure />} />
        <Route path="/server" element={<ServerDashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
