import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";
import CommentsList from "./CommentsList";

class CommentForm extends Component {
  state = {
    displayBool: this.props.setValue,
    comments: [],
  };

  handleClose = () => this.setState({ displayBool: !this.state.displayBool });
  /*   handleShow = () => setShow(true); */

  async componentDidMount() {
    let endpoint =
      "https://striveschool-api.herokuapp.com/api/comments/" +
      `${this.props.select.asin}`;
    try {
      let bookComments = await fetch(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTk0N2IxZjBmYjAwMTVkOTE3ODYiLCJpYXQiOjE2MTk3MDQxNDYsImV4cCI6MTYyMDkxMzc0Nn0.kn5IJ6NrB0ParFoZTMbCv9U3bonQxfjR4MZZsjR9KzY",
        },
      });
      this.setState({ comments: await bookComments.json() });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <>
        {/* <Button variant="primary">Launch demo modal</Button> */}

        <Modal show={this.state.displayBool} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="commentDiv mb-4">
              <img
                className="imageComment"
                src={this.props.select.img}
                alt=""
              />
            </div>
            {this.state.comments.length === 0 ? (
              <></>
            ) : (
              <div>
                <CommentsList bookComments={this.state.comments} />
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CommentForm;
