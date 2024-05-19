import React, { useState } from 'react';

interface Props {
  darkMode: boolean;
  onSubscribe: () => void;
}

const Info = (props: Props) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validarEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validarEmail(email)) {
      setEmailError('');
      props.onSubscribe(); // Llama a la función onSubscribe
      setEmail('');
    } else {
      setEmailError('Please add your email.');
    }
  };
  

  return (
    <div
      className={`w-[640px] flex flex-col items-center justify-center gap-4 ${props.darkMode ? 'bg-sleep-mode text-white' : 'bg-white text-black'}`}
    >
      <h1 className="text-5xl text-icon-sun">
        We are launching{' '}
        <span
          className={`${
            props.darkMode ? 'text-white ' : 'text-span-color'
          } font-bold`}
        >
          soon!
        </span>
      </h1>
      <p
        className={`${
          props.darkMode ? 'text-white ' : 'text-span-color'
        } text-2xl`}
      >
        Subscribe and get notified
      </p>
      <form onSubmit={handleSubmit} className="flex w-full gap-x-4 mt-4 mx-1.5">
        <input
          className={`${
            props.darkMode
              ? 'border-btn-border focus:outline-none focus:outline-dotted focus:outline-notify-btn focus:outline-offset-2 focus:outline-4 text-white'
              : 'text-black focus:outline-none focus:outline-dotted focus:outline-notify-btn focus:outline-offset-2 focus:outline-4 bg-transparent  border-icon-sun'
          } w-3/4 p-3 rounded-full border-solid border-2 bg-transparent focus:border-solid focus:border-notify-btn`}
          placeholder="your email address"
          value={email}
          onChange={handleInputChange}
        />
        {emailError && (
          <span className="text-red-500 text-sm font-bold absolute mt-16 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 bg-transparent inline-block align-middle mr-1"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
                clip-rule="evenodd"
              />
            </svg>
            Please add your email
          </span>
        )}
        <button
          type="submit"
          className={`${
            props.darkMode ? 'text-span-color' : 'text-white'
          } w-1/4 ml-3 p-2 rounded-full bg-notify-btn hover:bg-hv-n-btn`}
        >
          Notify Me
        </button>
      </form>
      <img
        className="mb-8 mt-16"
        src="../illustration-dashboard.png"
        alt="graphics"
      />
    </div>
  );
};

export default Info;