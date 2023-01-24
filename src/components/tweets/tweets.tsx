import { LinkCustom } from "./../link/link";

import avatar from "./../../icons/avatar.png";
import retweet from "./../../icons/retweet.png";
import comment from "./../../icons/comment.png";
import like from "./../../icons/like.png";

import "./tweets.scss";
import { Tweets as twts } from "../../types/tweets";
export const Tweets = (data: twts) => {
  return (
    <>
      <div className="tweets__elements">
        <div className="tweets__elements-image">
          <img
            src={avatar}
            alt="avatar"
            className="tweets__elements-tweet-image"
          ></img>
        </div>
        <div className="tweets__elements-text">
          <div className="tweets__elements-nickname">
            <span className="tweets__elements-nickname-span">{data.nick}</span>
          </div>
          <div className="tweets__elements-tweet">
            <span className="tweets__elements-tweets-span">{data.tweet}</span>
          </div>
        </div>

        <div className="tweets__elements-icons">
          <LinkCustom to="#" src={comment}></LinkCustom>
          <LinkCustom to="#" src={retweet}></LinkCustom>
          <LinkCustom to="#" src={like}></LinkCustom>
        </div>
      </div>
    </>
  );
};
