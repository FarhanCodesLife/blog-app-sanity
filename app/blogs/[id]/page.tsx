"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface BlogPost {
  _id: string;
  blogtitle: string;
  content: string;
  blogimage: SanityImageSource;
  authorname: string;
  authorimage: SanityImageSource;
  _createdAt: string;
}
const page = () => {
    
  
  const [posts, setPosts] = useState<BlogPost[]>([]);


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
        const singledata = data.filter((item: BlogPost) => item._id === id); 
        setPosts(singledata);
        // console.log(singledata);
        
      })
      .catch(console.error);
  }, [id]);

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
                      <div className="flex items-center gap-4 p-3 bg-gray-50 border-b border-gray-200">
                        <div className='rounded-full '>

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
                      </div>
        
                      {/* Content Section */}
                      <div className="p-6">
                      {post.blogimage && (
                          <div className="rounded-lg overflow-hidden mb-4">
                            <Image
                              width={600}
                              height={300}
                              src={urlFor(post.blogimage).width(1000).url()}
                              alt={post.blogtitle}
                              className="rounded-md w-full h-1/2"
                            />
                          </div>
                        )}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                          {post.blogtitle}
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4 ">
                          {post.content}
                        </p>
                       
                      </div>
        
                      {/* Footer Section */}
                      <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-gray-50">
                        {/* Like, Comment, Share Buttons */}
                        <div className="flex items-center gap-6 text-gray-600">
                          <button className="flex items-center hover:text-blue-500 transition-colors">
                            {/* <span className="material-icons-outlined mr-1">thumb_up</span> */}
                            Like
                          </button>
                          <button className="flex items-center hover:text-green-500 transition-colors">
                            {/* <span className="material-icons-outlined mr-1">comment</span> */}
                            Comment
                          </button>
                          <button className="flex items-center hover:text-red-500 transition-colors">
                            {/* <span className="material-icons-outlined mr-1">share</span> */}
                            Share
                          </button>
                        </div>
        
                        {/* Read More Button */}
                        {/* <a
                          href={`/blogs/${post._id}`}
                          className="text-blue-500 font-semibold hover:underline"
                        >
                          Read More →
                        </a> */}
                      </div>
                    </div>
                  )
                )}
    </div>
    </>
  )
}

export default page