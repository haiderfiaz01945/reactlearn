import React, { useState, useEffect } from "react";
import Promise2 from "./Promise2"; 
import Promises3 from "./Promise3";
// Function to simulate an asynchronous operation
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Change to false to simulate an error
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data.");
      }
    }, 2000);
  });
};

function UserDataComponent() {
  const [userData, setUserData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulated API functions that return Promises
    function fetchUserData(userId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = { id: userId, name: `User ${userId}` };
          resolve(data);
        console.log(data)
        }, 1000);
      });
    }

    function fetchUserPosts(userId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const posts = [`Post 1 by User ${userId}`, `Post 2 by User ${userId}`];
          resolve(posts);
        }, 1500);
      });
    }

    function fetchUserComments(userId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const comments = [`Comment 1 by User ${userId}`, `Comment 2 by User ${userId}`];
          resolve(comments);
        }, 2000);
      });
    }

    const userId = 1;

    // Using Promise.all to fetch data concurrently
    Promise
      .all([fetchUserData(userId), fetchUserPosts(userId), fetchUserComments(userId)])
      .then(([userData, postData, commentData]) => {
        setUserData(userData);
        setPostData(postData);
        setCommentData(commentData);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#222831] p-8">
      <div className="bg-[#393E46] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00ADB5] mb-8 text-center">
          Understanding Promises
        </h1>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Introduction
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            In JavaScript, many operations take time to complete, such as making network requests, reading/writing files, or executing time-consuming tasks. These operations are asynchronous, meaning they don’t block the main thread of execution. Without proper handling, they can lead to complex and error-prone code.
          </p>
        </section>

        {/* Callback Hell Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Callback Hell
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            In the early days of JavaScript, callbacks were the primary mechanism for handling asynchronous operations. Callbacks are functions that get executed when an asynchronous task is complete. While callbacks work, they can lead to what’s commonly referred to as “Callback Hell” or “Pyramid of Doom.” This happens when you have multiple nested callbacks, making the code difficult to read, understand, and maintain.
          </p>
        </section>

        {/* Promises as a Solution Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Promises as a Solution
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            Promises were introduced to address the issues associated with callbacks. A Promise is an object that represents the eventual result of an asynchronous operation. It has three states: pending, resolved (fulfilled), and rejected. The core idea is to make asynchronous code look and feel more like synchronous code, making it more readable and maintainable.
          </p>
        </section>

        {/* Promise States Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Promise States
          </h2>
          <ul className="list-disc text-[#EEEEEE] text-lg ml-6">
            <li><strong>Pending:</strong> This is the initial state of a Promise. It represents that the asynchronous operation is ongoing, and the result is not available yet.</li>
            <li><strong>Resolved (Fulfilled):</strong> When the asynchronous operation is successful, a Promise transitions to the resolved state. It contains the result of the operation, such as data fetched from a server.</li>
            <li><strong>Rejected:</strong> If an error occurs during the asynchronous operation, the Promise transitions to the rejected state. It holds an error object that provides details about the failure.</li>
          </ul>
        </section>

        {/* Chaining Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Chaining
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            One of the powerful features of Promises is the ability to chain multiple asynchronous operations together. This allows you to perform a sequence of tasks one after the other, which is often a common use case in JavaScript applications.
          </p>
        </section>

        {/* .then() and .catch() Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            .then() and .catch()
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            Promises are equipped with .then() and .catch() methods. You can attach these methods to a Promise to handle the results when it resolves or to catch errors when it rejects. This approach neatly separates the success and error handling code, improving code organization.
          </p>
        </section>

        {/* Error Handling Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Error Handling
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            Promises have built-in error handling through the .catch() method, which makes it easier to deal with errors in a centralized way. This is a significant improvement over traditional callback-based error handling.
          </p>
        </section>

        {/* Creating Promises Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Creating Promises
          </h2>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous code goes here
  // If the operation succeeds, call resolve with a result
  // If the operation fails, call reject with an error
});
              `}
            </code>
          </pre>
        </section>

        {/* Promise Methods Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Promise Methods
          </h2>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`
Promise.resolve(value): 
// Returns a Promise that is resolved with the given value
const resolvedPromise = Promise.resolve(42);
resolvedPromise.then((result) => console.log(result)); // Output: 42

Promise.reject(reason): 
// Returns a Promise that is rejected with the given reason
const rejectedPromise = Promise.reject("Error occurred");
rejectedPromise.catch((error) => console.log(error)); // Output: Error occurred
              `}
            </code>
          </pre>
        </section>

        {/* Live Example Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Live Example
          </h2>
          <div className={`bg-[#222831] p-6 rounded-lg shadow-md text-center`}>
            <h3 className="text-3xl font-bold text-[#EEEEEE] mb-4">
              {error ? "Error" : "Data"}
            </h3>
            <p className="text-[#EEEEEE] text-lg mb-4">
              {error ? error : userData ? `User: ${userData.name}` : "Loading..."}
            </p>
            <p className="text-[#EEEEEE] text-lg mb-4">
              {postData ? `Posts: ${postData.join(', ')}` : ""}
            </p>
            <p className="text-[#EEEEEE] text-lg mb-4">
              {commentData ? `Comments: ${commentData.join(', ')}` : ""}
            </p>
          </div>
        </section>
      </div>
      <Promise2/>
      <Promises3/>
    </div>
  );
}

export default UserDataComponent;
