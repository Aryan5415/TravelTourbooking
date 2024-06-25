import React from "react";
import IndexImages from "../assets/images/images";
import { Col, Container, Row } from "react-bootstrap";

function Packages(){
    return(
        <>
        <section className="upcomingpackages">
            <Container>
                <Row className="upper">
                    <Col>
                    <h3><span><img src={IndexImages.Calender}/></span>Date</h3>
                    </Col>
                    <Col>
                    <h3><span><img src={IndexImages.Calender}/></span>price low to High</h3>
                    </Col>
                    <Col>
                    <h3><span><img src={IndexImages.Calender}/></span>Price High to low</h3>
                    </Col>
                    <Col>
                    <h3><span><img src={IndexImages.Calender}/></span>Name (A-z)</h3>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Packages;