"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="max-w-6xl mx-auto sm:px-4 py-8 px-2">
      <header className="fixed top-0 left-0 w-full px-2 sm:px-4 py-2 bg-white z-10 flex justify-between items-center">
        <h1 className="text-2xl sm:text-4xl font-bold font-crimson-text text-[#121212]">
          My Portfolio
        </h1>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="text-md sm:text-lg font-roboto text-[#121212]">
            Home
          </button>
          <button className="text-md sm:text-lg font-roboto text-[#121212]">
            Projects
          </button>
          <button className="text-md sm:text-lg font-roboto text-[#121212]">
            <i className="fa fa-search"></i>
          </button>
          <button className="text-md sm:text-lg font-roboto text-[#121212]">
            <i className="fa fa-bars"></i>
          </button>
          <button className="text-md sm:text-lg font-roboto text-[#121212]">
            <i className="fa fa-globe"></i>
          </button>
        </div>
      </header>
      <div className="pt-20">
        <section className="mb-12 flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <img
              src="path/to/your/image.jpg"
              alt="Portrait of myself"
              className="w-32 sm:w-48 h-32 sm:h-48 rounded-full mx-auto sm:ml-0 sm:mr-4 mb-4"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-bold font-crimson-text text-xl text-[#121212]">
                Your Name
              </h2>
              <a
                href="your_lab_link"
                className="font-roboto text-lg text-[#007bff]"
              >
                Your Lab Name
              </a>
            </div>
            <div className="flex justify-center sm:justify-start mb-4 mt-4">
              <a href="https://twitter.com" className="text-blue-500 mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" className="text-blue-600 mr-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" className="text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="flex-2">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold font-crimson-text text-[#121212] mb-4">
                About Me
              </h2>
              <p className="text-md sm:text-lg font-roboto text-[#343a40]">
                Brief introduction about yourself.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold font-crimson-text text-xl text-[#121212] mb-2">
                  Interests
                </h3>
                <p className="font-roboto text-md sm:text-lg text-[#343a40]">
                  Your interests.
                </p>
              </div>
              <div>
                <h3 className="font-bold font-crimson-text text-xl text-[#121212] mb-2">
                  Education
                </h3>
                <p className="font-roboto text-md sm:text-lg text-[#343a40]">
                  Your educational background.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-crimson-text text-[#121212] mb-4">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col sm:flex-row bg-[#f8f9fa] p-4 sm:p-6 rounded-md">
              <img
                src="path/to/project/image.jpg"
                alt="Project 1"
                className="w-full sm:w-1/2 h-auto sm:mr-4 mb-4 sm:mb-0"
              />
              <div>
                <h3 className="font-bold font-crimson-text text-xl text-[#121212]">
                  Project 1
                </h3>
                <p className="text-md sm:text-lg font-roboto text-[#343a40] mt-2">
                  Description of the project.
                </p>
                <a href="demo/link" className="text-blue-500 mt-2 inline-block">
                  Demo
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-crimson-text text-[#121212] mb-4">
            Experience
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-[#007bff] pl-4">
              <h3 className="font-bold font-crimson-text text-xl text-[#121212]">
                Year - Position
              </h3>
              <p className="text-md sm:text-lg font-roboto text-[#343a40]">
                Company Name - Details of your experience and achievements.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-crimson-text text-[#121212] mb-4">
            Awards and Honors
          </h2>
          <ul className="list-disc pl-5">
            <li className="font-roboto text-md sm:text-lg text-[#343a40]">
              Award 1
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MainComponent;