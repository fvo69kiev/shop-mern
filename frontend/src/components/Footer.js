import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright <i className="far fa-copyright fa-sm"></i> <span style={{letterSpacing: '-.025rem',}}>{new Date().getFullYear()}</span> Women's Handbag
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer