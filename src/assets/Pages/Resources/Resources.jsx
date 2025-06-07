
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter} from 'react-icons/fa';
import Button from '../../components/Button';
import Monitoring1 from '../../img/Monitoring1.png';
import Monitoring2 from '../../img/Monitoring2.png';
const articles = [
  {
    id: 1,
    title: "Increasing Prosperity With Positive Thinking",
    subtitle: "Motivation Is The First Step To Success",
    author: "Wahid Ari",
    date: "03 March 2019",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ze-sWOxyKjtxe_8gJNcXHhyoNSsKrbJJSw&s"
  },
  {
    id: 2,
    title: "Success Steps For Your Personal Or Business",
    author: "Wahid Ari",
    date: "03 March 2019",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIJ0jAh68WB7C4ULp-s7Dv16MbqjZfL3Sng&s"
  },
  {
    id: 3,
    title: "Another Strategy Example",
    subtitle: "Subtitle for example",
    author: "Wahid Ari",
    date: "03 March 2019",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqFTfTS-CuNAaa0_PqpOO97fOELbWVWBEHQ&s"
  },
  {
    id: 4,
    title: "Increasing Prosperity With Positive Thinking",
    subtitle: "Motivation Is The First Step To Success",
    author: "Wahid Ari",
    date: "03 March 2019",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ze-sWOxyKjtxe_8gJNcXHhyoNSsKrbJJSw&s"
  },
  {
    id: 5,
    title: "Success Steps For Your Personal Or Business",
    author: "Wahid Ari",
    date: "03 March 2019",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHU5anUu-1iQv3deCuajxghXUErm3eygE3Q&s"
  },
  {
    id: 6,
    title: "Another Strategy Example",
    subtitle: "Subtitle for example",
    author: "Wahid Ari",
    date: "03 March 2019",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-DEy428y2b082jwx4W6xILR8e7fPB0zTPg&s"
  },
    {
    id: 7,
    title: "Increasing Prosperity With Positive Thinking",
    subtitle: "Motivation Is The First Step To Success",
    author: "Wahid Ari",
    date: "03 March 2019",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ80P6r9XiTwfHKhlH3NqiJfI3pmMFPvPx8Q&s"
  },
  {
    id: 8,
    title: "Success Steps For Your Personal Or Business",
    author: "Wahid Ari",
    date: "03 March 2019",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JeRSdaVESw8uuI_0BEyDxi1PmmC0lDT6QA&s"
  },
  {
    id: 9,
    title: "Another Strategy Example",
    subtitle: "Subtitle for example",
    author: "Wahid Ari",
    date: "03 March 2019",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOG_RX8_sGD453s9CegKHRRJG7_wpAiH28A&s"
  }

]; 
const Resources = () => {
  return (
    <>
    {/* Great Business  */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1F2E35] dark:text-white text-[#22343D] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 py-20">
       
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Great Business <br />
            <span className="">made with <span className=" font-extrabold">Product.</span></span>
          </h1>
          <p className=" text-lg">
            Build better customer relationships easily messaging that provides a more personal experience for you and your customers.
          </p>

          <form className="flex items-center border dark:border-gray-600 border-teal-500 rounded-full overflow-hidden max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent px-6 py-3 w-full  placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-teal-500 w-28 hover:bg-teal-600 text-white font-semibold px-2 py-3 transition-all"
            >
              Join Now
            </button>
          </form>

        
          <div className="flex items-center space-x-4 pt-4">
            <div className="flex -space-x-2">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="User 1" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="User 2" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="User 3" />
            </div>
            <span className="text-sm text-[#B0C1C6]">
              Join over <span className="text-teal-400 font-semibold">4,000+</span> other
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src={Monitoring1} 
            alt="Product UI Preview"
            className="w-[300px] sm:w-[400px] md:w-[450px]"
          />
        </div>
      </div>
    </section>
    {/* Contents Strategies */}
    <section className="bg-white dark:bg-[#1F2E35] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center ">Latest Stories</h1>
      <p className="text-md md:text-lg mb-12 max-w-3xl mx-auto text-center">
        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
      </p>

      <div className="relative">
        <Swiper
          slidesPerView={1.2}
          slidesPerGroup={1}
          spaceBetween={16}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1.3,
              spaceBetween: 16
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 16
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2.2,
              slidesPerGroup: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30
            },
            1280: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 40
            }
          }}
          modules={[Pagination]}
          className="mySwiper pb-12"
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <div className="bg-white dark:bg-[#2A3C44] rounded-lg shadow-md overflow-hidden min-h-90 md:min-h-93 h-full border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <img src={article.img} alt={article.title} className='object-cover h-42 w-full' />
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-grow">
                    <h2 className="text-md md:text-xl font-bold text-gray-900 dark:text-white mb-2">{article.title}</h2>
                    {article.subtitle && (
                      <h3 className="text-md md:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">{article.subtitle}</h3>
                    )}
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">By {article.author}</span>
                      <span className="mx-2">|</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    {/* Contact Us */}
    <section className='bg-white dark:bg-[#1F2E35] dark:text-white font-[Poppins] px-4 md:px-10 py-16'>
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center ">Contact US</h2>
      <p className='text-md md:text-lg mb-12 max-w-3xl mx-auto text-center'>Need more detailed information?<br />Get in touch with us.</p>
      
      <div className="flex items-center gap-4 justify-center">
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
      
    </section>
    {/* Form Data */}
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1F2E35] dark:text-white text-[#02897a]'>
  <div className="max-w-lg mx-auto p-6 dark:bg-[#22343D] bg-[#edfffc] rounded-lg shadow-sm">
    <h2 className="text-2xl font-bold  mb-6">Send a message</h2>
      
      <form className="space-y-4">

        <div>
          <label htmlFor="name" className="block text-sm font-medium  mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-300 focus:border-green-300 outline-none transition"

          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium  mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-300 focus:border-green-300 outline-none transition"

          />
        </div>
        

        <div>
          <label htmlFor="message" className="block text-sm font-medium  mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-300 focus:border-green-300 outline-none transition"

          ></textarea>
        </div>
        <Button 
        text={'Send'}
        className={'bg-[#02897A] text-white '}
        />
      </form>
    </div>
    </section>
    </>

  )
}

export default Resources