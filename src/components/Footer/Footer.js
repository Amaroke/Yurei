import React from 'react';

const Footer = () => {
  return (
    <footer className="flex bg-[#0f0f0f] h-[6svh] border-t-2 border-purple-600 items-center font-Morganite text-2xl">
      <div className="flex justify-between items-center">
        <p className="m-2 text-white">
          &copy; 2023 Yurei Esports, all rights reserved.
          <span> (Website by <a className="text-purple-600" target="_blank" rel="noreferrer" href="https://amaroke.github.io/Portfolio">Amaroke</a>)</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
