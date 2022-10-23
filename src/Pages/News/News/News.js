import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const { total_view, title, rating, author, details, image_url, category_id } =
    useLoaderData();
  return (
    <Card style={{ width: "w-100" }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button>All News in This Category ({category_id})</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
