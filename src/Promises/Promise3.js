import React, { useEffect, useState } from "react";

const Promises3 = () => {
  const [carts, setCarts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const promise = fetch("https://dummyjson.com/carts?limit=5&skip=10&select=title,price");
   
    console.log(promise);

    setTimeout(() => {
      promise
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error 404");
          }
          return response.json();
        })
        .then((data) => {
          setCarts(data.carts);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, 3000);
  }, []);

  if (loading)
    return <div className="text-center text-[#00ADB5]">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-[#222831] p-8">
      <div className="bg-[#393E46] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* Introduction Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-[#00ADB5] mb-6 text-center">
            Cart List Example API
          </h1>
          <p className="text-[#EEEEEE] text-lg">
            In this example, we are using a Promise-based API to fetch a list of
            carts from a dummy JSON server. The example demonstrates how to
            handle asynchronous operations using Promises, including fetching
            data, handling errors, and updating the UI accordingly.
          </p>
        </section>

        {/* Code Example Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Code Example
          </h2>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`
import React, { useEffect, useState } from "react";

const Promises3 = () => {
  const [carts, setCarts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const promise = fetch('https://dummyjson.com/carts');

    setTimeout(() => {
      promise
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error 404");
          }
          return response.json();
        })
        .then((data) => {
          setCarts(data.carts);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, 3000);
  }, []);

  if (loading) return <div >Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="">
      {/* Content */}
    </div>
  );
};

export default Promises3;
              `}
            </code>
          </pre>
        </section>

        {/* Live Example Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Live Example
          </h2>
          {carts.length === 0 ? (
            <p className="text-center text-[#EEEEEE]">No carts available.</p>
          ) : (
            carts.map((cart) => (
              <div
                key={cart.id}
                className="bg-[#393E46] p-4 mb-4 rounded-md border border-[#00ADB5]"
              >
                <h2 className="text-[#00ADB5] text-xl font-semibold mb-2">
                  Cart ID: {cart.id}
                </h2>
                <p>Total: ${cart.total}</p>
                <p>Discounted Total: ${cart.discountedTotal}</p>
                <p>Total Products: {cart.totalProducts}</p>
                <p>Total Quantity: {cart.totalQuantity}</p>
                <ul className="list-disc list-inside mt-2 ">
                  {cart.products.map((product) => (
                    <li
                      key={product.id}
                      className="bg-[#222831] text-[#EEEEEE] p-2 mb-2 rounded-md border border-[#00ADB5]"
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-16 h-16 object-cover mr-2 inline-block"
                      />
                      <span className="font-semibold ">{product.title}</span> -
                      ${product.price} x {product.quantity} = ${product.total}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </section>

        {/* Conclusion Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">
            Conclusion
          </h2>
          <p className="text-[#EEEEEE] text-lg">
            Promises are a powerful tool for managing asynchronous operations in
            JavaScript. They simplify handling asynchronous code and provide a
            more readable and maintainable approach compared to traditional
            callback-based methods. By using Promises, you can handle multiple
            asynchronous tasks in a cleaner way, deal with errors more
            effectively, and make your code easier to understand and debug.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Promises3;
