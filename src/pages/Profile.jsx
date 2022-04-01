import React from "react";
import { Button, Card } from "react-bootstrap";

function Profile() {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Welcome to ours profiles page</Card.Header>
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
    </>
  );
}

export default Profile;
