
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TariffMonitor from './pages/TariffMonitor';
import SolarForm from './pages/SolarForm';
import Performance from './pages/Performance';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import Optimizer from './pages/Optimizer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/traffic-monitor" element={<TariffMonitor />} />
        <Route path="/consumption-analytics" element={<SolarForm />} />
        <Route path="/smart-scheduling" element={<Optimizer />} />
        <Route path="/cost-analysis" element={<Performance />} />
        <Route path="/forecasting" element={<Resources />} />
        <Route path="/notifications" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;