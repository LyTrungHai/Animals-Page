import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/LoginAction";
import "./Login.css";

export default function Login() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const init = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "userAccount",
        JSON.stringify({ email: "admin123@gmail.com", password: "admin123" })
      );
    }
  };
  const isValid = () => {
    const { email, password } = JSON.parse(localStorage.getItem("userAccount"));
    if (email !== details.email || password !== details.password) {
      return false;
    }

    return true;
  };

  const submitHandle = (event) => {
    event.preventDefault();
    // console.log(isValid());
    if (isValid()) {
      handleLoginSucces();
      const loginAction = login({ ...details });
      dispatch(loginAction);
    } else {
      setError("Your email or password is invalid");
    }
  };
  const changeHandle = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
    // console.log(name, value);
  };
  const history = useHistory();
  const handleLoginSucces = () => {
    history.push("/home");
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="bodyLogin">
      <form className="box" onSubmit={submitHandle} autoComplete="off">
        <div className="form-inner">
          <h2 className="title">Login</h2>
          {error !== "" ? (
            <div className="error" style={{ color: "red" }}>
              {error}
            </div>
          ) : (
            ""
          )}

          <div className="form-group">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="text"
              name="email"
              id="email"
              // required
              onChange={changeHandle}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="name">Password:</label> */}
            <input
              type="password"
              name="password"
              id="password"
              onChange={changeHandle}
              // required
              placeholder="Password"
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
