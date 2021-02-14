import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const SocialFeed = () =>{
    return(
        <div>
            <div className="centerContent">
                <div className="selfCenter standardWidth">
                    <TwitterTimelineEmbed sourceType="list" id={8044403} options={{height: window.innerHeight*0.91}} />
                </div>
            </div>
        </div>
    )
}

export default SocialFeed;