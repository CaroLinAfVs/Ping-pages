import Logo from './images/Logo';
import Footer from './componentes/Footer';
import { useState } from 'react';
import Info from './componentes/info';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`h-full flex flex-col p-10 items-center text-center gap-12 ${darkMode ? 'bg-sleep-mode text-white' : 'bg-white text-black'}`}>
      <Logo darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Info darkMode={darkMode} />
      <Footer darkMode={darkMode}  />
    </div>
  );
}

export default App;