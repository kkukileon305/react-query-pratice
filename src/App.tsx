import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Category from './pages/Category';
import Main from './pages/Main';

const App = () => {
  const [isNav, setIsNav] = useState(true);

  return (
    <div>
      {isNav && <Nav />}
      <button onClick={() => setIsNav(p => !p)}>Off</button>
      <div>App</div>
      <Routes>
        <Route path='/:category' element={<Category />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
