import React, { useState } from "react";
import IndexImages from "../../assets/images/images";
import Container from "react-bootstrap/Container";
import { Carousel } from "react-bootstrap";

function MainBanner(props) {
  const data = props?.pageData;
  return (
    <>
      {data?.pageType != "home" ? (
        <section
          className="hero"
          style={{ backgroundImage: `URL(${data?.image})` }}
        >
          <Container>
            <h3>{data?.subTitle} </h3>
            <h1>{data?.title}</h1>
          </Container>
        </section>
      ) : (
        <section className="homehero">
            <Carousel>
              <Carousel.Item className="cstm-slides"
          style={{ backgroundImage: `URL(${data?.image})` }}>
                      <Container>
                      <div className="content">
                  <h1>No matter where you’re going to, we’ll take you there</h1>
                  <div className="filter"></div>
                  <p>
                    <img src={IndexImages.Herouser}></img>2,500 people booked
                    Tommorowland Event in last 24 hours
                  </p>
                </div>
                      </Container>
                      <img src={IndexImages.scrollImg} className="scroll" alt="ddf"></img>
              </Carousel.Item>
              <Carousel.Item className="cstm-slides"
          style={{ backgroundImage: `URL(${data?.image2})` }}>
                      <Container>
                      <div className="content">
                  <h1>No matter where you’re going to, we’ll take you there</h1>
                  <div className="filter"></div>
                  <p>
                    <img src={IndexImages.Herouser}></img>2,500 people booked
                    Tommorowland Event in last 24 hours
                  </p>
                </div>
                      </Container>
              </Carousel.Item>
              <Carousel.Item className="cstm-slides"
          style={{ backgroundImage: `URL(${data?.image3})` }}>
                      <Container>
                      <div className="content">
                  <h1>No matter where you’re going to, we’ll take you there</h1>
                  <div className="filter"></div>
                  <p>
                    <img src={IndexImages.Herouser}></img>2,500 people booked
                    Tommorowland Event in last 24 hours
                  </p>
                </div>
                      </Container>
              </Carousel.Item>
            </Carousel>
        </section>
      )}
    </>
  );
}

export default MainBanner;
