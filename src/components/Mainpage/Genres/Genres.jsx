import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { setIsCheck } from '../../../redux/books-reducer';
import { useDispatch } from 'react-redux';

const Genres = () => {


    const dispatch = useDispatch()

    return <div className="genres">
        <Container >
            <div className="genres-title">
                <span >Browse genres </span>
                <a href="#" >(view all)</a>
            </div>

            <div className="genres-content">
                <Row>
                    <Col>
                        <Link to="/books">
                            <div className='genres-item'>
                                <img src="https://storage1.censor.net/images/2/b/d/f/2bdfebfaaa2de5cc6476fce5c0a1efac/original.jpg" alt="" />
                                <div>
                                    <span>Romance</span>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/books">
                            <div onClick={() => dispatch(setIsCheck("Fantasy"))} className='genres-item'>
                                <img src="https://ichef.bbci.co.uk/news/410/cpsprodpb/CDF0/production/_104902725_gettyimages-544452156.jpg" alt="" />
                                <div>
                                    <span>Fantasy</span>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/books">
                            <div  onClick={() => dispatch(setIsCheck("Historical"))} className='genres-item'>
                                <img src="https://www.callcentrehelper.com/images/stories/2006/02/mystery-man-760.jpg" alt="" />
                                <div>
                                    <span>Historical</span>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/books">
                            <div className='genres-item'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-hanVvceadY191uzDEVi4_TW2CVmH5_rzZKw0Fmf8Cp6v_e2G&usqp=CAU" alt="" />
                                <div>
                                    <span>Romance</span>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>

        </Container>
    </div>
};

export default Genres;