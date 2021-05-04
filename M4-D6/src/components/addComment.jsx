import { ListGroup, Form, Button } from "react-bootstrap";
import { Component } from "react";

class AddComment extends Component {
  state = {
    opinion: "",
    rating: "",
  };

  submitComment = async (e) => {
    e.preventDefault();

    let finalComment = {
      comment: this.state.opinion,
      rate: this.state.rating,
      elementId: this.props.asin,
    };
    let endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      let response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(finalComment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTk0N2IxZjBmYjAwMTVkOTE3ODYiLCJpYXQiOjE2MTk3ODk1ODEsImV4cCI6MTYyMDk5OTE4MX0.q68QrQnbnmVySS6sQu3apy-5aOC-iKTp6V2OqNb_eZQ",
        },
      });
      if (response.ok) console.log("Item Added");
    } catch (error) {
      alert(error);
    } finally {
      console.log(this.state.comments);
      this.setState({ selected: !this.state.selected });
    }
  };

  render() {
    return (
      <ListGroup className="newComment mt-3">
        <ListGroup.Item
          className="list-group-item d-flex justify-content-between align-items-start"
          key={"commentHeading"}
        >
          <div className="ms-2 me-auto">
            <span id="highlight">Your Comment</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <Form>
            <Form.Group controlId="f-comment">
              <Form.Label>Opinion</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                placeholder="Say something about this book"
                onChange={(e) => this.setState({ opinion: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="f-rate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="range"
                min="0"
                max="5"
                defaultValue="0"
                onChange={(e) => this.setState({ rating: e.target.value })}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={this.submitComment}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default AddComment;
