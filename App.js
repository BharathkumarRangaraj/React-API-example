import React from "react";
import ReactDOM from "react-dom";

export default function Form() {
  const [data, setdata] = React.useState({
    email: "",
    password: "",
    confirmpassword: "",
    checkedd: false,
  });
  function handleclick(event) {
    const { name, value, checked, type } = event.target;
    setdata((prevdata) => {
      return {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handlesubmit(event) {
    if (data.password === data.confirmpassword) {
      console.log("successfully logged in");
    } else {
      console.log("wrong password");
      return;
    }
    if (data.checkedd) {
      console.log("suucessfully logged in");
    }
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleclick}
          placeholder="enter your email id"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleclick}
          placeholder="enter your password"
        />
        <br />
        <br />
        <input
          type="password"
          name="confirmpassword"
          value={data.confirmpassword}
          onChange={handleclick}
          placeholder="confirm your password"
        />
        <br />
        <br />

        <input
          type="checkbox"
          name="checkedd"
          onChange={handleclick}
          id="checkedd"
          checked={data.checkedd}
        />
        <label htmlFor="checkedd">I want to join the news letters</label>
        <br />
        <br />
        <button>Sign up</button>
      </form>
    </div>
  );
}
