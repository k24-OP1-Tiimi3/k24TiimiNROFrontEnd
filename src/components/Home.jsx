import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dogImage1 from '../assets/img/dog1.jpg';
import dogImage2 from '../assets/img/dog2.jpg';
import dogImage3 from '../assets/img/dog3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <div style={{maxWidth: '530px', margin: 'auto'}}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="dog1"
                            src={dogImage1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Quality Dog Products</h3>
                            <p>Find everything your furry friend needs.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="dog2"
                            src={dogImage2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Comfortable and Stylish</h3>
                            <p>Discover stylish and comfortable gear for your dog.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="dog3"
                            src={dogImage3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Top-Quality Materials</h3>
                            <p>Our products are made with top-quality materials for durability.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div style={{textAlign: 'center', marginTop: '20px'}}>
                    <h2>Welcome to Dog Shop</h2>
                    <p>At Dog Shop, we're dedicated to providing high-quality products for your furry friends. From
                        comfortable beds to stylish apparel, we have everything you need to keep your dog happy and
                        healthy. Browse our collection and treat your pup today!</p>
                </div>
            </div>
        </>
    );
}
