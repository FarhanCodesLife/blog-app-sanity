"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const Page = () => {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageSource) => builder.image(source);

  const [posts, setPosts] = useState([]);

  const query = `*[_type == "blogs"]{
    _id,
    blogtitle,
    content,
    blogimage,
    "authorname": author->name,
    "authorimage": author->image
  }`;


  
  useEffect(() => {

    client
      .fetch(query)
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, [query]);



//   useEffect(() => {
//     const responce = async()=>{
// try{

//   client
//   .fetch(query)
//   .then((data) => {
//     setPosts(data);
//   })
//   .catch(console.error);
// }
// catch{
// console.log("error");

// }
//     }

//     responce()


//   }, []);

  console.log(posts);

  return (
    <div className="w-full flex flex-col gap-6 p-6 bg-gray-100 min-h-screen">
    {posts &&
      posts.map(
        (post: {
          _id: string;
          blogtitle: string;
          content: string;
          blogimage: SanityImageSource;
          authorname: string;
          authorimage: SanityImageSource;
          timestamp: string; // Added timestamp
        }) => (
          <div
            key={post._id}
            className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Header Section */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 border-b border-gray-200">
              {post.authorimage && (
                <Image
                  width={50}
                  height={50}
                  src={urlFor(post.authorimage).width(50).url()}
                  alt={post.authorname}
                  className="rounded-full border border-gray-300"
                />
              )}
              <div>
                <p className="text-gray-800 font-semibold">{post.authorname}</p>
                <p className="text-gray-500 text-sm">{post.timestamp}</p>
              </div>
            </div>
  
            {/* Content Section */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {post.blogtitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                {post.content}
              </p>
              {post.blogimage && (
                <div className="rounded-lg overflow-hidden mb-4">
                  <Image
                    width={700}
                    height={400}
                    src={urlFor(post.blogimage).width(700).url()}
                    alt={post.blogtitle}
                    className="rounded-md"
                  />
                </div>
              )}
            </div>
  
            {/* Footer Section */}
            <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-gray-50">
              {/* Like, Comment, Share Buttons */}
              <div className="flex items-center gap-6">
                <button className="flex items-center text-gray-700 hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 9l-2-2m0 0l-2 2m2-2v6m2 4H6m6 0v4m0-4h4m-4-6h6m-6 0H6"
                    />
                  </svg>
                  Like
                </button>
                <button className="flex items-center text-gray-700 hover:text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h8m-4-4h0v4m4-4H6m4 4v4m-4 0h8"
                    />
                  </svg>
                  Comment
                </button>
                <button className="flex items-center text-gray-700 hover:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12h3m-3-2a3 3 0 000 4h0a3 3 0 004 0h0a3 3 0 000-4h0a3 3 0 00-4 0zM8 12a3 3 0 100 4h0a3 3 0 104 0h0a3 3 0 000-4h0a3 3 0 10-4 0z"
                    />
                  </svg>
                  Share
                </button>
              </div>
  
              {/* Read More Button */}
              <a
                href={`/post/${post._id}`}
                className="text-blue-500 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        )
      )}
  </div>
  
  
  );
};

export default Page;
