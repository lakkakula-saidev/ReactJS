import { Component } from "react";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./addComment";

class CommentsNewForm extends Component {
  state = {
    displayBol: true,
    comments: [],
    isLoading: true,
  };

  comment = async () => {
    let endpoint =
      "https://striveschool-api.herokuapp.com/api/comments/" +
      `${this.props.book.asin}`;

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
      this.setState({ isLoading: !this.state.isLoading });
    }
  };

  componentDidMount() {
    this.comment();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.book.asin !== this.props.book.asin) this.comment();
  }
  render() {
    return (
      <>
        {this.props.book && (
          <Card>
            <Card.Header>Book Comments</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <div className="commentDiv mb-4">
                      <img
                        className="imageComment"
                        src={this.props.book.img}
                        alt=""
                      />
                    </div>
                    <div>
                      {this.state.isLoading === true ? (
                        <Spinner animation="border" variant="primary" />
                      ) : (
                        <CommentsList bookComments={this.state.comments} />
                      )}
                    </div>
                    <div>
                      {this.state.displayBol ? (
                        <Button
                          className=""
                          variant="secondary"
                          onClick={() =>
                            this.setState({
                              displayBol: !this.state.displayBol,
                            })
                          }
                        >
                          Add comment
                        </Button>
                      ) : (
                        <AddComment asin={this.props.book.asin} />
                      )}
                    </div>
                  </Form.Group>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </>
    );
  }
}

export default CommentsNewForm;
