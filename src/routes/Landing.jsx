import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Notebook, Menu, X } from "lucide-react";
import TestimonialGrid from "../components/TestimonialGrid";

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
            <h2 className="font-bold text-xl sm:text-2xl mb-4">
              Made by Experts
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              Our programming languages courses are meticulously crafted and
              taught by industry experts who bring years of practical
              experience.
            </p>
            <img
              src="/src/assets/frame.png"
              alt=""
              className="ml-auto mt-4 w-10 h-10"
            />
          </div>

          <div className="bg-gray-200 p-8 rounded-lg w-full sm:w-[350px]">
            <h2 className="font-bold text-xl sm:text-2xl mb-4">
              Career Opportunities
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              Benefit from our job placement assistance services that connect
              qualified learners with relevant career paths.
            </p>
            <img
              src="/src/assets/briefcase.png"
              alt=""
              className="ml-auto mt-4 w-10 h-10"
            />
          </div>

          <div className="bg-gray-200 p-8 rounded-lg w-full sm:w-[350px]">
            <h2 className="font-bold text-xl sm:text-2xl mb-4">
              Collaboration
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              Study at your own pace and on your own schedule, which is ideal
              for those with work, family, or other commitments.
            </p>
            <img
              src="/src/assets/teacher.png"
              alt=""
              className="ml-auto mt-4 w-10 h-10"
            />
          </div>
        </div>

        <hr className="border-[1px] border-gray-500 my-6 mx-auto w-full mt-8" />

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-8 px-4">
          <img
            src="/src/assets/frame1.png"
            alt=""
            className="w-full max-w-md object-contain"
          />

          <div className="w-full max-w-lg text-center md:text-left">
            <h2
              className="font-bold text-2xl sm:text-3xl lg:text-4xl"
              style={{ fontFamily: "DM Sans" }}
            >
              Collaborate & learn with our platform
            </h2>

            <p
              className="font-normal p-4 text-gray-500 text-lg sm:text-xl"
              style={{
                fontFamily: "DM Sans",
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              We offer wide range of language courses taught by experienced and
              qualified instructors who are passionate about teaching and
              dedicated to helping achieve your language goals.
            </p>

            <Link
              className="inline-flex items-center justify-center px-6 py-3 bg-yellow-600 font-medium rounded-lg hover:bg-yellow-500 transition-colors mt-4"
              to="/signup"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8 pt-8 px-4">
          <img
            src="/src/assets/frame2.png"
            alt=""
            className="w-full max-w-md object-contain"
          />

          <div className="w-full max-w-lg text-center md:text-left">
            <h2
              className="font-bold text-2xl sm:text-3xl lg:text-4xl"
              style={{ fontFamily: "DM Sans" }}
            >
              Propel your career & expand knowledge at any level
            </h2>

            <p
              className="font-normal p-4 text-gray-500 text-lg sm:text-xl"
              style={{
                fontFamily: "DM Sans",
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              LearnFlow is an online course class that provides various
              categories of programming courses.
            </p>

            <Link
              className="inline-flex items-center justify-center px-6 py-3 bg-yellow-600 font-medium rounded-lg hover:bg-yellow-500 transition-colors mt-4"
              to="/signup"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-black grid justify-center">
        <h1 className="text-white text-5xl text-center font-semibold p-8">
          Learners like you achieve their <br /> goal through our course
        </h1>
        <p className="text-white text-center text-xl">
          We believe everyone has something to give. Share your skilss & <br />
          experience with students around the world by teaching free or paid.
        </p>

        <TestimonialGrid />
      </section>

      <section className="bg-white py-[100px]">
        <div className="w-[80%] bg-[#dfb84b] rounded-xl px-8 py-12 flex flex-col md:flex-row items-center justify-between overflow-hidden mx-auto">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-black leading-tight">
              Expand your skills & <br /> knowledge at any level.
            </h2>
            <p className="text-lg text-black/80">
              Learn at your own pace with lifetime access on mobile and desktop.
            </p>
            <Link
              className="inline-flex  items-center justify-center px-6 py-3 bg-black text-white   font-medium rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
              to="/signup"
            >
              Get Started
            </Link>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
            <img
              src="/src/assets/dash.png"
              alt="Learning preview"
              className=" rounded-lg shadow-lg transform rotate-[-15deg] scale-105 ml-auto translate-x-32 translate-y-24 "
            />
          </div>
        </div>
      </section>

      <footer className="bg-black p-8 sm:p-16 text-white">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
          {/* Logo & Description */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Notebook className="h-8 w-8 text-white" />
              <span className="text-xl font-semibold">LearnFlow</span>
            </Link>
            <p className="text-gray-300">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap sm:flex-nowrap gap-8 sm:gap-16">
            <div>
              <h3 className="font-bold text-lg mb-2">Links</h3>
              <Link to="/about" className="block hover:underline">
                About
              </Link>
              <Link to="/programs" className="block hover:underline">
                Programs
              </Link>
              <Link to="/contact" className="block hover:underline">
                Contact
              </Link>
              <Link to="/faq" className="block hover:underline">
                FAQs
              </Link>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Social</h3>
              <Link to="/about" className="block hover:underline">
                Twitter
              </Link>
              <Link to="/programs" className="block hover:underline">
                LinkedIn
              </Link>
              <Link to="/contact" className="block hover:underline">
                Facebook
              </Link>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Legal</h3>
              <Link to="/about" className="block hover:underline">
                Terms
              </Link>
              <Link to="/programs" className="block hover:underline">
                Privacy
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-[1px] border-gray-500 my-6 mx-auto w-full mt-8" />

        <div className="flex justify-between">
          <div>
            <p>&copy; 2024 The Programmers University. All rights reserved</p>
          </div>
          <div className="flex gap-8">
            <img src="/src/assets/twitter.png" alt="" />
            <img src="/src/assets/linkedin.png" alt="" />
            <img src="/src/assets/facebook.png" alt="" />
            <img src="/src/assets/github.png" alt="" />
            <img src="/src/assets/web.png" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
export default Landing;
