import React, { useState, useEffect } from 'react';

import './styles.css';
import Post from "../Post";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://avatars1.githubusercontent.com/u/12667754?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/759416?s=460&v=4"
            },
            content: "Não"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Samuel Martins",
          avatar: "https://avatars3.githubusercontent.com/u/22901624?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, o PHP morreu?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/759416?s=460&v=4"
            },
            content: "Sim"
          }
        ]
      },
    ])
  }, []);

  return (
    <div className="post-list">
      {posts.map(post => <Post key={post.id} data={post} />)}
    </div>
  )
}

export default PostList;