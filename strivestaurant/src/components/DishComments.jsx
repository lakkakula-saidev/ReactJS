import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class DishComments extends Component {
  // this.props.dish is the whole object

  render() {
    return (
      <div className={`mt-${this.props.marginTop}`}>
        <h2>Comments for {this.props.dish.name}</h2>
        {this.props.dish ? (
          <ListGroup>
            {this.props.dish.comments.map((c) => (
              <ListGroup.Item key={c.id}>
                "{c.comment}" from {c.author}
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          "No dishes to display"
        )}
      </div>
    );
  }
}

export default DishComments;
