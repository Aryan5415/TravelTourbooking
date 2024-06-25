import React from "react";
import { Carousel } from "react-bootstrap";
import IndexImages from "../../assets/images/images";


const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="content">
            <img src={IndexImages.TestimonialUser} />
          <p>
            Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam
            et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt
            provident quo possimus impedit vel doloremque obcaecati qui ullam
            consectetur et ipsum omnis.
          </p>
          <h3>Christine Beckam - Designer</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="content">
            <img src={IndexImages.TestimonialUser} />
          <p>
            Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam
            et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt
            provident quo possimus impedit vel doloremque obcaecati qui ullam
            consectetur et ipsum omnis. 
          </p>
          <h3>Christine Beckam - Designer</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="content">
            <img src={IndexImages.TestimonialUser} />
          <p>
            Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam
            et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt
            provident quo possimus impedit vel doloremque obcaecati qui ullam
            consectetur et ipsum omnis.
          </p>
          <h3>Christine Beckam - Designer</h3>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
