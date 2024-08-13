import React, { useEffect } from 'react';

function Test1() {

  useEffect(() => {
    console.log('Component Mounted');

    setTimeout(() => {
      console.log('Timeout callback');
    }, 0);

    console.log('End of useEffect');
  }, []);

  useEffect(() => {
    console.log('Promise Example Start');
  
    Promise.resolve().then(() => {
      console.log('Promise resolved');
    });
  
    console.log('Promise Example End');
  }, []);

  useEffect(() => {
    console.log('Fetch Example Start');
  
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => console.log('Fetched data:', data));
  
    console.log('Fetch Example End');
  }, []);

  return (
    <div className="min-h-screen bg-[#222831] p-8">
      <div className="bg-[#393E46] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00ADB5] mb-6">Event Loop Demonstration</h1>
        
        <div className="bg-[#31363F] p-6 rounded-lg shadow-lg my-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">What is the Event Loop?</h2>
          <p className="text-[#EEEEEE] leading-relaxed">
            The event loop is a core concept in JavaScript that allows the language to handle asynchronous operations. It manages the execution of multiple tasks by ensuring that they are processed in the right order, even if they are non-blocking or asynchronous.
          </p>
        </div>

        <div className="bg-[#31363F] p-6 rounded-lg shadow-lg my-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Live Example</h2>
          <p className="text-[#EEEEEE] leading-relaxed">
            Open the console to see the order of execution in the following code.
          </p>
          
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code className="text-[#EEEEEE]">
{`useEffect(() => {
  console.log('Component Mounted');

  setTimeout(() => {
    console.log('Timeout callback');
  }, 0);

  console.log('End of useEffect');
}, []);`}
            </code>
          </pre>
        </div>

        <div className="bg-[#31363F] p-6 rounded-lg shadow-lg my-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Explanation</h2>
          <p className="text-[#EEEEEE] leading-relaxed">
            When the component mounts, the following happens:
          </p>
          <ul className="list-disc pl-5 text-[#EEEEEE] mb-6">
            <li><strong>Component Mounted:</strong> This message is logged immediately.</li>
            <li><strong>setTimeout:</strong> A callback is scheduled to run after 0 milliseconds, but it is placed in the task queue, so it doesn't execute immediately.</li>
            <li><strong>End of useEffect:</strong> This message is logged after the `setTimeout` is scheduled.</li>
            <li><strong>Timeout callback:</strong> After the synchronous code is executed, the event loop picks up the callback from the task queue and logs this message.</li>
          </ul>
          <p className="text-[#EEEEEE]">
            This order demonstrates the asynchronous nature of `setTimeout` and how the event loop handles it.
          </p>
        </div>

        <div className="bg-[#31363F] p-6 rounded-lg shadow-lg my-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Additional Examples</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">Example with Promises</h3>
            <p className="text-[#EEEEEE] mb-4">
              Promises are another way to handle asynchronous operations. Here's how they work within the event loop:
            </p>
            <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
              <code className="text-[#EEEEEE]">
{`useEffect(() => {
  console.log('Promise Example Start');

  Promise.resolve().then(() => {
    console.log('Promise resolved');
  });

  console.log('Promise Example End');
}, []);`}
              </code>
            </pre>
            <p className="text-[#EEEEEE]">
              In this example, "Promise Example Start" is logged first, then "Promise Example End". The promise is resolved asynchronously, so "Promise resolved" is logged last, after the synchronous code.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">Example with Fetch</h3>
            <p className="text-[#EEEEEE] mb-4">
              The `fetch` API is used to make network requests. Here's how it works in the event loop:
            </p>
            <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
              <code className="text-[#EEEEEE]">
{`useEffect(() => {
  console.log('Fetch Example Start');

  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log('Fetched data:', data));

  console.log('Fetch Example End');
}, []);`}
              </code>
            </pre>
            <p className="text-[#EEEEEE]">
              The logs show "Fetch Example Start" and "Fetch Example End" first, with the fetched data being logged last, after the network request completes.
            </p>
          </div>
        </div>

        <div className="bg-[#31363F] p-6 rounded-lg shadow-lg my-8">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Understanding the Event Loop</h2>
          <p className="text-[#EEEEEE] mb-4">
            The event loop continuously monitors the call stack and the task queue. It executes tasks in the call stack first. Once the call stack is clear, it processes the next task in the queue.
          </p>
          <p className="text-[#EEEEEE]">
            This mechanism ensures that asynchronous code (like `setTimeout`, `Promises`, and `fetch`) does not block the execution of synchronous code, allowing JavaScript to handle tasks efficiently and responsively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Test1;
