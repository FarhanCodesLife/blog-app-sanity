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
  }, []);

  console.log(posts);

  return (
    <div className="w-full flex justify-start items-center flex-col gap-4 p-3">
      {posts &&
        posts.map(
          (post: {
            _id: string;
            blogtitle: string;
            content: string;
            blogimage: SanityImageSource;
            authorname: string;
            authorimage: SanityImageSource;
          }) => (
            <div key={post._id} className="px-4 py-4 border-2 border-red-400">
               <div className="flex items-center mt-4 border-b-2">
                {post.authorimage && (
                  <Image
                    width={50}
                    height={50}
                    src={urlFor(post.authorimage).width(30).url()}
                    alt={post.authorname}
                    className="rounded-full border-2 overflow-hidden"
                  />
                )}
                <p className="ml-2 text-gray-500 text-2xl"> {post.authorname}</p>
              </div>
              <h2 className="text-4xl font-bold m-2">{post.blogtitle}</h2>
              <p>{post.content}</p>
              {post.blogimage && (
                <Image
                  width={500}
                  height={500}
                  src={urlFor(post.blogimage).width(500).url()}
                  alt={post.blogtitle}
                />
              )}
             
            </div>
          )
        )}
    </div>
  );
};

export default Page;
