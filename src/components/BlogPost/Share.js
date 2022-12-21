import React from 'react'
import {
    EmailIcon, FacebookIcon, FacebookMessengerIcon, HatenaIcon, InstapaperIcon, LineIcon, LinkedinIcon, LivejournalIcon, MailruIcon, OKIcon, PinterestIcon, PocketIcon, RedditIcon, TelegramIcon, TumblrIcon, TwitterIcon, ViberIcon, VKIcon, WeiboIcon, WhatsappIcon, WorkplaceIcon
} from "react-share";
import {
    EmailShareButton, FacebookShareButton,FacebookMessengerShareButton, HatenaShareButton, InstapaperShareButton, LineShareButton, LinkedinShareButton, LivejournalShareButton, MailruShareButton, OKShareButton, PinterestShareButton, PocketShareButton, RedditShareButton, TelegramShareButton, TumblrShareButton, TwitterShareButton, ViberShareButton, VKShareButton, WhatsappShareButton, WorkplaceShareButton
} from "react-share";
import {
    FacebookShareCount,
    HatenaShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount
  } from "react-share";

const Share = (props) => {
    const shareUrl=props.shareUrl
    return (
        <div className='share'>
            <div className="Demo__container">
                <div className="Demo__some-network">
                    <FacebookShareButton
                        url={shareUrl}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>

                    <div>
                        <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                            {count => count}
                        </FacebookShareCount>
                    </div>
                </div>

                <div className="Demo__some-network">
                    <FacebookMessengerShareButton
                        url={shareUrl}
                        appId="521270401588372"
                        className="Demo__some-network__share-button"
                    >
                        <FacebookMessengerIcon size={32} round />
                    </FacebookMessengerShareButton>
                </div>

                <div className="Demo__some-network">
                    <TwitterShareButton
                        url={shareUrl}
                        className="Demo__some-network__share-button"
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>

                    <div className="Demo__some-network__share-count">&nbsp;</div>
                </div>

                <div className="Demo__some-network">
                    <TelegramShareButton
                        url={shareUrl}
                        className="Demo__some-network__share-button"
                    >
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>

                    <div className="Demo__some-network__share-count">&nbsp;</div>
                </div>

                <div className="Demo__some-network">
                    <WhatsappShareButton
                        url={shareUrl}
                        separator=":: "
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <div className="Demo__some-network__share-count">&nbsp;</div>
                </div>

                <div className="Demo__some-network">
                    <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>

                <div className="Demo__some-network">
                    <PinterestShareButton
                        url={String(window.location)}
                        className="Demo__some-network__share-button"
                    >
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>

                    <div>
                    </div>
                </div>
                <div className="Demo__some-network">
                    <EmailShareButton
                        url={String(window.location)}
                        className="Demo__some-network__share-button"
                    >
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                </div>
            </div>
        </div>
    )
}

export default Share