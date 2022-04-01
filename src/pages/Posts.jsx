import React from "react";
import { Button, Card } from "react-bootstrap";

function Posts() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Welcome to ours posts page</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment!</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default Posts;
