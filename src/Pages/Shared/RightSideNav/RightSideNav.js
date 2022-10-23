import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { googleSignIn, setUser } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    googleSignIn(googleProvider)
      .then(result => {
        // const user = result.user;
        // console.log(user);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={signInWithGoogle}
          variant="outline-primary"
          className="px-4 mb-2"
        >
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark" className="px-4">
          <FaGithub></FaGithub> Login with GitHub
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-3 border border-1 rounded shadow">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-3 border border-1 rounded shadow">
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-3 border border-1 rounded shadow">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-3 border border-1 rounded shadow">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
