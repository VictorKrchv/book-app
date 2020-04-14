import React, { useEffect } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentBook } from '../../redux/books-reducer';




const BookPage = () => {

    let { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(setCurrentBook(id))
    }, []);

    const book = useSelector(state => state.books.currentBook)


    return (
        <div className="book">
            <Container  >
                <Row>
                    <Col xs={3} className="book-col__left">
                        <div className="book-img">
                            <img src={book.img} alt="" />
                        </div>
                        <p><i>Published:</i> {book.published}</p>
                        <p><i>Genres:</i> {book.genres
                        ? book.genres.join(', ').toLowerCase()
                        : null}</p>
                    </Col>
                    <Col xs={6} className="book-col__right">
                        <h2>{book.title}</h2>
                        <p className="book-author">By <span>{book.author}</span></p>
                        <Button variant="success">Free download</Button>
                        <p className="book-description">{book.description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BookPage;
