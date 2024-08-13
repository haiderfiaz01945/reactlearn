import React, { createContext, useContext, useState } from "react";

// Create a Context
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
const useTheme = () => useContext(ThemeContext);

const UseContextHook = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen ${theme === "light" ? "bg-[#222831]" : "bg-[#393E46]"} p-8`}>
        <div className={`bg-[#393E46] ${theme === "light" ? "bg-[#222831]" : "bg-[#00ADB5]"} p-8 rounded-lg shadow-lg max-w-4xl mx-auto`}>
          <h1 className="text-4xl font-bold text-[#00ADB5] mb-8 text-center">
            Understanding the useContext Hook
          </h1>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
              What is `useContext`?
            </h2>
            <p className="text-[#EEEEEE] text-lg">
              The `useContext` hook allows you to access the value of a context directly without having to use a Context Consumer. It is used to manage global state and avoid prop drilling by providing a way to share values between components without passing them through every level of the component tree.
            </p>
          </section>

          {/* Syntax Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Syntax</h2>
            <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
              <code>
                {`
const MyComponent = () => {
  const contextValue = useContext(MyContext);

  return <div>{contextValue}</div>;
};
                `}
              </code>
            </pre>
            <p className="text-[#EEEEEE] mt-4">
              In this example, <span className="font-semibold text-[#00ADB5]">useContext</span> is used to access the value of <span className="font-semibold text-[#00ADB5]">MyContext</span>.
            </p>
          </section>

          {/* Example 1 Section */}
          <section className="mb-12 bg-[#393E46] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Example 1</h2>
            <p className="text-[#EEEEEE] text-lg mb-4">
              This example demonstrates how to use the `useContext` hook to manage theme settings in a React application.
            </p>

            <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">Step 1: Create the Context</h3>
            <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
              <code>
                {`
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
                `}
              </code>
            </pre>

            <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">Step 2: Use the Context</h3>
            <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
              <code>
                {`
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const MyComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "bg-white text-black" : "bg-black text-white"}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeProvider;
                `}
              </code>
            </pre>
          </section>

          {/* Usage Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Usage</h2>
            <p className="text-[#EEEEEE] text-lg mb-4">
              Wrap your components with the <span className="font-semibold text-[#00ADB5]">ThemeProvider</span> to provide context values throughout your component tree. Use the <span className="font-semibold text-[#00ADB5]">useContext</span> hook to access and manipulate these values.
            </p>
            
            <div className={`bg-[#393E46] p-6 rounded-lg shadow-lg text-center`}>
              <h3 className="text-3xl font-bold text-[#EEEEEE] mb-4">Current Theme: {theme}</h3>
              <button
                className="bg-[#00ADB5] text-[#222831] px-4 py-2 rounded-lg hover:bg-[#0094A6] transition duration-300"
                onClick={toggleTheme}
              >
                Toggle Theme
              </button>
            </div>
          </section>
          
          {/* Code Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Code Example</h2>
            <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
              <code>
                {`
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const MyComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "bg-white text-black" : "bg-black text-white"}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export { ThemeProvider, MyComponent };
                `}
              </code>
            </pre>
          </section>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default UseContextHook;
