import { Card, Container } from "react-bootstrap";
import React from "react";
import CommentForm from "./commentFrom.jsx";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  comment = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <>
        {this.state.selected === true ? (
          <CommentForm
            setValue={this.state.selected}
            select={this.props.book}
          />
        ) : (
          <></>
        )}
        <Card
          className="h-100 my-4 "
          style={{ width: "18rem" }}
          onClick={this.comment}
        >
          <Card.Img
            className="cardImages"
            variant="top"
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title className="titleWrap">
              {this.props.book.title}
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default SingleBook;
