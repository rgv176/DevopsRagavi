import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
//import axios from "axios";

export default function Create() {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
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
  }
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <div>
            <input
              onChange={handleChange}
              name="fname"
              value={input.fname}
              placeholder="First Name"
            />
          </div>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <div>
            <input
              onChange={handleChange}
              name="lname"
              value={input.lname}
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
