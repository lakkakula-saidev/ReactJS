import { Card, Container } from "react-bootstrap";
import React from "react";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  changeColor = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Card className="h-100" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title
            onClick={this.changeColor}
            style={{
              backgroundColor: this.state.selected === true ? "green" : "white",
            }}
          >
            {this.props.book.title}
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
