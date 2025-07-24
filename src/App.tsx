import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/MainLayout.tsx';
import Home from './pages/Home';
import About from './pages/About';
import RXPage from './pages/RXPage';
import TXPage from './pages/TXPage';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="recieve" element={<RXPage />} />
          <Route path="send" element={<TXPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
