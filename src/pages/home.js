import { Carousel, Card, Button } from "react-bootstrap";
import React from "react";
import Gallery from "./gallery";

export default class Home extends React.Component{
    render(){
        return(
            <div className="container">
                {/* <div className="alert alert-success">
                    <h1>Ini adalah halaman Home</h1>
                </div> */}
                <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                        alt="First slide"
                        width="100px" height="475px"
                        />
                        <Carousel.Caption>
                        <h3>Sumber Ilmu</h3>
                        <p>Rajin baca buku karena buku adalah sumber ilmu</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://st.depositphotos.com/1006706/2671/i/600/depositphotos_26715369-stock-photo-which-way-to-choose-3d.jpg"
                        alt="Second slide"
                        width="100px" height="475px"
                        />
                        <Carousel.Caption>
                        <h3>Sumber Ilmu</h3>
                        <p>Rajin baca buku karena buku adalah sumber ilmu</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"
                        alt="Third slide"
                        width="100px" height="475px"
                        />
                        <Carousel.Caption>
                        <h3>Sumber Ilmu</h3>
                        <p>Rajin baca buku karena buku adalah sumber ilmu</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.cover} />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        lihat buku di gallery
                        </Card.Text>
                        <Button variant="primary">gallery</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        )
    }
}