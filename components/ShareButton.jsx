import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon
} from 'react-share';

const ShareButtons = ({ url, title }) => {
  const urlLink = "https://en.sipcalculatorai.com/"

  return (
    <div>
      <h3>Share this content:</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <FacebookShareButton url="https://en.sipcalculatorai.com/" quote={title} hashtag="#example">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url="https://en.sipcalculatorai.com/" title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url="https://en.sipcalculatorai.com/">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <RedditShareButton url="https://en.sipcalculatorai.com/" title={title}>
          <RedditIcon size={32} round />
        </RedditShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
