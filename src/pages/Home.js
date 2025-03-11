import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts';

function Home() {
  // Assuming the first post in the array is the latest.
  const latestPost = posts[0];

  return (
    <div>
      <h2>Welcome!</h2>
      <p>
        Hello, I'm Prathamesh, a Product Manager passionate about creating great products.
        This website showcases my work and shares my insights through blog posts.
      </p>
      {latestPost && (
        <section>
          <h3>Latest Blog Post</h3>
          <article>
            <h4>
              <Link to={`/post/${latestPost.id}`}>{latestPost.title}</Link>
            </h4>
            <p>Published on {latestPost.date}</p>
            <p>{latestPost.excerpt}</p>
          </article>
        </section>
      )}
    </div>
  );
}

export default Home;
