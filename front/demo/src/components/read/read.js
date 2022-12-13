import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import {
  Modal,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

export default function Read() {
  const [show, setShow] = useState(false);

  const [updatedPost, setUpdatedPost] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
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

  const updatePost = (post) => {
    setUpdatedPost(post);
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedPost = () => {
    axios
      .put(`/update/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
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
      <Button
        style={{
          width: "100%",
          marginBottom: "1rem",
          background: "black",
          color: "white",
        }}
        onClick={() => history.push("/")}
      >
        Back
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Update an User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="firstName"
                name="firstName"
                value={updatedPost.firstName ? updatedPost.firstName : ""}
                onChange={handleChange}
              />
              <Form.Control
                placeholder="lastName"
                name="lastName"
                value={updatedPost.lastName ? updatedPost.lastName : ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

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
                  <Button primary onClick={() => updatePost(post)}>
                    Update
                  </Button>
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
