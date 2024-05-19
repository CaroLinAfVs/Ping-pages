import Logo from './images/Logo';
import Footer from './componentes/Footer';
import { useState } from 'react';
import Info from './componentes/Info';
import SuscriptionAdvice from './componentes/SuscriptionAdvice';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubscribe = () => {
    setShowNotification(true);
  };
  
  return (
    <div className={`h-full flex flex-col p-10 items-center text-center gap-12 ${darkMode ? 'bg-sleep-mode text-white' : 'bg-white text-black'}`}>
      <Logo darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Info darkMode={darkMode} onSubscribe={handleSubscribe}/>
      <Footer darkMode={darkMode}  />
        <SuscriptionAdvice show={showNotification} onClose={() => setShowNotification(false)} darkMode={darkMode} />
    </div>
  );
}

export default App;