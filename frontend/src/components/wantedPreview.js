// import React from "react";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import '../App.css';
// import { Navigate } from 'react-router-dom';



// class WantedPreview extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             postID: props.postID,
//             brand: props.brand, 
//             model: props.model, 
//             type: props.type,

//             minLength: props.minLength,
//             maxLength: props.maxLength,

//             minVolume: props.minVolume,
//             maxVolume: props.maxVolume,

//             minPrice: props.minPrice,
//             maxPrice: props.maxPrice,
            
//             shouldRoute: false, 
//             newRoute: "/wanted-board-post?postID=".concat(props.postID)
//         };
//         this.route = this.route.bind(this)
//     }


//     async componentDidMount() {
        
//     }

    

//     route(id) {
//         console.log(id)
//         window.location.href = '/wanted-board-post?postID='.concat(id);
//         // this.setState({shouldRoute: true})
//     }

//     render() {

//         return <div>
//             <Card onClick={() => this.route(this.state.postID)} className="board-preview">
//               <Card.Img variant="top" src="/dane1.jpeg" />
//               <ListGroup>
//                 <ListGroup.Item>Type: {this.state.type}</ListGroup.Item>
//                 <ListGroup.Item>Length Range: {this.state.minLength}" - {this.state.maxLength}"</ListGroup.Item>
//                 <ListGroup.Item>Volume: {this.state.minVolume} L - {this.state.maxVolume} L</ListGroup.Item>
//                 <ListGroup.Item>Price Range: ${this.state.minPrice} - ${this.state.maxPrice}</ListGroup.Item>
//               </ListGroup>
//             </Card>
//         </div>
    
//     }
// }

// export default WantedPreview;