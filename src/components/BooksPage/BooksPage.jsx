import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { sortByGenres, setIsCheck } from '../../redux/books-reducer';


const BooksPage = () => {

    const genres = useSelector(state => state.books.genres)
    const books = useSelector(state => state.books.sortedBooks)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(sortByGenres())
    }, []);


    let onSubmit = (e) => {
        e.preventDefault()
        dispatch(sortByGenres())
    }

    let onChange = genre => {
        dispatch(setIsCheck(genre))
    }

    return (
        <div className="books">
            <Container>
                <Row>
                    <Col xs={4}>
                        <h3>Genres:</h3>
                        <Form onSubmit={(e) => onSubmit(e)} className="books-form">
                            {Array.isArray(genres) ? genres.map((genre, index) => (
                                <div key={index} className="">
                                    <Form.Check type='checkbox' id={index} >
                                        <Form.Check.Input type="checkbox" isValid onChange={() => onChange(genre)} checked={genre.isChecked}/>
                                        <Form.Check.Label>{genre.title}</Form.Check.Label>
                                    </Form.Check>
                                </div>
                            )) : null}
                            <Button type="submit" variant="success">Search</Button>
                        </Form>
                    </Col>
                    <Col xs={8}>
                        <h3 className="books-title">Books:</h3>
                        <Row>
                            {books.map((book, index) => (
                                <Col key={index} xs={3}>
                                    <div  className="books-item">
                                        <img src={book.img} alt="" />
                                        <p>{book.title}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BooksPage;
