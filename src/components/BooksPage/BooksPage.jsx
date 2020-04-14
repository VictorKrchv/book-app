import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { sortByGenres, setIsCheck, clearIsCheck } from '../../redux/books-reducer';
import { Link } from 'react-router-dom';


const BooksPage = () => {

    const genres = useSelector(state => state.books.genres)
    const books = useSelector(state => state.books.sortedBooks)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sortByGenres())

        return function clean() {
            dispatch(clearIsCheck())
        }
    }, []);




    let onSubmit = (e) => {
        e.preventDefault()
        dispatch(sortByGenres())
    }

    let onChange = title => {
        dispatch(setIsCheck(title))
    }

    return (
        <div className="books">
            <Container>
                <Row className="books-row">
                    <Col xs={4} className="books-col__left">

                        <Form onSubmit={(e) => onSubmit(e)} className="books-form">
                            <h3 >Genres:</h3>
                            {Array.isArray(genres) ? genres.map((genre, index) => (
                                <div key={index} className="">
                                    <Form.Check type='checkbox' id={`genre-${index}`}  >
                                        <Form.Check.Input type="checkbox" isValid onChange={() => onChange(genre.title)} checked={genre.isChecked} />
                                        <Form.Check.Label>{genre.title}</Form.Check.Label>
                                    </Form.Check>
                                </div>
                            )) : null}
                            <Button type="submit" variant="success" block>Search</Button>
                        </Form>
                    </Col>
                    <Col xs={8}>
                        <h3 className="books-title">Books:</h3>
                        <Row>
                            {books.length > 0
                                ? books.map((book, index) => (
                                    <Col key={index} xs={3}>
                                        <Link to={`/book/${book.id.toString()}`}>
                                            <div className="books-item">
                                                <img src={book.img} alt="" />
                                                <p>{book.title}</p>
                                            </div>
                                        </Link>
                                    </Col>
                                )) : <Col><p>Список пуст</p></Col>}

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BooksPage;
