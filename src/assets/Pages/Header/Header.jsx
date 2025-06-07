import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../../Icons/Logo';
import DarkMode from '../../Icons/DarkMode';
import Button from '../../components/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
  },[isDarkMode]);

  return (
    <header className={` dark:bg-[#1B2B34] dark:text-white bg-white text-black shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-semibold text-lg">Product</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <NavLink to="/products" className={({ isActive }) => isActive ? 'font-bold' : 'text-gray-900 dark:text-gray-300 dark:hover:text-white hover:text-black'}>Product</NavLink>
          <NavLink to="/customer" className={({ isActive }) => isActive ? 'font-bold' : 'text-gray-900 dark:text-gray-300 dark:hover:text-white hover:text-black'}>Customers</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => isActive ? 'font-bold' : 'text-gray-00 dark:text-gray-300 dark:hover:text-white hover:text-black'}>Pricing</NavLink>
          <NavLink to="/resources" className={({ isActive }) => isActive ? 'font-bold' : 'text-gray-900 dark:text-gray-300 dark:hover:text-white hover:text-black'}>Resources</NavLink>
        </nav>

       
        <div className="hidden md:flex items-center space-x-3">
          <Button text={'Sign In'} className={'bg-transparent border-2 border-[#BCD0E5] dark:text-white text-black hover:opacity-90 transition'} />
          <Button text={'Sign Up'} className={'bg-[#02897A] text-white hover:opacity-90 transition'} />

          <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-9 h-9 flex bg-white dark:bg-[#1B2B34] rounded-full items-center justify-center">
            <DarkMode className=" size-5 " />
          </button>
        </div>

        
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 dark:bg-[#1B2B34] bg-white">
          <NavLink to="/products" className="block dark:text-white text-black font-medium" onClick={() => setIsMenuOpen(false)}>Product</NavLink>
          <NavLink to="/customer" className="block dark:text-white text-black font-medium" onClick={() => setIsMenuOpen(false)}>Customers</NavLink>
          <NavLink to="/pricing" className="block dark:text-white text-black font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</NavLink>
          <NavLink to="/resources" className="block dark:text-white text-black font-medium" onClick={() => setIsMenuOpen(false)}>Resources</NavLink>
          <div className="pt-4 space-y-2">
            <Button text={'Sign In'} className={'w-full bg-transparent border-2 border-[#BCD0E5] dark:text-white text-black hover:opacity-90'} />
            <Button text={'Sign Up'} className={'w-full bg-[#02897A] text-white hover:opacity-90'} />
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-full mt-2 flex items-center justify-center bg-white dark:bg-[#1B2B34] py-2 rounded">
              <DarkMode className="text-teal-400 size-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
