
import { Link, NavLink } from 'react-router-dom';
//Icons
import Logo from '../../Icons/Logo'

import { FaInstagram, FaFacebookF, FaTwitter} from 'react-icons/fa';
//Components
import Button from '../../components/Button';
const Footer = () => {
  return (
    <footer className=" dark:bg-[#1F2E35] dark:text-white bg-white text-zinc-900 font-poppins py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Link to={'/'} className='flex gap-2 items-center'>
            <Logo />
            <p className=" font-bold">Product</p>
          </Link>
            
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="bg-[#EDFFFC] p-2 rounded-full text-[#02897A]">
              <FaInstagram />
            </a>
            <a href="#" className="bg-[#EDFFFC] p-2 rounded-full text-[#02897A]">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#EDFFFC] p-2 rounded-full text-[#02897A]">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold  mb-4">Resource</h4>
          <ul className="space-y-2 text-sm ">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold  mb-4">Legal Stuff</h4>
          <ul className="space-y-2 text-sm ">
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Financing</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm mb-4 leading-relaxed">
            knowing you're always on the best energy deal.
          </p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 mb-3 rounded-md border focus:outline-none"
          />
          <Button 
          text={'Sign up Now'}
          className={'bg-[#02897A] hover:bg-[#01a891] text-white'} />

        </div>
      </div>
    </footer>
  )
}

export default Footer