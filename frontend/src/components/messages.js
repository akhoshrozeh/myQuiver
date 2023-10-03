import React, { useState } from "react";
import MyNav from "./quiverNavBar";
import { useAuth0 } from "@auth0/auth0-react";





function Messages() {

    const { isAuthenticated, isLoading } = useAuth0();
    const [userMessages, setUserMessages] = useState([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' }
      ]);

    if (!isLoading) {
        if (isAuthenticated) {
            return <div>
                <MyNav></MyNav>
                <Sidebar userMessages={userMessages}></Sidebar>
            </div>
        }

    
        else {
            return <div>
                <MyNav></MyNav>
                Please login to send, receive, and view messages.
            </div>
        }

    }
    
}

function renderConvo(text) {
    console.log(text);
}

function Sidebar({userMessages}) {
    // fetch all conversations with logged in user from DB
    return (
        <div>
            <ol className="msg-sidebar">
            {userMessages.map(msg => (
                <li  className="msg-sidebar-item" key={msg.id} onClick={() => renderConvo(msg.text)}>{msg.text} </li>
            ))}
            </ol>

        </div>
    );
  }

export default Messages;