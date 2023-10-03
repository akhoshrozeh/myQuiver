import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';
import { Navigate } from 'react-router-dom';



class FSPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: props.postID,
            brand: props.brand, 
            model: props.model, 
            type: props.type,
            length: props.length,
            volume: props.volume,
            price: props.price,
            shouldRoute: false, 
            newRoute: "/fs-board-post?postID=".concat(props.postID)
        };
        this.route = this.route.bind(this)
    }


    async componentDidMount() {
        
    }

    

    route(id) {
        console.log(id)
        window.location.href = '/fs-board-post?postID='.concat(id);
        // this.setState({shouldRoute: true})
    }

    render() {

        return <div>
            <Card onClick={() => this.route(this.state.postID)} className="board-preview">
            {/* {this.state.shouldRoute ?
                <Navigate to={this.state.newRoute} /> :
                null
            } */}
              <Card.Img variant="top" src="/dane1.jpeg" />
              <ListGroup>
                <ListGroup.Item>Brand: {this.state.brand}</ListGroup.Item>
                <ListGroup.Item>Model: {this.state.model}</ListGroup.Item>
                <ListGroup.Item>Type: {this.state.type}</ListGroup.Item>
                <ListGroup.Item>Length: {this.state.length}"</ListGroup.Item>
                <ListGroup.Item>Volume: {this.state.volume} L</ListGroup.Item>
                <ListGroup.Item>Price: ${this.state.price}</ListGroup.Item>
              </ListGroup>
            </Card>
        </div>
    
    }
}

export default FSPreview;