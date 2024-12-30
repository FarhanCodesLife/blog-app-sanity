"use client"

import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const page = () => {
    
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

  const { id } = useParams();
//   console.log(id);
  

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        const singledata = data.filter((item: any) => item._id === id); 
        setPosts(singledata);
        // console.log(singledata);
        
      })
      .catch(console.error);
  }, [query]);

console.log(posts);


  return (
    <>
    
    <div>page</div>
    <div>
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
                    <div
                      key={post._id}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                      {/* Header Section */}
                      <div className="flex items-center gap-4 p-6 bg-gray-50 border-b border-gray-200">
                        {post.authorimage && (
                          <Image
                            width={50}
                            height={50}
                            src={urlFor(post.authorimage).url()}
                            alt={post.authorname}
                            className="rounded-full object-cover border border-gray-300"
                          />
                        )}
                        <div>
                          <p className="text-lg font-semibold text-gray-800">
                            {post.authorname}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(post._createdAt).toLocaleDateString()}
                          </p>
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
                        <div className="flex items-center gap-6 text-gray-600">
                          <button className="flex items-center hover:text-blue-500 transition-colors">
                            <span className="material-icons-outlined mr-1">thumb_up</span>
                            Like
                          </button>
                          <button className="flex items-center hover:text-green-500 transition-colors">
                            <span className="material-icons-outlined mr-1">comment</span>
                            Comment
                          </button>
                          <button className="flex items-center hover:text-red-500 transition-colors">
                            <span className="material-icons-outlined mr-1">share</span>
                            Share
                          </button>
                        </div>
        
                        {/* Read More Button */}
                        <a
                          href={`/blogs/${post._id}`}
                          className="text-blue-500 font-semibold hover:underline"
                        >
                          Read More →
                        </a>
                      </div>
                    </div>
                  )
                )}
    </div>
    </>
  )
}

export default page