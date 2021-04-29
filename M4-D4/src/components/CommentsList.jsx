import { ListGroup } from "react-bootstrap";
import { Component } from "react";

class CommentsList extends Component {
  render() {
    console.log(this.props.bookComments);
    return (
      <ListGroup>
        {this.props.bookComments.map((item) => (
          <ListGroup.Item className="justify-content-between" key={item.id}>
            {item.comment} {item.rate}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CommentsList;

/* {
  this.props.bookComments.map((currentBook) => (
    <SingleBook book={currentBook} key={currentBook.title} />
  ));
} */
