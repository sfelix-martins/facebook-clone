import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Comment from "../Comment";

function Post({ data }) {
  const { author, comments } = data;

  return (
    <div className="post-container">
      <div className="post-content">
        <div className="avatar">
          <img src={author.avatar} alt={author.name}/>
          <h2>{author.name}</h2>
          <small>{data.date}</small>
        </div>
        <hr/>
        <div className="text">
          <p>{data.content}</p>
        </div>
      </div>
      <div className="post-comments">
        {comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    </div>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
      content: PropTypes.string.isRequired,
    })),
  }),
};

export default Post;