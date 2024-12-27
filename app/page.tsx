import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Welcome to the Blog App
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Discover articles, insights, and stories from talented authors.
          </p>
          <div className="mt-6">
            <Link
              href="/blogs"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Explore Blogs
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center sm:text-3xl">
            Why Choose Our Blog App?
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Wide Variety of Blogs</h3>
              <p className="mt-2 text-gray-600">
                Discover blogs across multiple categories, written by passionate authors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">User-Friendly Interface</h3>
              <p className="mt-2 text-gray-600">
                Enjoy an intuitive design that makes exploring blogs a breeze.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Dynamic Community</h3>
              <p className="mt-2 text-gray-600">
                Engage with authors and readers through comments and shares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to Start Your Blogging Journey?
          </h2>
          <p className="mt-4">
            Click below to explore all blogs or create your own content!
          </p>
          <div className="mt-6">
            <Link
              href="/blogs"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              View Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Blog App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default page;
