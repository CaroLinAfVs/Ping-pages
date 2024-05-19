import React, { useEffect, useState } from 'react';

interface SubscriptionNotificationProps {
  show: boolean;
  onClose: () => void;
  darkMode: boolean;
}

const SuscriptionAdvice: React.FC<SubscriptionNotificationProps> = ({ show, onClose, darkMode }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 3000); // La notificación desaparecerá después de 3 segundos

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className={`fixed top-4 right-4 p-4 rounded shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
      Thanks for subscribing!
    </div>
  );
};

export default SuscriptionAdvice;

