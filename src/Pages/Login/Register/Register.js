import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { userRegistration, userProfileUpdate, userConfirmationMail } =
    useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleCheck = event => {
    setAccepted(event.target.checked);
  };

  const handelSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);

    userRegistration(email, password)
      .then(result => {
        const user = result.user;
        setError("");
        console.log(user);
        form.reset();
        handelUserProfile(name, photoUrl);
        handelMailVerification();
        toast.success("Please verify your email, spam also");
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  const handelUserProfile = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl,
    };
    userProfileUpdate(profile)
      .then(() => {})
      .catch(error => console.error(error));
  };

  const handelMailVerification = () => {
    userConfirmationMail()
      .then(() => {})
      .catch(error => console.error(error));
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photo" type="text" placeholder="Photo Url" />
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleCheck}
          type="checkbox"
          label={
            <>
              Please accept <Link to="/terms">terms and conditions</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Register;
