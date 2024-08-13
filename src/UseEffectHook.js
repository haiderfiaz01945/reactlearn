import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    console.log("useEffect hook initialized");
    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, [count]); // Runs the effect whenever `count` changes

  return (
    <div className="min-h-screen bg-[#222831] p-8">
      <div className="bg-[#393E46] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00ADB5] mb-8 text-center">
          Understanding useEffect Hook
        </h1>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            What is useEffect?
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            The <span className="font-semibold text-[#00ADB5]">useEffect</span> hook lets you
            perform side effects in functional components. It runs after every
            render by default but can be configured to run only when specific
            dependencies change. In the example below, we use the{" "}
            <span className="font-semibold text-[#00ADB5]">useEffect</span> hook to log a message
            and to set up an interval that updates the state every second.
          </p>
        </section>

        {/* Syntax Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Syntax</h2>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>{`useEffect(() => {
  // Your effect logic here
}, [dependencies]);`}</code>
          </pre>
          <p className="text-[#EEEEEE] mt-4">
            Here, the <span className="font-semibold text-[#00ADB5]">effect</span> function
            contains the side effect logic, and the <span className="font-semibold text-[#00ADB5]">dependencies</span> array determines
            when the effect should run. If the array is empty, the effect runs
            only once after the initial render.
          </p>
        </section>

        {/* Example Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Example</h2>
          <p className="text-[#EEEEEE] text-lg mb-4">
            Let's look at an example where we use the{" "}
            <span className="font-semibold text-[#00ADB5]">useEffect</span> hook to manage an
            interval timer:
          </p>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default Timer;`}
            </code>
          </pre>
          <p className="text-[#EEEEEE] mt-4">
            In this example, we initialize the <span className="font-semibold text-[#00ADB5]">count</span> state and set up an
            interval to increment it every second. The <span className="font-semibold text-[#00ADB5]">useEffect</span> hook also returns a
            cleanup function to clear the interval when the component is
            unmounted.
          </p>
        </section>

        {/* Live Example Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Try It Out
          </h2>
          <p className="text-[#EEEEEE] text-lg mb-4">
            Below is a live example of a counter using the{" "}
            <span className="font-semibold text-[#00ADB5]">useEffect</span> hook:
          </p>
          <div className="bg-[#222831] p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl text-[#EEEEEE] mb-4">Count: {count}</p>
            <button
              className="bg-[#00ADB5] text-[#222831] px-4 py-2 rounded-lg hover:bg-[#0094A6] transition duration-300"
              onClick={() => setCount(count + 1)}
            >
              Increment Count
            </button>
          </div>
        </section>

        {/* Key Points Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Key Points to Remember
          </h2>
          <ul className="list-disc list-inside text-[#EEEEEE] text-lg">
            <li>
              The <span className="font-semibold text-[#00ADB5]">useEffect</span> hook is used to
              perform side effects in functional components.
            </li>
            <li>
              It runs after every render by default, but you can control its
              behavior with dependencies.
            </li>
            <li>
              Always clean up side effects, such as intervals, to prevent memory
              leaks.
            </li>
          </ul>
        </section>

        {/* Conclusion Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Conclusion
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            The <span className="font-semibold text-[#00ADB5]">useEffect</span> hook is essential
            for handling side effects in React functional components. It allows
            you to synchronize your component with external systems, handle async
            operations, and perform cleanup. By mastering{" "}
            <span className="font-semibold text-[#00ADB5]">useEffect</span>, you can build more
            dynamic and efficient React applications.
          </p>
        </section>
      </div>
    </div>
  );
};

export default UseEffectHook;
