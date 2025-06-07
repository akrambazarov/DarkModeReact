import React from 'react'
//Icons
import { Microsoft, Google, Airbnb, FedEx, Link, Cursor, Heart } from '../../Icons'
//Img
import MacBook1 from '../../img/MacbookPro1.png'
import MacBook2 from '../../img/MacbookPro2.png'
import MacBook3 from '../../img/MacbookPro3.png'
import Screen from '../../img/screen.png'
//Components
import Button from '../../components/Button'
//Icons
import Enterprise from '../../Icons/Enterprise'
import Business from '../../Icons/Business'
const categories = [
  {
    title: "Business",
    img: <Business className ='size-10'/>,
    items: ["Enterprise", "Cash Flow", "Site Acquisition", "Find the best business product"]
  },
  {
    title: "Enterprise",
    img: <Enterprise className ='size-10'/>,
    items: ["Asset Backed", "Bridge", "Receivables Finance", "Find the best business product"]
  }
];
const features = [
  {
    icon: <Cursor className="size-5 stroke-white" />,
    bg: '#02897A',
    title: "Special Business",
    description: "Product helps you see how many more days you need to work to reach your financial goal for the month and year."
  },
  {
    icon: <Link className="size-5 stroke-white" />,
    bg: '#4D8DFF',
    title: "Instant Result",
    description: "Product helps you see how many more days you need to work to reach your financial goal for the month and year."
  },
  {
    icon: <Heart className="size-5  fill-white stroke-0" />,
    bg:'#F03E3D',
    title: "Fastest way to organize",
    description: "Product helps you see how many more days you need to work to reach your financial goal for the month and year."
  }
];
const Customer = () => {
  return (
    <>
    {/* Our Clients */}
    <section className="bg-white dark:bg-[#1F2E35] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <h2 className="text-center md:text-4xl text-2xl pb-10 font-bold">Our Clients</h2>
      <div className="md:max-w-2xl max-w-sm mx-auto grid md:gap-12 gap-8 md:grid-cols-4 grid-cols-2 items-center">
      <Airbnb className="w-full h-auto" />
      <Google className="w-full h-auto" />
      <Microsoft className="w-full h-auto" />
      
      
      <FedEx className="w-full h-auto" />
      </div>

    </section>
    {/*Choose Product  */}
    <section className="bg-white dark:bg-[#22343D] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold  mb-4">Why Choose Product?</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border-gray-200 rounded-lg p-8 hover:shadow-2xs shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-3 rounded-xl shadow-md" style={{backgroundColor: feature.bg}}>
                  {feature.icon}
                </div>

                <h2 className="text-xl font-semibold  mb-4">{feature.title}</h2>
                

                <p className="">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/*  STEP 1*/}
    <section className="bg-white dark:bg-[#22343D] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        How Product Work?
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        <div className="w-full lg:w-1/2">
          <img
            src={MacBook1}
            alt="Laptop demo"
            className="w-full max-w-md mx-auto"
          />
        </div>


        <div className="w-full lg:w-1/2 space-y-4">

          <p className="text-sm  uppercase">Step 1</p>
          <h3 className="text-xl font-semibold">Apply for a product</h3>
          <p className="text-sm  leading-relaxed">
            Completing our easy step-by-step application form gives you access to multiple
            business with multiple products. We analyse your business through our
            proprietary credit analysis technology.
          </p>
        </div>
      </div>
    </section>
    {/*  STEP 2*/}
    <section className="bg-white dark:bg-[#22343D] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 space-y-4">
          <p className="text-sm uppercase">Step 2</p>
          <h3 className="text-xl font-semibold">Pay fully refundable</h3>
          <p className="text-sm  leading-relaxed">
            Product will contactting you instantly to receive payment of the Application Fee. if no offer of product is available, your fee will be fully refunded.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
        <img
          src={MacBook2}
          alt="Laptop demo"
          className="w-full max-w-md mx-auto "
        />
      </div>
      </div>

    </section>
    {/*  STEP 3*/}
    <section className="bg-white dark:bg-[#22343D] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <img
            src={MacBook3}
            alt="Laptop demo"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <p className="text-sm uppercase">Step 3</p>
          <h3 className="text-xl font-semibold">Completion</h3>
          <p className="text-sm leading-relaxed">
            Product will continue to liase between borrower and manager to procees and complete a quick and efficient settlement
          </p>
        </div>
      </div>
    </section>
    {/* Join thousand  */}
    <section className="bg-white dark:bg-[#22343D] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-xl mx-auto">
      
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Join thousand of other who have <br /> already received offers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="p-6 rounded-lg flex flex-col justify-center items-center">
              <div className='mb-10 w-20 h-20 rounded-full flex items-center justify-center dark:bg-white bg-[#cffffc]'>
                {category.img}
              </div>
              <h3 className="text-xl font-semibold text-center  mb-4  pb-2">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className=" text-center hover:text-blue-300 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/*Join 100 Companies */}
    <section className="bg-[#f2f0f0] dark:bg-[#1F2E35] dark:text-white text-zinc-900 font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-4xl mx-auto bg-[#02897A] rounded-2xl px-5 md:pt-0 pt-5 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Текстовая часть */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl lg:text-4xl font-semibold leading-tight mb-4">
              Join 100 Companies who<br />
              boost their business with<br />
              <span className="text-white">Product</span>
            </h2>
            <Button text={'Get This'} className={'bg-white text-[#02897A] font-semibold'}/>
          </div>
          
          {/* Кнопка */}
          <div>
            <img src={Screen} alt={Screen} className='object-contain max-w-72' />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Customer