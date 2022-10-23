import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { userSignIn, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  // console.log(location);
  const previousLocation = location.state?.from?.pathname || "/";

  const formSubmitHandler = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError("");
        if (user.emailVerified) {
          navigate(previousLocation, { replace: true });
        } else {
          toast.error("Please verify your email");
        }
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
    form.reset();
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Login;
