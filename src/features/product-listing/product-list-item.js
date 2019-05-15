import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
export default function ProductListItem(props) {

    return <div className='product-list-item'>
    <Container>
     <Row>
    <Col sm={4} xs={12} md={4} lg={true}>
        <Card>
            <Card.Img variant="top"
                height={100}
                title={props.product.product_name}
                alt={props.product.product_name}
                src={props.product.product_image}
            />
            <Card.Body>
                <h4>{props.product.product_name}</h4>
                <Card.Title>
                    {props.product.title}
                </Card.Title>
                <Card.Text>
                    {props.product.description}
                </Card.Text>
                {props.product.price}
            </Card.Body>            
        </Card> 
        </Col>
        </Row>
        </Container>       
    </div>

}