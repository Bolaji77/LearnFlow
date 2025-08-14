import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Notebook, Menu, X } from "lucide-react";

function Landing() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/*Nav menu*/}
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Notebook className="h-8 w-8 text-white" />
                <span className="text-xl font-semibold text-white">
                  LearnFlow
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-white hover:text-yellow-400">
                About
              </Link>
              <Link to="/features" className="text-white hover:text-yellow-400">
                Features
              </Link>
              <Link to="/pricing" className="text-white hover:text-yellow-400">
                Pricing
              </Link>
            </div>

            {/* Call to Action (Desktop) */}
            <div className="hidden md:block">
              <Link
                className="inline-flex items-center justify-center px-6 py-3 text-yellow-500 font-medium rounded-full hover:bg-yellow-900 transition-colors border border-yellow-500"
                to="/signup"
              >
                Let's start your learning journey
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black px-4 pb-4 space-y-4">
            <Link
              to="/about"
              className="block text-white hover:text-yellow-400"
            >
              About
            </Link>
            <Link
              to="/features"
              className="block text-white hover:text-yellow-400"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block text-white hover:text-yellow-400"
            >
              Pricing
            </Link>
            <Link
              className="block w-full text-center px-6 py-3 text-yellow-500 font-medium rounded-full hover:bg-yellow-900 transition-colors border border-yellow-500"
              to="/signup"
            >
              Let's start your learning journey
            </Link>
          </div>
        )}
      </nav>

      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
              The free, fun and effective way to learn a language
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto my-8">
              Learn at your own pace with lifetime access on mobile and desktop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="inline-flex  items-center justify-center px-6 py-3 bg-yellow-600   font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                to="/signup"
              >
                Start a new course
              </Link>
            </div>

            <div className="flex items-center justify-center mx-auto mt-8">
              <img
                src="/src/assets/pic3.png"
                alt=""
                className="h-[50px] w-[50px] rounded-full border-[3px] border-white"
              />
              <img
                src="/src/assets/pic2.jpg"
                alt=""
                className="h-[50px] w-[50px] rounded-full border-[3px] border-white"
              />
              <img
                src="/src/assets/pic1.png"
                alt=""
                className="h-[50px] w-[50px] rounded-full border-[3px] border-white"
              />
            </div>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto my-8">
              Join thousands of students to start coding now!
            </p>

            <div className="flex items-center justify-center mx-auto relative z-index: 0">
              <img
                src="/src/assets/dash.png"
                alt="dashboard-view"
                className="rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-6 md:gap-12 mx-auto w-full bg-gray-300 mt-[-140px] relative p-12">
        <img src="/src/assets/Duo.png" alt="" />
        <img src="/src/assets/Codecov.png" alt="" />
        <img src="/src/assets/UserTesting.png" alt="" />
        <img src="/src/assets/Magic Leap.png" alt="" />
        <img src="/src/assets/Codecov.png" alt="" />
      </div>

        
      <div className="bg-white w-full p-12">
  {/* Main heading */}
  <div className="flex justify-center">
    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
      Special features that make <br /> our online courses the best
    </h1>
  </div>

  {/* Features section */}
  <div className="flex flex-wrap justify-center gap-8 mt-12">
    <div className="bg-gray-200 p-8 rounded-lg w-full sm:w-[350px]">
      <h2 className="font-bold text-xl sm:text-2xl mb-4">Made by Experts</h2>
      <p className="text-lg sm:text-xl leading-relaxed">
        Our programming languages courses are meticulously crafted and taught by
        industry experts who bring years of practical experience.
      </p>
      <img src="/src/assets/frame.png" alt="" className="ml-auto mt-4 w-10 h-10" />
    </div>

    <div className="bg-gray-200 p-8 rounded-lg w-full sm:w-[350px]">
      <h2 className="font-bold text-xl sm:text-2xl mb-4">Career Opportunities</h2>
      <p className="text-lg sm:text-xl leading-relaxed">
        Benefit from our job placement assistance services that connect qualified
        learners with relevant career paths.
      </p>
      <img src="/src/assets/briefcase.png" alt="" className="ml-auto mt-4 w-10 h-10" />
    </div>

    <div className="bg-gray-200 p-8 rounded-lg w-full sm:w-[350px]">
      <h2 className="font-bold text-xl sm:text-2xl mb-4">Collaboration</h2>
      <p className="text-lg sm:text-xl leading-relaxed">
        Study at your own pace and on your own schedule, which is ideal for those
        with work, family, or other commitments.
      </p>
      <img src="/src/assets/teacher.png" alt="" className="ml-auto mt-4 w-10 h-10" />
    </div>
  </div>
</div>


<hr className="border-[1px] border-black my-6 mx-auto w-full" />


    </>
  );
}
export default Landing;
