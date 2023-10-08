import React, { useEffect, useState } from 'react';
import XMLParser from 'react-xml-parser';
import {motion} from 'framer-motion'
import Image from 'next/image';


const MediumGrid = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/mediumFeed')
      .then(response => response.text())
      .then(str => new XMLParser().parseFromString(str))
      .then(data => {
        const items = data.getElementsByTagName('item').slice(0, 3);
        const parsedItems = items.map(item => {
          const encodedContent = item.getElementsByTagName('content:encoded')[0].value;
          const doc = new DOMParser().parseFromString(encodedContent, 'text/html');
          const imageNodes = doc.querySelectorAll('img');
          const images = Array.from(imageNodes).map(img => img.src);

            let firstImage = images.length ? images[0] : '';
            let lastImage = images.length ? images[images.length - 1] : '';

          return {
            image: firstImage,
            description: item.children[0].value.replace(">",""),
            link: item.children[1].value,
            imageLast: lastImage,
          };
        });
        setPosts(parsedItems);
      });
  }, []);
  const articles = posts.length ? [posts[0], posts[1], posts[2]] : [];


  return (
    <div className='flex flex-col items-center gap-8 mt-10'>
        <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">Articles</h1>
        <div className="flex gap-8 items-center justify-center"> {articles.map((post, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <a
              href={post.link}
              aria-label={post.description}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-fit h-full rounded-xl shadow-lg grayscale hover:grayscale-0 hover:shadow-xl  hover:translate-y-0.5 hover:scale-105 cursor-pointer mb-10 sm:mb-0 bg-secondary-light duration-500">

                <span className='overflow-hidden w-72 h-72 flex items-center justify-center rounded-md'>
                    <Image
                    src={post.image}
                    className="object-cover min-w-full min-h-full"
                    alt="Thumbnail"
                    width={200}
                    height={200}
                    quality={100}
                    />
                </span>
                <div className="text-center px-4 py-6 w-72 h-32 flex items-center justify-center">
                  <p className="font-general-medium text-md md:text-lg text-ternary-dark dark:text-ternary-light mb-2 break-normal">
                  {post.description}
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

      ))}</div>
     
    </div>
  );
};

export default MediumGrid;
