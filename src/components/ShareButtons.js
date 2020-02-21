import React from 'react'
import PropTypes from 'prop-types';

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

const ShareButtons = ({ twitterHandle, url, title, tags }) => (
  <div>
    <FacebookShareButton url={url}>
      <FacebookIcon />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
      <TwitterIcon />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon />
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon />
    </WhatsappShareButton>
  </div>
)

ShareButtons.propTypes = {
  twitterHandle: PropTypes.any,
  url: PropTypes.any,
  title: PropTypes.any,
  tags: PropTypes.any
}

ShareButtons.defaultProps = {
  twitterHandle: "nishu_2811",
  url: "https://nishantranjan.in",
  title: "Share this Blog",
  tags: ["tech", "blog"]
}


export default ShareButtons