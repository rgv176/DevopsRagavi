import React, { useEffect } from "react";
import axios from "axios";

export default function Read() {
  useEffect(() => {
    axios
      .get("http://localhost:3001/read")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div>Read</div>;
}
