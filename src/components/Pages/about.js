import React, { useState, useEffect } from "react";
import axios from "axios";
const About = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      height: "90vh",
    }}
    >
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {/* <h1>About Page</h1> */}
    </div>
  );
};

export default About;
