// import React from "react";
// import MyNav from "./quiverNavBar.js"
// import { Card, ListGroup, Button } from 'react-bootstrap';
// import '../App.css';
// import auth0 from 'auth0-js';
// import { useAuth0 } from "@auth0/auth0-react";
// import { useEffect, useState } from 'react';


// function WantedBoardPost (){
//     const params = new URLSearchParams(window.location.search);
//     const [postID, setPostID] = useState(params.get("postID"));
//     const [endpoint, setEndpoint] = useState("http://localhost:3005/WantedBoards?postID=".concat(params.get("postID")));
//     const [boardPost, setBoardPost] = useState(null);
//     const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();


//     const contactBuyer = () => {

//         if (!isAuthenticated) {
//             alert('Login first!')
//         }
//         else {
//             window.location.href = "http://127.0.0.1:3000/messages"
//         }

      
//     }

//    useEffect(() => {
//        console.log("rendered")
//         try {
//             async function getData() {
//                 const res = await fetch(endpoint)
//                 const post = await res.json()
//                 console.log("POST",post)
//                 setBoardPost(post[0])

//             }

//             getData();
            
         
//         }

//         catch (e) {
//             console.log('error fetching: ', e)
//         }
//     }, [])



//     if (boardPost) {
//         return <div>
//             <MyNav></MyNav>
//             {/* This is a BoardPost page. The postID is {this.state.postID}.  */}
//             <Card className="board-post">
//                 <Card.Img className="board-post-pic" variant="top" src="/dane1.jpeg" />
//                 <ListGroup>
//                     <ListGroup.Item>Brand: {boardPost.brand}</ListGroup.Item>
//                     <ListGroup.Item>Model: {boardPost.model}</ListGroup.Item>
//                     <ListGroup.Item>Type: {boardPost.type}</ListGroup.Item>
//                     <ListGroup.Item>Length: {boardPost.length}"</ListGroup.Item>
//                     <ListGroup.Item>Volume: {boardPost.volume} L</ListGroup.Item>
//                     <ListGroup.Item>Price: ${boardPost.price}</ListGroup.Item>
//                 </ListGroup>
//             </Card>
//             <div className="con-seller-but">
//                 <Button  variant="primary" onClick={contactBuyer}>Contact Buyer</Button>

//             </div>
            
//         </div>
//     }
//     else {
//         return <div>
//             Loading post... Please wait... :D
//         </div>
//     }

// }

// export default WantedBoardPost;