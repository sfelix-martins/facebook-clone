import React from 'react';

import './styles.css';
import PropTypes from "prop-types";

function Comment({ data }) {
  const { author } = data;

  return (
    <div className="comment-container">
      <div className="avatar">
        <img src={author.avatar} alt={author.name}/>
      </div>
      <div className="comment-content">
        <p><strong>{author.name}</strong> {data.content}</p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    content: PropTypes.string.isRequired,
  }),
};

export default Comment;