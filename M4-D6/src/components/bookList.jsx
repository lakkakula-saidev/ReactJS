import SingleBook from "./singleBook";
import { Row, Col } from "react-bootstrap";
import { Component } from "react";
import CommentsNewForm from "./CommentsNewForm";

class BooksList extends Component {
  state = {
    selectedBook: undefined,
  };

  render() {
    return (
      <Row className="d-flex no-gutters my-4 mx-auto">
        <Col className="customColumn" md={{ span: 9 }}>
          <Row>
            {this.props.books.map((currentBook) => (
              <SingleBook
                book={currentBook}
                key={currentBook.title}
                onselectedBook={(book) =>
                  this.setState({
                    selectedBook: currentBook,
                  })
                }
              />
            ))}
          </Row>
        </Col>
        <Col md={{ span: 3 }}>
          {this.state.selectedBook && (
            <CommentsNewForm book={this.state.selectedBook} />
          )}
        </Col>
      </Row>
    );
  }
}

export default BooksList;
