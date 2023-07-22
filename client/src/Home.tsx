import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./Navigation";
import { useVacations } from "./useVacations";

export const Home = () => {
  const { vacations } = useVacations();

  return (
    <Container>
      <Navigation />

      <h1 className="fs-2">Available vacations</h1>

      {vacations.map(({ _id, name, description }) => (
        <Card key={_id} className="mt-3">
          <Card.Body>
            <Card.Title className="fs-3">{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
