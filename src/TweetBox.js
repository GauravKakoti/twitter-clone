import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Gaurav Kakoti',
            username: 'iamGauravKakoti',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
            "https://www.google.com/search?q=avatar+image&sxsrf=ALeKk03uOhvbTGP3JGyTbK6m8XSPDAmVmQ:1605281355199&tbm=isch&source=iu&ictx=1&fir=gnzAlFgJH0wErM%252C8EUQ-n_-BWubKM%252C_&vet=1&usg=AI4_-kSttkJ8p38csbc57CuoUOYWAynUpg&sa=X&ved=2ahUKEwjKtMOH6__sAhXDfX0KHZ8LBmgQ9QF6BAgSEGo#imgrc=gnzAlFgJH0wErM"
        });

        setTweetMessage("");
        setTweetImage("");
    };


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.google.com/search?q=avatar+image&sxsrf=ALeKk03uOhvbTGP3JGyTbK6m8XSPDAmVmQ:1605281355199&tbm=isch&source=iu&ictx=1&fir=gnzAlFgJH0wErM%252C8EUQ-n_-BWubKM%252C_&vet=1&usg=AI4_-kSttkJ8p38csbc57CuoUOYWAynUpg&sa=X&ved=2ahUKEwjKtMOH6__sAhXDfX0KHZ8LBmgQ9QF6BAgSEGo#imgrc=gnzAlFgJH0wErM"></Avatar>
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" type="text" />
                    
                </div>
                <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput" 
                placeholder="Optional: Enter image URL" type="text" 
                />
                
                
                <Button
                onClick={sendTweet}
                type="submit"
                className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox;
