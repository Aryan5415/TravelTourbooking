import React from "react";
import IndexImages from "../../assets/images/images";
import Container from "react-bootstrap/Container";

function MainBanner() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `URL(${IndexImages?.aboutImg})` }}
      >
        <Container>
          <h3>Read </h3>
          <h1>About Us</h1>
          <img src={IndexImages.scrollImg} className="scroll"></img>
        </Container>
      </section>
    </>
  );
}

export default MainBanner;
