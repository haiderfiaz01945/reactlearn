import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

// Custom hook to fetch data
function useFetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(`Error: ${err}`));
  }, [url]);

  return { data };
}

const CustomHook = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  const { data } = useFetchData("https://api.github.com/users");

  return (
    <div className="min-h-screen bg-[#222831] p-8">
      <div className="bg-[#393E46] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00ADB5] mb-8 text-center">
          Understanding Custom Hooks
        </h1>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            What are Custom Hooks?
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            Custom hooks are JavaScript functions whose names start with "use" and can call other hooks. They allow you to reuse stateful logic between components without changing their structure. Custom hooks help in organizing complex logic and making your components more readable.
          </p>
        </section>

        {/* Syntax Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Syntax</h2>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`
function useCustomHook() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Effect logic here
  }, []);

  // Return any values or functions that you want to expose
  return { state, setState };
}
              `}
            </code>
          </pre>
          <p className="text-[#EEEEEE] mt-4">
            In this example, the <span className="font-semibold text-[#00ADB5]">useCustomHook</span> function demonstrates how to create a custom hook. It uses <span className="font-semibold text-[#00ADB5]">useState</span> and <span className="font-semibold text-[#00ADB5]">useEffect</span> to manage and effect logic.
          </p>
        </section>

        {/* Counter Section */}
        <section className="mb-12 bg-[#393E46] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Example 1</h2>
          <p className="text-[#EEEEEE] text-lg mb-4">
            The <span className="font-semibold">useCounter</span> hook is used to manage the counter state. It demonstrates how to use a custom hook to manage state and update it with different actions (increment, decrement, reset).
          </p>

          <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">Step 1: Create the Hook</h3>
          <h4 className="text-lg font-medium mb-2">Create a component named <code>useCounter.js</code> and apply the hook there:</h4>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`
import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

export default useCounter;
              `}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">Step 2: Use the Hook</h3>
          <h4 className="text-lg font-medium mb-2">Apply the custom hook in your component:</h4>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`
import React from "react";
import useCounter from "./useCounter";

const CustomHook = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Counter</h2>
      <div>
        <h3 className="text-xl">Counter: {count}</h3>
      </div>
      <div className="mt-4">
        <button
          className="bg-[#00ADB5] text-[#222831] px-4 py-2 rounded-lg hover:bg-[#0094A6] transition duration-300"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-[#393E46] text-[#EEEEEE] px-4 py-2 rounded-lg hover:bg-[#222831] transition duration-300 ml-2"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="bg-[#00ADB5] text-[#222831] px-4 py-2 rounded-lg hover:bg-[#0094A6] transition duration-300 ml-2"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default CustomHook;
              `}
            </code>
          </pre>
        </section>

        {/* Counter Display Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Try It Out</h2>
          <p className="text-[#EEEEEE] text-lg mb-4">
            Below is a live example of the counter using the <span className="font-semibold">Custom</span> hook:
          </p>
          
          <div className="bg-[#393E46] p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-[#EEEEEE] mb-4">Counter: {count}</h3>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-[#00ADB5] text-[#222831] px-4 py-2 rounded-lg hover:bg-[#0094A6] transition duration-300"
                onClick={increment}
              >
                Increment
              </button>
              <button
                className="bg-[#393E46] text-[#EEEEEE] px-4 py-2 rounded-lg hover:bg-[#222831] transition duration-300"
                onClick={decrement}
              >
                Decrement
              </button>
              <button
                className="bg-[#00ADB5] text-[#222831] px-4 py-2 rounded-lg hover:bg-[#0094A6] transition duration-300"
                onClick={reset}
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* Example 2 Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Example 2</h2>
          <p className="text-[#EEEEEE] text-lg mb-4">
            The <span className="font-semibold">useFetchData</span> hook is used to fetch data from an API. It demonstrates how to use a custom hook to manage the data fetching process and display the results in your component.
          </p>
        </section>

        {/* Code Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Code</h2>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`
import { useState, useEffect } from "react";
import useCounter from "./useCounter"; // Ensure useCounter is imported

// Custom hook to fetch data
function useFetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(\`Error: \${err}\`));
  }, [url]);

  return { data };
}

const CustomHook = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  const { data } = useFetchData("https://api.github.com/users");

  return (
    <div className="min-h-screen bg-[#222831] p-8">
      <div className="bg-[#393E46] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00ADB5] mb-8 text-center">
          Understanding Custom Hooks
        </h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            What are Custom Hooks?
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            Custom hooks are JavaScript functions whose names start with "use" and can call other hooks. They allow you to reuse stateful logic between components without changing their structure. Custom hooks help in organizing complex logic and making your components more readable.
          </p>
        </section>
        
        {/* ...other sections... */}

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Example 2</h2>
          <p className="text-[#EEEEEE] text-lg mb-4">
            The <span className="font-semibold">useFetchData</span> hook is used to fetch data from an API. It demonstrates how to use a custom hook to manage the data fetching process and display the results in your component.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CustomHook;
              `}
            </code>
          </pre>
        </section>
      </div>
    </div>
  );
};

export default CustomHook;
