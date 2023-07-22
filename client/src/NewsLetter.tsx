import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Navigation } from "./Navigation";

export const NewsLetter = () => {
  const navigate = useNavigate();

  const sumbitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const userName = form["user-name"].value;
    const userEmail = form["user-email"].value;
    const requestBody = { userName, userEmail };

    fetch("/api/newsletter-process", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request Error");
        return res.json();
      })
      .then((json) => {
        if (!json.success) throw new Error("Request Error");
        navigate("/newsletter-thankyou");
      })
      .catch((e) => console.log(`An Error occured: ${e.message}`));
  };

  return (
    <Container>
      <Navigation />

      <h1 className="fs-2">
        Sign up for our News Letter to receive news and specials!
      </h1>

      <Form className="col-sm-4" onSubmit={sumbitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user-name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="user-email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign-up
        </Button>
      </Form>
    </Container>
  );
};
