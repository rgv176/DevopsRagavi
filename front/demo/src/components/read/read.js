import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";

export default function Read() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/read")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  return (
    <div
      style={{
        width: "50%",
        textAlign: "center",
        margin: "10px 10px",
        padding: "50px",
      }}
    >
      <h1>All the users</h1>
      <Button>Back</Button>
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <div
                key={post._id}
                style={{
                  border: "solid lightgray 1px",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  padding: "30px",
                }}
              >
                <h4>{post.firstName}</h4>
                <h4>{post.lastName}</h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button primary>Update</Button>
                  <Button secondary onClick={() => deletePost(post._id)}>
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
