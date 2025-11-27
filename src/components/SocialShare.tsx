"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
} from "react-share";

type Props = {
  slug: string;
  title: string;
};

const DOMAIN = "http://olaalaanu.vercel.app";

export default function SocialShare({ slug, title }: Props) {
  const shareUrl = `${DOMAIN}/blog/${slug}`;

  return (
    <div className="mt-8">
      <p className="text-sm text-gray-500 mb-2">Share this post:</p>
      <div className="flex flex-wrap gap-3">
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <RedditShareButton url={shareUrl} title={title}>
          <RedditIcon size={32} round />
        </RedditShareButton>

        <EmailShareButton url={shareUrl} subject={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  );
}
