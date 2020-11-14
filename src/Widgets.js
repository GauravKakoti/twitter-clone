import React from 'react'
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className="Widgets">
            <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1250502127757090816"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="IamGauravKakoti"
                    options={{ height: 400 }}
                    />

                    <TwitterShareButton
                    url={"https://www.linkedin.com/in/gaurav-kakoti%C2%AE-8a6223195"}
                    options={{text: "#reactjs is awesome", via: "IamGauravKakoti"}} />

            </div>
        </div>
    )
}

export default Widgets
