"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const Blogs = () => {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageSource) => builder.image(source);

   const [posts, setPosts] = useState([]);
  const query = `*[_type == "blogs"]{
    _id,
    blogtitle,
    content,
    blogimage,
    "authorname": author->name,
    "authorimage": author->image,
    _createdAt,
  }`;

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, [query]);

  console.log(posts);

  return (
    <>

<main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">


            <div className="grid gap-8" >

            {posts &&
        posts.map(
          (post: {
            _id: string;
            blogtitle: string;
            content: string;
            blogimage: SanityImageSource;
            authorname: string;
            authorimage: SanityImageSource;
            _createdAt: string;
          }) => (

              <article key={post._id}
              // href={`/blogs/${post._id}`}

              className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden">
                {/* Header Section
              <div className="flex items-center gap-4 p-6 bg-gray-50 border-b border-gray-200">
                <div className="rounded-full">

                {post.authorimage && (
                  <Image
                    width={100}
                    height={100}
                    src={urlFor(post.authorimage).url()}
                    alt={post.authorname}
                    className="rounded-full w-12 h-12 object-cover border border-gray-300"
                    />
                )}
                    </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {post.authorname}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(post._createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div> */}

              {post.blogimage && (
                  <div className="rounded-lg overflow-hidden mb-4">
                    <Image
                      src={urlFor(post.blogimage).width(700).url()}
                      width={700}
                      height={400}
                      alt={post.blogtitle}
                      className="w-full h-64 object-cover"
                    />
                  </div>)
                    }
                {/* <Image src={blog1} alt="Blog post" className="w-full h-64 object-cover" /> */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{post.blogtitle}</h2>
                  <p className="text-gray-600 mb-4"> {post.content.slice(0,150)}...</p>
                   {/* Footer Section */}
              <div className="flex flex-row-reverse justify-between items-center p-4 border-t border-gray-200 bg-gray-50">
                {/* Like, Comment, Share Buttons */}
                {/* <div className="flex items-center gap-6 text-gray-600">
                  <button className="flex items-center hover:text-blue-500 transition-colors">
                    Like
                  </button>
                  <button className="flex items-center hover:text-green-500 transition-colors">
                    Comment
                  </button>
                  <button className="flex items-center hover:text-red-500 transition-colors">
                    Share
                  </button>
                </div> */}
                  <a
                  href={`/blogs/${post._id}`}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Read More →
                </a>
                </div></div>
                
              </article>
)
)}
              {/* Add more blog post cards as needed */}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Categories Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Design</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Marketing</a></li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                
              <li className="flex gap-4">
                  {/* <Image src={blog2} alt="blog image" className="w-16 h-16 object-cover rounded" /> */}
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>

                <li className="flex gap-4">
                  {/* <Image src={blog1} alt="blog image" className="w-16 h-16 object-cover rounded" /> */}
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>


                <li className="flex gap-4">
                  {/* <Image src={blog3} alt="blog image" className="w-16 h-16 object-cover rounded" /> */}
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>


                <li className="flex gap-4">
                  {/* <Image src={blog2} alt="blog image" className="w-16 h-16 object-cover rounded" /> */}
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        
      </main>




   
    </>

  );
};

export default Blogs;
