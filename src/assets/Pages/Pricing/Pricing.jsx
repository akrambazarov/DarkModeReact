import React, { useState } from 'react'
//Components
import Button from '../../components/Button';
//Img
import ProductUsed from '../../img/ProductUsed.png';
import Screen from '../../img/screen.png'
//Icons
import Pause from '../../Icons/Pause';
import Accounts from '../../Icons/Accounts';
import Accademy from '../../Icons/accademy';
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
const faqs = [
  {
    question: "What are my payment option?",
    answer: "",
    subquestion: {
      text: "How can I invite collaborator to platform?",
      answer: "After creating your account you will have an opportunity to create your first project that will be associated with the collaborators e-mail. An invitation will be sent automatically. Then, invited user will have to confirm his account by e-mail and finish users' onboarding."
    }
  },
  {
    question: "Can I cancel my plan at anytime?",
    answer: "",
    subquestion: {
      text: "How can I Enterpreneur to platform?",
      answer: "Product is a great way to help medium and small enterprise owners achieve their goals."
    }
  },
  {
    question: 'Frequently asked?',
    subquestion: {
      text: "Frequently asked question?",
      answer: "Something is not clear? You need help? Check our FAQ section."
    }
  }
];
const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
    <section className="bg-white dark:bg-[#1F2E35] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className='text-center mb-12 font-semibold'>PRICING</h1>
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">Let’s get some real work done here.</h1>
        <p className="text-md md:text-lg mb-12 mx-auto text-center">Prodict is your perfect solution for working. Get started now for free</p>

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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#22343D] dark:text-white text-[#22343D]">
      <div className="max-w-4xl mx-auto text-center">

        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold  rounded-full">
            ENTERPRISE
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Are you interested in a custom-tailored plan?
        </h2>

 
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Product is a set of advanced features for really large teams with projects.
        </p>
        <Button 
        text={' Get in touch with us'}
        className={'bg-[#02897A] text-white font-medium shadow-2xl'} />
      </div>
    </section>
    {/* Product Used */}
    <section className="bg-white dark:bg-[#1F2E35] dark:text-white font-[Poppins] px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src={ProductUsed}
            alt="Devices"
            width={400}
            height={400}
            className="mx-auto object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 ">
            Product is being used with great effects alongside:
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center dark:bg-white bg-[#e5f5ff] rounded-full">
                <Pause className="text-[#02897A] size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Enterpreneur</h3>
                <p className="text-sm">
                  Product is a great way to help medium and small enterprise owners achieve their goals
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center dark:bg-white bg-[#e5f5ff]  rounded-full">
                <Accounts className="text-[#4D8DFF] size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Accountants</h3>
                <p className="text-sm ">
                  Whether you are working on contract with clients, or on other key accounting documents, Product is for you
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center dark:bg-white bg-[#e5f5ff]  rounded-full">
                <Accademy className="text-[#FF5C5C] size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Universities</h3>
                <p className="text-sm ">
                  Organize university projects and have documents easily graded online with Product
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1F2E35] dark:text-white text-[#22343D]">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold  mb-4">Frequently asked question</h1>
          <p className="text-lg text-gray-200">
            Something is not clear? You need help? Check our FAQ section
          </p>
        </div>


        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-xl font-semibold ">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-[#02897A] transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="mt-4 space-y-4">
                  {faq.subquestion && (
                    <div>
                      <h4 className="font-medium  mb-2">{faq.subquestion.text}</h4>
                      <p className="">{faq.subquestion.answer}</p>
                    </div>
                  )}
                  {faq.answer && <p className="">{faq.answer}</p>}
                </div>
              )}
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

export default Pricing