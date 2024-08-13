import React, { useState, useEffect } from "react";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call with a delay
    let promise = fetch(
      "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
    );

    console.log(promise)
    setTimeout(() => {
      promise
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network respons e was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setProducts(data.products);
          setLoading(false); // Update loading state
        })
        .catch((error) => {
          setError(error.message); // Handle any errors
          setLoading(false); // Update loading state
        });
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#222831] min-h-screen flex items-center justify-center">
        <h1 className="text-[#00ADB5] text-2xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#222831] min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center text-lg">{`Error: ${error}`}</div>
      </div>
    );
  }

  return (
    <div className="bg-[#222831] min-h-screen p-8">
      {/* Introduction Section */}
      <section className="mb-12">
        <div className="bg-[#393E46] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-[#00ADB5] text-4xl font-bold mb-6 text-center">
            Understanding Promises with Fetch API
          </h1>
          <p className="text-[#EEEEEE] text-lg mb-4">
            In this example, we simulate an asynchronous operation to fetch product data from an API. Promises are used to handle the asynchronous nature of the fetch operation. This example demonstrates how to handle loading states, errors, and successful data retrieval.
          </p>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`
const [products, setProducts] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  let promise = fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price");

  setTimeout(() => {
    promise
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, 3000);
}, []);
              `}
            </code>
          </pre>
        </div>
      </section>




      {/* Product List Section */}
      <section>
        <div className="bg-[#393E46] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-[#00ADB5] text-3xl font-bold mb-6 text-center">
            Product List
          </h1>
          <ul className="list-disc list-inside text-[#EEEEEE] ">
            {products.map((product) => (
              <li key={product.id} className="bg-[#222831] text-[#EEEEEE] p-4 mb-2 rounded-md border border-[#00ADB5]">
                {product.title} - ${product.price}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FetchProducts;
