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
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className={`fixed top-4 right-4 p-4 flex rounded shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600 mr-2">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
</svg>

      Thanks for subscribing!
    </div>
  );
};

export default SuscriptionAdvice;

