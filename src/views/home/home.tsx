import React, { useEffect } from "react";
import { Topbar } from "../../components/topbar";
import { Tweets } from "../../components/tweets";
import "./home.scss";

import avatar from "./../../icons/avatar.png";
import { Button } from "../../components/button";
import { Hashtags } from "../../components/hashtags";
import { ForYouButton } from "../../components/for-you-button";
export const Home = () => {
  useEffect(() => {
    document.title = "Home / Twitter";
  }, []);
  return (
    <>
      <Topbar></Topbar>
      <div className="home">
        <div className="home__top">
          <div className="home__top-sticky">
            <div className="home__top-title-item">
              <span className="home__top-title">Home</span>
            </div>
            <div className="home__top-button-tweets">
              <ForYouButton className="__home">For you</ForYouButton>
              <ForYouButton className="__home">Following</ForYouButton>
            </div>
          </div>
          <div className="home__top-tweet">
            <img
              src={avatar}
              alt="avatar"
              className="home__top-tweet-image"
            ></img>
            <input
              type="text"
              placeholder="What's happening"
              className="home__top-input"
            ></input>
            <Button className="__home">Tweet</Button>
          </div>
          <Tweets
            tweet={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor turpis, pretium id elementum a, finibus nec mauris. Proin vestibulum ornare mattis. ",
            ]}
            nick={["Lorem Ipsum"]}
          ></Tweets>
          <Tweets
            tweet={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor turpis, pretium id elementum a, finibus nec mauris. Proin vestibulum ornare mattis. ",
            ]}
            nick={["Lorem Ipsum"]}
          ></Tweets>
          <Tweets
            tweet={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor turpis, pretium id elementum a, finibus nec mauris. Proin vestibulum ornare mattis. ",
            ]}
            nick={["Lorem Ipsum"]}
          ></Tweets>
          <Tweets
            tweet={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor turpis, pretium id elementum a, finibus nec mauris. Proin vestibulum ornare mattis. ",
            ]}
            nick={["Lorem Ipsum"]}
          ></Tweets>
          <Tweets
            tweet={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor turpis, pretium id elementum a, finibus nec mauris. Proin vestibulum ornare mattis. ",
            ]}
            nick={["Lorem Ipsum"]}
          ></Tweets>
          <Tweets
            tweet={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor turpis, pretium id elementum a, finibus nec mauris. Proin vestibulum ornare mattis. ",
            ]}
            nick={["Lorem Ipsum"]}
          ></Tweets>
          <Tweets
            tweet={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor turpis, pretium id elementum a, finibus nec mauris. Proin vestibulum ornare mattis. ",
            ]}
            nick={["Lorem Ipsum"]}
          ></Tweets>
        </div>
      </div>
      <Hashtags></Hashtags>
    </>
  );
};
