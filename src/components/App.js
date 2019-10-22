import React, { useState, useEffect } from "react";

import { PostList } from "./PostList";

export const App = () => {
  const [data, setData] = useState([], ({ data }) => {
    setPosts(data.slice(0, 10));
  });

  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
        response
          .json()
          .then(data => ({ data: data }))
          .then(res => {
            setData(res.data);
          })
      );

      setLoaderShow(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setPosts(data.slice(0, 10));
  }, [data]);

  const onAddMore = () => {
    let lim = limit + 10;
    if (lim <= 100) setLimit(lim);
    setPosts(data.slice(0, limit + 10));
  };

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};
