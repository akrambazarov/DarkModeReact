import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';
//Img
import imgHero from '../../img/amico.png';
import Customer from '../../img/CustomerSupport.png';
import Mangement from '../../img/management.png';
import Collaborative from '../../img/Collaborative.png';
import Screen from '../../img/screen.png';

//Components
import Button from '../../components/Button';

//Icons
import PlayIcon from '../../components/playIcon';
import Heart from '../../Icons/Heart';
import Time from '../../Icons/Time';
import Cursor from '../../Icons/Cursor';
import Link from '../../Icons/Link';
import Done from '../../Icons/Done';

function Products() {
const features = [
  {
    icon: <Cursor className={'size-6'}/>,
    title: "First click tests",
    description: "While most people enjoy casino gambling,",
    bg: "bg-[#02897A]",
  },
  {
    icon: <Link className = {'size-6'}/>,
    title: "Design surveys",
    description: "Sports betting, lottery and bingo playing for the fun",
    bg: "bg-[#4D8DFF]",
  },
  {
    icon: <Heart className = {'size-6'}/>,
    title: "Preference tests",
    description: "The Myspace page defines the individual.",
    bg: "bg-[#740A76]",
  },
  {
    icon: <Time className={'size-6'} />,
    title: "Five second tests",
    description: "Personal choices and the overall personality of the person.",
    bg: "bg-[#F03E3D]",
  },
];
const points = [
  {
    color: "bg-[#FF9900]",
    text: "Never worry about overpaying for your energy again.",
  },
  {
    color: "bg-[#F03E3D]",
    text: "We will only switch you to energy companies that we trust and will treat you right",
  },
  {
    color: "bg-[#4D8DFF]",
    text: "We track the markets daily and know where the savings are.",
  },
];
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
const plans = [
  {
    name: "Free",
    description: "Brief price description",
    price: "0",
    bg: '#ffffff',
    period: "Per / month",
    features: [
      "Only 2 Operators",
      "Notifications",
      "Landing Pages"
    ],
    highlight: false
  },
  {
    name: "Standard",
    description: "Brief price description",
    price: "5",
    bg: '#02897A',
    period: "Per / month",
    features: [
      "5+ Operators",
      "Notifications",
      "Landing Pages"
    ],
    highlight: true
  },
  {
    name: "Premium",
    description: "Brief price description",
    price: "10",
    bg: '#ffffff',
    period: "Per / month",
    features: [
      "10+ Operators",
      "Notifications",
      "Landing Pages"
    ],
    highlight: false
  }
];
const testimonials = [
  {
    id: 1,
    rating: 4,
    comment: "Product helps you see how many more days you need to work to reach your financial goal.",
    author: "Wahid Ari",
    role: "Designer"
  },
  {
    id: 2,
    rating: 4,
    comment: "Product helps you see how many more days you need to work to reach your financial goal.",
    author: "Wahid Ari",
    role: "Designer"
  },
  {
    id: 3,
    rating: 4,
    comment: "Product helps you see how many more days you need to work to reach your financial goal.",
    author: "Wahid Ari",
    role: "Designer"
  }
];

  return (
    <>  
    {/* Hero Section */}
    <section className="bg-white dark:bg-[#1F2E35] font-poppins py-16 px-6">
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
      {/* Text Block */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-[#22343D] dark:text-white text-4xl font-bold mb-4">
          Work at the speed <br />
          of thought
        </h1>
        <p className="text-[#22343D] dark:text-[#979797] text-lg mb-8 max-w-md">
          Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button 
          text={'Get started'}
          className={'bg-[#02897A] text-white hover:opacity-90 transition'} />
          <a
            href="#"
            className="flex items-center text-[#02897A] gap-2 font-poppins underline"
          >
            <PlayIcon className={'size-6'}/>
            Watch the Video
          </a>
        </div>
      </div>

      {/* Image Block */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={imgHero} 
          alt="Illustration"
          className="w-[90%] max-w-md"
        />
      </div>
    </div>
    </section>
    {/* Product was */}
    <section className="relative overflow-hidden bg-white dark:bg-[#1F2E35] font-poppins py-16 px-6">

      <div className="max-w-7xl mx-auto text-center py-16 px-4 md:px-10 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-white">
          Product was Built Specifically for You
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto pt-8">
          {/* Фоновый градиент */}
         
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="1400" 
          height="390" 
          viewBox="0 0 1400 390" 
          fill="none"
          className='absolute left-1/2 -translate-x-1/2 w-[2210px]  h-[310px] lg:top-[160px] md:top-74 bottom-0 rounded-b-[100%] z-0'>
          <path fillRule="evenodd" clipRule="evenodd" d="M692.343 389.723C207.738 390.316 -278.12 116.761 -420.409 29.7302C-433.049 21.999 -427.495 3.44011 -412.678 3.42196L1811.89 0.69739C1826.75 0.679193 1832.32 19.2979 1819.62 27.0143C1675.79 114.426 1184.69 389.12 692.343 389.723Z" fill="url(#paint0_linear_2121_3096)"/>
          <defs>
          <linearGradient id="paint0_linear_2121_3096" x1="1819.9" y1="388.413" x2="1819.44" y2="-0.603958" gradientUnits="userSpaceOnUse">
          <stop stopColor={`#22343D`}/>
          <stop offset="1" stopColor={`#434343`} stopOpacity="0.01"/>
          </linearGradient>
          </defs>
          </svg>
          
          
          

          

          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4 z-10">
              <div className={`${feature.bg} w-12 h-12 flex items-center justify-center rounded-xl text-white text-2xl shadow-md mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white text-zinc-900">{feature.title}</h3>
              <p className="text-sm dark:text-[#e4e4e4] text-zinc-900">{feature.description}</p>
            </div>
          ))}
        </div>

        <Button
          text={'SIGN UP NOW'}
          className="mt-10 bg-[#02897A] hover:opacity-90 relative text-white font-semibold px-6 py-3 rounded-md transition"
        />
      </div>
    </section>
    {/* Mangement */}
    <section className="bg-white dark:bg-[#1F2E35] font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-sm text-[#22343D] dark:text-[#ffffff] mb-2">
            Effortless Validation for
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#173A56] dark:text-white mb-4">
            Management
          </h2>
          <p className="text-[#22343D] dark:text-[#ffffff] mb-6 text-sm leading-relaxed">
            The Myspace page defines the individual, his or her characteristics, traits,
            personal choices and the overall personality of the person.
          </p>
          <p className="text-sm text-[#22343D] dark:text-[#ffffff] mb-2">
            Accessory makers
          </p>
          <p className='text-[#22343D] dark:text-[#ffffff] mb-6 text-sm leading-relaxed'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
          <p className="text-sm text-[#22343D] dark:text-[#ffffff] mb-2">
            Alterationists
          </p>
          <p className='text-[#22343D] dark:text-[#ffffff] mb-6 text-sm leading-relaxed'>If you are looking for a new way to promote your business that won’t cost you more money, </p>
        </div>
        {/* Image */}
        <div className="flex-1">
          <img
            src={Mangement} 
            alt="Search Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
    {/* Customer Support */}
     <section className="bg-white dark:bg-[#1F2E35] font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1">
          <img
            src={Customer} 
            alt="Search Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <p className="text-sm text-[#22343D] dark:text-white mb-2">
            Easier decision making for
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#173A56] dark:text-white mb-4">
            Customer Support
          </h2>
          <p className="text-[#22343D] dark:text-white mb-6 text-sm leading-relaxed">
            The Myspace page defines the individual, his or her characteristics, traits,
            personal choices and the overall personality of the person.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={`${point.color} w-5 h-5 flex justify-center items-center rounded-md flex-shrink-0 mt-1`}>
                  <Done className ='size-4 stroke-white'/>
                </span>
                <p className="text-[#22343D] dark:text-white text-sm">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    {/* Mangement */}
    <section className="bg-white dark:bg-[#1F2E35] font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
      
        <div className="flex-1">
          <p className="text-sm text-[#22343D] dark:text-[#ffffff] mb-2">
            Optimisation for
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#173A56] dark:text-white mb-4">
            Collaborative
          </h2>
          <p className="text-[#22343D] dark:text-[#ffffff] mb-6 text-sm leading-relaxed">
            Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. 
          </p>
          <p className="text-sm text-[#22343D] dark:text-[#ffffff] mb-2">
            Accessory makers
          </p>
          <p className='text-[#22343D] dark:text-[#ffffff] mb-6 text-sm leading-relaxed'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
          <p className="text-sm text-[#22343D] dark:text-[#ffffff] mb-2">
            Alterationists
          </p>
          <p className='text-[#22343D] dark:text-[#ffffff] mb-6 text-sm leading-relaxed'>If you are looking for a new way to promote your business that won’t cost you more money, </p>
        </div>
        {/* Image */}
        <div className="flex-1">
          <img
            src={Collaborative} 
            alt="Search Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
    {/* Quick & Easy Process */}
    <section className="relative bg-white dark:bg-[#1F2E35] font-[Poppins] overflow-hidden pt-24 pb-32">
    {/* SVG фон */}
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="1400" 
    height="377" 
    viewBox="0 0 1400 377" 
    fill="none"
    className='absolute left-1/2 -translate-x-1/2 w-[2210px] h-[310px] top-[180px]  -translate-y-36 z-0'
    >
    <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M707.281 0.785552C1190.08 0.215012 1674.13 262.234 1818.43 347.235C1831.31 354.82 1825.76 373.552 1810.81 373.57L-410.759 376.195C-425.744 376.213 -431.31 357.421 -418.378 349.852C-272.512 264.481 216.763 1.36521 707.281 0.785552Z" fill="url(#paint0_linear_2121_3055)"/>
    <defs xmlns="http://www.w3.org/2000/svg">
    <linearGradient id="paint0_linear_2121_3055" x1="-420.279" y1="2.04929" x2="-419.85" y2="377.453" gradientUnits="userSpaceOnUse">
    <stop stopColor="#22343D"/>
    <stop offset="1" stopColor="#434343" stopOpacity="0.01"/>
    </linearGradient>
    </defs>
    </svg>


  {/* Контент */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-4xl dark:text-white text-zinc-200 font-bold mb-4">Quick & Easy Process</h2>
    <p className="text-[#E4E4E4] max-w-xl mx-auto">
      Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?
    </p>

    {/* Аватарки + сообщения */}
    <div className="flex md:flex-row flex-col gap-8 mt-20 items-center justify-around max-w-2xl mx-auto">
      <div className="flex gap-2 items-center space-y-3">
        <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-16 h-16 rounded-full border-4 border-red-500 object-cover" />
        <div className={`bg-white text-black text-sm font-medium px-4 py-2 rounded-2xl shadow-md relative before:content-[''] before:absolute before:left-4 before:-bottom-2 before:w-3 before:h-3 before:bg-white before:-translate-y-0.5 before:rounded-full
         after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-white after:-translate-y-0.5 after:rounded-full after:-bottom-4 after:left-8 `}>
          I can take care of your pitch
        </div>
      </div>

      <div className="flex gap-2 items-center space-y-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTimDD8OJLP4seNLV5oiyokSBx_k-zDm_VWo8fbPsDsIkSKovf8yPnO4mDU1AX5kdWMBM&usqp=CAU" className="w-16 h-16 rounded-full border-4 border-purple-600 object-cover" />
        <div className={`bg-white text-black text-sm font-medium px-4 py-2 rounded-2xl shadow-md relative 
        before:content-[''] before:absolute before:right-4 before:-bottom-2 before:w-3 before:h-3 before:bg-white before:-translate-y-0.5 before:rounded-full
        after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-white after:-translate-y-0.5 after:rounded-full after:-bottom-4 after:right-8`}>
          I can prototype your app
        </div>
      </div>

    </div>

    <div className="flex  md:flex-row flex-col gap-8 mt-10 justify-around items-center max-w-2xl mx-auto">
      <div className="flex items-center space-y-3 gap-2">
        <div className={`bg-white text-black text-sm font-medium px-4 py-2 rounded-2xl shadow-md relative 
        before:content-[''] before:absolute before:left-4 before:-bottom-2 before:w-3 before:h-3 before:bg-white before:-translate-y-0.5 before:rounded-full
        after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-white after:-translate-y-0.5 after:rounded-full after:-bottom-4 after:left-8`}>
          I can design you website
        </div>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-LiLSy02zQGz0GZvZjRpwlsYfW4ytq2zgxg&s" className="w-16 h-16 rounded-full border-4 border-blue-500 object-cover" />
      </div>

      <div className="flex items-center space-y-3 gap-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXEzh2szRjvCV7mdw9NWCdvoKtebRf_X-mg&s" className="w-16 h-16 rounded-full border-4 border-teal-600 translate-y-1.5 object-cover" />
        <div className={`bg-white text-black text-sm font-medium px-4 py-2 rounded-2xl shadow-md relative 
        before:content-[''] before:absolute before:right-4 before:-bottom-2 before:w-3 before:h-3 before:bg-white before:-translate-y-0.5 before:rounded-full
        after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-white after:-translate-y-0.5 after:rounded-full after:-bottom-4 after:right-8`}>
          I can help marketing strategy
        </div>
      </div>
    </div>

    <Button text={'Contact our expert'}
    className={'mt-12 bg-[#02897A] hover:bg-[#027366] text-white font-semibold shadow-md'}
    />
    </div>

    </section>
    {/* Contents Strategies */}
    <section className="bg-white dark:bg-[#1F2E35] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 max-md:text-center ">Contents Strategies</h1>
      
      <p className="text-md md:text-lg mb-12 max-w-3xl mx-auto max-md:text-center">
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
    {/*Price Table*/}
    <section className="bg-white dark:bg-[#1F2E35] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 max-md:text-center">Price Table</h1>
        <p className="text-md md:text-lg mb-12 max-w-3xl mx-auto max-md:text-center">We offer competitive price</p>

        <div className="md:grid md:grid-cols-3 flex flex-col justify-center items-center gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-lg  max-md:w-72 overflow-hidden shadow-md`}
            >
              <div className={`p-6 text-center bg-white`}
              style={{ backgroundColor: plan.bg }}>
                <h2 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h2>
                <p className={` mb-6  ${plan.highlight ? 'text-white' : 'text-gray-600'}`}>{plan.description}</p>
                
                <div className="flex items-center justify-center mb-6">
                  <span className={`text-6xl font-bold  ${plan.highlight ? 'text-white' : 'text-[#02897A]'} ` }>{plan.price}</span>
                  <span className={` ml-2 flex gap-2 flex-col items-start  ${plan.highlight ? 'text-gray-300' : 'text-[#02897A]'}`}> <sup className='text-xl font-bold'>$</sup><sub>{plan.period}</sub></span>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={` ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{feature}</li>
                  ))}
                </ul>
                <Button 
                text={'Order Now'}
                className={` font-semibold ${plan.highlight ? 'bg-white text-[#02897A]' : 'bg-[#02897A] text-white'}`} />

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/*What Clients Say */}
    <section className="bg-white dark:bg-[#1F2E35] font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">What Clients Say</h1>
          <p className=" text-sm md:text-lg text-white max-w-3xl mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((e, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-500 ml-1">
                  <svg
                  
                    className={`w-5 h-5 text-gray-300 `}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">{testimonial.comment}</p>
              
              <div>
                <h4 className="font-semibold text-[#02897A]">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/*Join 100 Companies */}
    <section className="bg-[#e3e3e3] dark:bg-[#1F2E35] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-4xl mx-auto bg-[#02897A] rounded-2xl px-5 md:pt-0 pt-5 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl lg:text-4xl font-semibold leading-tight mb-4">
              Join 100 Companies who<br />
              boost their business with<br />
              <span className="text-white">Product</span>
            </h2>
            <Button text={'Get This'} className={'bg-white text-[#02897A] font-semibold'}/>
          </div>

          <div>
            <img src={Screen} alt={Collaborative} className='object-contain max-w-72' />
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Products
