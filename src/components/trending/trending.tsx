import { ContentOfHashtags } from "../../types/hashtags";
import "./trending.scss";
import dots from "./../../icons/dots.png";
export const Trending = (data: ContentOfHashtags) => {
  return (
    <>
      <div className="trending">
        <div className="trending__top-trending">
          <span className="trending__top-trending-span">{data.trending}</span>
          <div className="trending__center-dots">
            <img
              src={dots}
              alt="dots"
              className="trending__center-dots-image"
            ></img>
          </div>
          <div className="trending__center-tweet">
            <span className="trending__center-tweet-span">{data.tweet}</span>
          </div>
          <div className="trending__bottom-count">
            <span className="trending__bottom-count-span">{data.count}</span>
          </div>
        </div>
      </div>
    </>
  );
};
