import { ListGroup } from "react-bootstrap";
import { Component } from "react";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item
          className="list-group-item d-flex justify-content-between align-items-start"
          key={"commentHeading"}
        >
          <div className="ms-2 me-auto">
            <span id="highlight">Comment</span>
          </div>
          <span id="highlight">Rating</span>
        </ListGroup.Item>
        {this.props.bookComments.length === 0 ? (
          <ListGroup.Item>There are comments</ListGroup.Item>
        ) : (
          this.props.bookComments.map((item) => (
            <ListGroup.Item
              className="list-group-item d-flex justify-content-between align-items-start"
              key={item._id}
            >
              <div className="ms-2 me-auto">{item.comment}</div>
              <span className="badge bg-primary rounded-pill">{item.rate}</span>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    );
  }
}

export default CommentsList;
