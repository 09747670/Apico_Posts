import React from "react";
import T from "prop-types";

export const PostListItem = ({ id, title, body }) => {
  return (
    <div className="postItem" id={id}>
      <div>{id}</div>
      <hr />
      <div>{title}</div>
      <hr />
      <div>{body}</div>
      <hr />
    </div>
  );
};

PostListItem.propTypes = {
  id: T.number.isRequired,
  title: T.string.isRequired,
  body: T.string.isRequired
};

export default PostListItem;
