import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Photo = () => {
  const navigate = useNavigate();

  const sumbitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const requestBody = new FormData(form);

    fetch("/api/photo-process", {
      method: "POST",
      body: requestBody,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request Error");
        return res.json();
      })
      .then((json) => {
        if (!json.success) throw new Error("Request Error");
        navigate("/photo-thankyou");
      })
      .catch((e) => console.log(`An Error occured: ${e.message}`));
  };

  return (
    <Container>
      <Navigation />

      <h1 className="fs-2">Photo</h1>

      <Form className="col-sm-4" onSubmit={sumbitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="photo-description"
            placeholder="Enter description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Choose a file</Form.Label>
          <Form.Control
            type="file"
            name="photo-file"
            required
            accept="image/*"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </Container>
  );
};
