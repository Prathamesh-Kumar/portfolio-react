import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/posts';

function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p><small>Published on {post.date}</small></p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export default Post;
