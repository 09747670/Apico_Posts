import React from "react";
import T from "prop-types";
import PostListItem from "./PostlistItem";

export const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(
        post =>
          post.id && (
            <PostListItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          )
      )}
    </div>
  );
};

PostList.propTypes = { posts: T.array.isRequired };
