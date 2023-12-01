import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import FirstBlock from './components/firstBlock';
import SecondBlock from './components/secondBlock';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./App.css"

const App = () => {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      setActive(0);
    } else if (currentPath === '/second') {
      setActive(1);
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="test-box">
      
            <div className="tab-container">
              <Link
                to="/"
                className={`tab-link ${active === 0 ? 'active' : ''}`}
                onClick={() => setActive(0)}
              >
                First Block
              </Link>

              <Link
                to="/second"
                className={`tab-link ${active === 1 ? 'active' : ''}`}
                onClick={() => setActive(1)}
              >
                Second Block
              </Link>
            </div>
          
          <Routes>
            <Route path="/" element={<FirstBlock />} />
            <Route path="/second" element={<SecondBlock />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider >
  );
};

export default App;
