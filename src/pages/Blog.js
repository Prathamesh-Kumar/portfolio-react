import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts';

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            <h3>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h3>
            <p><small>Published on {post.date}</small></p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
