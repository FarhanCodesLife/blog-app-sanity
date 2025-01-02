import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold sm:text-6xl">
            Welcome to the Blog App
          </h1>
          <p className="mt-6 text-lg sm:text-xl">
            Discover articles, insights, and stories from talented authors.
          </p>
          <div className="mt-8">
            <Link
              href="/blogs"
              className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
            >
              Explore Blogs
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center sm:text-4xl">
            Why Choose Our Blog App?
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold">Wide Variety of Blogs</h3>
              <p className="mt-2 text-gray-600">
                Discover blogs across multiple categories, written by passionate authors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold">User-Friendly Interface</h3>
              <p className="mt-2 text-gray-600">
                Enjoy an intuitive design that makes exploring blogs a breeze.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold">Dynamic Community</h3>
              <p className="mt-2 text-gray-600">
                Engage with authors and readers through comments and shares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Start Your Blogging Journey?
          </h2>
          <p className="mt-6">
            Click below to explore all blogs or create your own content!
          </p>
          <div className="mt-8">
            <Link
              href="/blogs"
              className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
            >
              View Blogs
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default page;
