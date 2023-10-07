import React, { useEffect, useState } from 'react';
import XMLParser from 'react-xml-parser';

const MediumGrid = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://medium.com/feed/@benjamin.mizrany')
      .then(response => response.text())
      .then(str => new XMLParser().parseFromString(str))
      .then(data => {
        const items = data.getElementsByTagName('item').slice(0, 3);
        setPosts(items);
      });
  }, []);

  return (
    <div className="grid">
      {posts.map((post, index) => (
        <div key={index} className="grid-item">
          <img src={post.getElementsByTagName('media:thumbnail')[0]?.attributes.url} alt="Thumbnail" />
          <p>{post.children[4].value}</p>
        </div>
      ))}
    </div>
  );
};

export default MediumGrid;
