import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

export default function Create() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(input);
    axios
      .post("http://localhost:3001/create", input)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <div>
            <input
              onChange={handleChange}
              name="firstName"
              value={input.firstName}
              placeholder="First Name"
            />
          </div>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <div>
            <input
              onChange={handleChange}
              name="lastName"
              value={input.lastName}
              placeholder="Last Name"
            />
          </div>
        </Form.Field>
        <Button onClick={handleClick} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
