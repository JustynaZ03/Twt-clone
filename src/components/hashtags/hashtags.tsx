import "./hashtags.scss";
import { Trending } from "../trending";
export const Hashtags = () => {
  return (
    <>
      <div className="hashtags">
        <div className="hashtags__top">
          <input
            type="search"
            placeholder="Search Twitter"
            className="hashtags__top-search"
          ></input>
        </div>
        <div className="hashtags__bottom">
          <span className="hashtags__bottom-title">Trends for you</span>
          <div className="hashtags__bottom-hashtag-content">
            <div className="hashtags__bottom-hashtag">
              <Trending
                trending={["Trending"]}
                tweet={["#Lorem"]}
                count={["11.3K Tweets"]}
              ></Trending>
              <Trending
                trending={["Trending"]}
                tweet={["#Ipsum"]}
                count={["2.547K Tweets"]}
              ></Trending>
              <Trending
                trending={["Trending in UK"]}
                tweet={["#Dolor"]}
                count={["5K Tweets"]}
              ></Trending>
              <Trending
                trending={["Trending"]}
                tweet={["#Sit"]}
                count={["80.2K Tweets"]}
              ></Trending>
              <Trending
                trending={["Trending"]}
                tweet={["#Amet"]}
                count={["22.2K Tweets"]}
              ></Trending>
              <Trending
                trending={["Trending"]}
                tweet={["#Sit"]}
                count={["2.547K Tweets"]}
              ></Trending>
              <Trending
                trending={["Trending"]}
                tweet={["#Consectetur"]}
                count={["2.547K Tweets"]}
              ></Trending>
              <a href="##" className="hashtags__bottom-hashtag-show">
                Show more
              </a>
            </div>
          </div>
        </div>
        <div className="hashtags__footer">
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            All icons from Icons8
          </a>
        </div>
      </div>
    </>
  );
};
