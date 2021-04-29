import React, { useContext, useRef } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";
import { UserContext } from "../../App";
import Header from "../Header/Header";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const SignUp = () => {
  const { register, errors, handleSubmit, watch } = useForm();
  const { logInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = logInUser;
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    //console.log(data);
    const { email, password } = data;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const newUser = {
          email: user.email,
        };
        setLoggedIn(newUser);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const googleSignUp = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        var user = result.user;
        const newUser = {
          email: user.email,
        };
        setLoggedIn(newUser);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const fbSignUp = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        var user = result.user;
        const newUser = {
          email: user.email,
        };
        setLoggedIn(newUser);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control mt-2"
                  placeholder="Name"
                  ref={register({ required: true })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.name && "*Name is required"}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control mt-2"
                  placeholder="xyz@abc.com"
                  ref={register({
                    required: "*Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Give valid email",
                    },
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="password" className="mt-2">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control mt-2"
                  placeholder="Password"
                  ref={register({
                    required: "*Password is required",
                    pattern: {
                      value: /\d{1}/,
                      message: "*Minimum 1 numeric value should be given",
                    },
                    minLength: {
                      value: 6,
                      message: "*Minimum password length is 6",
                    },
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.password && <p>{errors.password.message}</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="password" className="mt-2">
                  Confirm Password
                </label>
                <input
                  name="confirm_password"
                  type="password"
                  className="form-control mt-2"
                  placeholder="Confirm Password"
                  ref={register({
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
              </div>
              <div style={{ color: "red", fontSize: "15px" }}>
                {errors.confirm_password && (
                  <p>{errors.confirm_password.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Button type="Submit" className="btn btn-success mt-2 w-50">
                Register
              </Button>
            </div>
          </div>
        </form>
        <div className="mt-2">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <Button
              onClick={googleSignUp}
              type="Submit"
              className="btn btn-primary w-100"
            >
              Proceed using Google
            </Button>
          </div>
          <div className="col-md-6">
            <button
              onClick={fbSignUp}
              type="Submit"
              className="btn btn-danger w-100"
            >
              Proceed using Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
