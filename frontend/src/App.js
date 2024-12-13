import React, { useEffect } from 'react';
import './App.css'; 
import Headers from './Component/Headers';
import Home from './Component/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <ToastContainer />
      <Headers  toggleTheme={toggleTheme} theme={theme}/>
      <Home theme={theme}/>
    </div>
  );
};

export default App;
