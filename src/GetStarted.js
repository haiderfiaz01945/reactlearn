import React from 'react';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-[#222831] p-8">
      <div className="bg-[#393E46] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00ADB5] mb-8 text-center">
          Getting Started with React
        </h1>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            What is React?
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            React is a JavaScript library for building user interfaces. Developed and maintained by Facebook, it allows developers to create single-page applications with a component-based architecture. React enables efficient updates and rendering of components by leveraging a virtual DOM, leading to a smoother user experience.
          </p>
        </section>

        {/* Why Use React Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Why Use React?
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            React simplifies the development of interactive UIs by breaking down complex interfaces into smaller, reusable components. This component-based approach enhances code maintainability and scalability. React's efficient rendering mechanism and its extensive ecosystem, including libraries like React Router and Redux, make it a powerful choice for modern web development.
          </p>
        </section>

        {/* Props and State Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Understanding Props and State
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            In React, <strong>props</strong> (short for properties) are used to pass data from parent components to child components. They are immutable and allow components to communicate with each other. <strong>State</strong>, on the other hand, is managed within a component and can be changed over time, allowing components to react to user input, server responses, and other events. Together, props and state enable dynamic and interactive user interfaces.
          </p>
        </section>

        {/* React Evolution Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            How React is Evolving
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            React has evolved significantly since its release in 2013. Initially focused on building dynamic user interfaces, React now includes features like Hooks, Context API, and Suspense to simplify state management, side effects, and component composition. The React team continues to enhance the library, integrating new features and improving performance to meet the demands of modern web applications.
          </p>
        </section>

        {/* Conclusion Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Conclusion
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            React offers a powerful framework for building user interfaces with a component-based architecture. Its focus on efficient rendering, combined with features like props and state, makes it a popular choice among developers. As React continues to evolve, it remains at the forefront of modern web development, providing tools and features that streamline the development process and enhance user experiences.
          </p>
        </section>
      </div>
    </div>
  );
};

export default GetStarted;
