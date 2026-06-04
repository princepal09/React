import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Our Website
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Build amazing web applications with React and React Router.
          Explore our services, learn about us, and get in touch.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Get Started
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Fast Performance
            </h3>
            <p className="text-gray-600">
              Optimized applications for speed and efficiency.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Responsive Design
            </h3>
            <p className="text-gray-600">
              Looks great on mobile, tablet, and desktop devices.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Modern Technology
            </h3>
            <p className="text-gray-600">
              Built with React, Tailwind CSS, and modern web tools.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;