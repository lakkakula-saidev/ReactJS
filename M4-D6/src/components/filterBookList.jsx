import BooksList from "./bookList";
import BOOKS from "../data/fantasy.json";
import React from "react";
import { InputGroup, FormControl, Container, Row, Col } from "react-bootstrap";

class FilterBookList extends React.Component {
  state = {
    query: "",
  };
  /*  searchQuery = (e) => {
    e.target.value;
  }; */

  render() {
    return (
      <div>
        <InputGroup className="mb-3 customInput">
          <FormControl
            onKeyUp={(e) => this.setState({ query: e.target.value })}
            placeholder="Search for book"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <Container className="mt-12 d-flex justify-content-center">
          <BooksList
            books={BOOKS.filter((book) =>
              book.title.toLowerCase().includes(this.state.query)
            )}
          />
        </Container>
      </div>
    );
  }
}

export default FilterBookList;
