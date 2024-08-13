import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Haider");
  const [name1, setName1] = useState("");

  return (
    <div className="min-h-screen bg-[#222831] p-8">
      <div className="bg-[#393E46] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00ADB5] mb-6 text-center">
          Understanding useState Hook
        </h1>

        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">What is useState?</h2>
          <p className="text-[#EEEEEE] leading-relaxed">
            The <span className="font-semibold text-[#00ADB5]">useState</span> hook is a fundamental part of React that allows you to add state to your functional components. It returns an array with two elements: the current state value and a function to update that state.
          </p>
        </section>

        {/* Syntax Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Syntax</h2>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>{`const [state, setState] = useState(initialState);`}</code>
          </pre>
          <p className="text-[#EEEEEE] mt-4">
            Here, <span className="font-semibold text-[#00ADB5]">state</span> is the current state, and <span className="font-semibold text-[#00ADB5]">setState</span> is the function that updates it. The <span className="font-semibold text-[#00ADB5]">initialState</span> can be any value, such as a string, number, object, or array.
          </p>
        </section>

        {/* Example Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Example</h2>
          <p className="text-[#EEEEEE] text-lg mb-4">
            Let's look at an example where we use the <span className="font-semibold text-[#00ADB5]">useState</span> hook to manage a counter:
          </p>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;`}
            </code>
          </pre>
          <p className="text-[#EEEEEE] mt-4">
            In this example, we initialize the counter state with a value of <span className="font-semibold text-[#00ADB5]">0</span>. Each time the button is clicked, the <span className="font-semibold text-[#00ADB5]">setCount</span> function is called, updating the state and re-rendering the component with the new value.
          </p>
        </section>

        {/* Live Example Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Try It Out</h2>
          <p className="text-[#EEEEEE] text-lg mb-4">
            Below is a live example of the counter using the <span className="font-semibold text-[#00ADB5]">useState</span> hook:
          </p>
          <div className="bg-[#222831] p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl text-[#EEEEEE] mb-4">You clicked {count} times</p>
            <button
              className="bg-[#00ADB5] text-[#222831] px-4 py-2 rounded-lg hover:bg-[#0094A6] transition duration-300"
              onClick={() => setCount(count + 1)}
            >
              Click me
            </button>
          </div>
        </section>

        {/* Another Example of useState Hook */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Example 2</h2>
          <p className="text-[#EEEEEE] text-lg mb-4">
            Let's look at an example where we use the <span className="font-semibold text-[#00ADB5]">useState</span> hook to manage a state change:
          </p>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`import React, { useState } from 'react';

const UseStateHook = () => {
  const [name, setName] = useState("Haider");

  return (
    <section>
      <h2>Try It Out</h2>
      <p>
        Below is a live example of the changing name using the <span>useState</span> hook:
      </p>
      <div>
        <p>Name: {name}</p>
        <button
          onClick={() => setName((prevName) => prevName === 'Haider' ? 'Bader' : 'Haider')}
        >
          Click me
        </button>
      </div>
    </section>
  );
};

export default UseStateHook;`}
            </code>
          </pre>
          <p className="text-[#EEEEEE] mt-4">
            In this example, we initialize the <span className="font-semibold text-[#00ADB5]">name</span> state with a value of <span className="font-semibold text-[#00ADB5]">"Haider"</span>. Each time the button is clicked, the <span className="font-semibold text-[#00ADB5]">setName</span> function is called. This function toggles the state between <span className="font-semibold text-[#00ADB5]">"Haider"</span> and <span className="font-semibold text-[#00ADB5]">"Bader"</span>, causing the component to re-render with the updated name.
          </p>
        </section>

        {/* Live Example Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Try It Out</h2>
          <p className="text-[#EEEEEE] text-lg mb-4">
            Below is a live example of the changing name using the <span className="font-semibold text-[#00ADB5]">useState</span> hook:
          </p>
          <div className="bg-[#222831] p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl text-[#EEEEEE] mb-4">Name: {name}</p>
            <button
              className="bg-[#00ADB5] text-[#222831] px-4 py-2 rounded-lg hover:bg-[#0094A6] transition duration-300"
              onClick={() =>
                setName((prevName) =>
                  prevName === "Haider" ? "Bader" : "Haider"
                )
              }
            >
              Click me
            </button>
          </div>
        </section>

        {/* Key Points Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Key Points to Remember</h2>
          <ul className="list-disc list-inside text-[#EEEEEE] text-lg">
            <li className="mb-2">The <span className="font-semibold text-[#00ADB5]">useState</span> hook is only used in functional components.</li>
            <li className="mb-2">It can accept an initial state value of any data type.</li>
            <li>Every time the state changes, the component re-renders to reflect the new state.</li>
          </ul>
        </section>

        {/* Form Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Form Example</h2>
          <p className="text-[#EEEEEE] text-lg mb-4">
            Below is a live example of using <span className="font-semibold text-[#00ADB5]">useState</span> to manage an input field:
          </p>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`import React, { useState } from 'react';

const FormExample = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="p-2 rounded-md border border-[#00ADB5] bg-[#222831] text-[#EEEEEE] focus:outline-none focus:border-[#00ADB5]"
      />
      <p className="text-[#EEEEEE] mt-4">Input Value: {inputValue}</p>
    </div>
  );
};

export default FormExample;`}
            </code>
          </pre>
          <p className="text-[#EEEEEE] mt-4">
            In this example, we use <span className="font-semibold text-[#00ADB5]">useState</span> to manage the value of an input field. The <span className="font-semibold text-[#00ADB5]">inputValue</span> state is updated as the user types, and the component re-renders to display the current value.
          </p>
        </section>

        {/* Conclusion Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Conclusion</h2>
          <p className="text-[#EEEEEE] leading-relaxed">
            The <span className="font-semibold text-[#00ADB5]">useState</span> hook is a powerful tool for managing state in functional components. Understanding how to use it effectively can greatly enhance your React applications.
          </p>
        </section>
      </div>
    </div>
  );
};

export default UseStateHook;
