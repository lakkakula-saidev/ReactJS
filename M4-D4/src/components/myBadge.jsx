import { Button, Badge, Container } from "react-bootstrap";

const MyBadge = function (props) {
  return (
    <Container>
        <Button variant="danger">
          {props.text} <Badge variant="light" style={{backgroundColor: props.color}}>9</Badge>
          <span className="sr-only">unread messages</span>
        </Button>
    </Container>
  );
};
export default MyBadge;
