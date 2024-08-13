import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#222831] min-h-screen text-[#EEEEEE]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#393E46] to-[#222831] text-[#EEEEEE] py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to React Basics</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Dive into the fundamentals of React, from Hooks and Event Handlers to Lifecycle Methods and more. 
          Master the skills to build dynamic and responsive applications.
        </p>
        <Link to="/get-started">
          <button className="bg-[#00ADB5] text-[#222831] font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#009B8E] transition duration-300">
            Get Started
          </button>
        </Link>
      </section>

      {/* Overview of Topics */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-[#00ADB5] mb-8 text-center">
          Topics Covered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Topic 1: Hooks */}
          <Link to={"/usestate"} className="bg-[#393E46] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">Hooks</h3>
            <p>
              Explore how React Hooks can be used to manage state and side effects in functional components.
            </p>
          </Link>

          {/* Topic 2: Event Handlers */}
          <Link to={"/EventLoop"}  className="bg-[#393E46] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">EventLoop Handler</h3>
            <p>
              Learn how to handle user interactions and events efficiently in your React applications.
            </p>
          </Link>

          {/* Topic 3: Lifecycle Methods */}
          <Link to={"/LifecycleMethods"} className="bg-[#393E46] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">Lifecycle Methods</h3>
            <p>
              Understand the lifecycle of React components and how to manage different stages of a component’s existence.
            </p>
          </Link>


           {/* Topic 3: Lifecycle Methods */}
           <Link to={"/LifecycleMethods"} className="bg-[#393E46] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">Promises in React</h3>
            <p>
  Learn how to handle asynchronous operations in React using Promises. This includes fetching data from APIs, managing loading and error states, and improving user experience with proper data handling. Discover best practices for integrating Promises with React's component lifecycle methods and hooks.
</p>

          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#393E46] to-[#222831] text-[#EEEEEE] py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Dive into React?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get started with our comprehensive tutorials and resources. Build your skills and start creating stunning React applications today.
        </p>
        <Link to="/start-learning">
          <button className="bg-[#00ADB5] text-[#222831] font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#009B8E] transition duration-300">
            Start Learning
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
