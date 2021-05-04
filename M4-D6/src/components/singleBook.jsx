import { Card } from "react-bootstrap";
import React from "react";

class SingleBook extends React.Component {
  state = {
    comments: [],
  };

  comment = async (asin, book) => {
    let endpoint =
      "https://striveschool-api.herokuapp.com/api/comments/" + `${asin}`;

    try {
      let bookComments = await fetch(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTk0N2IxZjBmYjAwMTVkOTE3ODYiLCJpYXQiOjE2MTk3ODk1ODEsImV4cCI6MTYyMDk5OTE4MX0.q68QrQnbnmVySS6sQu3apy-5aOC-iKTp6V2OqNb_eZQ",
        },
      });
      this.setState({ comments: await bookComments.json() });
    } catch (error) {
      alert(error);
    } finally {
      this.props.onselectedBook(book, this.state.comments);
    }
  };

  render() {
    return (
      <>
        {/* {this.state.selected === true ? (
          <CommentForm
            setValue={this.state.selected}
            comments={this.state.comments}
            bookSelected={this.props.book}
          />
        ) : (
          <></>
        )} */}
        <Card
          className="h-100 mb-4 mx-2 "
          style={{ width: "15rem" }}
          key={this.props.book}
          id={this.props.book}
          onClick={() => this.props.onselectedBook(this.props.book)}
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
