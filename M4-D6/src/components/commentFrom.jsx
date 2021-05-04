import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./addComment";

class CommentForm extends Component {
  state = {
    displayBool: this.props.setValue,
    newBool: false,
  };

  handleClose = () => this.setState({ displayBool: !this.state.displayBool });
  /*   handleShow = () => setShow(true); */

  newComment = () => {
    this.setState({ newBool: !this.state.newBool });
    console.log("this is working");
  };

  render() {
    return (
      <>
        {/* <Button variant="primary">Launch demo modal</Button> */}

        <Modal show={this.state.displayBool} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="commentDiv mb-4">
              <img
                className="imageComment"
                src={this.props.bookSelected.img}
                alt=""
              />
            </div>

            <div>
              <CommentsList bookComments={this.props.comments} />
            </div>

            <div>
              {this.state.newBool === false ? (
                <Button
                  className="newComment"
                  variant="secondary"
                  onClick={this.newComment}
                >
                  Add comment
                </Button>
              ) : (
                <AddComment book={this.props.bookSelected} />
              )}
            </div>
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
