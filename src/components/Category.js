import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';




class Category extends Component {

    handlerClick = () => {
        const categoryId = this.props.category;
        console.log(categoryId);
        this.props.getCategory(categoryId);
    }

    render() {
        return (
            <Card style={{ width: '250px' }} className="mx-2">
                <Card.Img variant="top" src={this.props.image} width="250px" height="250px" />
                <Card.Body>
                    <Card.Title>{this.props.category}</Card.Title>
                    <Card.Text style={{fontSize: '15px'}}>
                    {this.props.description}
                    </Card.Text>
                    <Button variant="primary" onClick={this.handlerClick}>Top 5</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Category;