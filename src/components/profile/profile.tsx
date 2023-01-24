import { useEffect } from "react";
import { Hashtags } from "../hashtags";
import { Topbar } from "../topbar";
import { Tweets } from "../tweets";
import { ForYouButton } from "../for-you-button";
import { Button } from "../button";

import "./profile.scss";

import avatar from "./../../icons/avatar.png";
import arrow from "./../../icons/arrow.png";
import location from "./../../icons/location.png";
import calendar from "./../../icons/calendar.png";
export const Profile = () => {
  useEffect(() => {
    document.title = "User (@User) / Twitter";
  }, []);
  return (
    <>
      <Topbar></Topbar>
      <div className="profile">
        <div className="profile__top">
          <div className="profile__top-sticky">
            <div className="profile__top-title-item">
              <img src={arrow} alt="arrow" className="profile__top-arrow"></img>
              <span className="profile__top-title">User</span>
            </div>
            <div className="profile__top-profile-content">
              <div className="profile__top-profile-content-images">
                <img
                  src={avatar}
                  alt="avatar"
                  className="profile__top-profile-content-images-avatar"
                ></img>
                {/* <img
                  src={background}
                  alt="background"
                  className="profile__top-profile-content-images-background"
                ></img> */}
                <div className="profile__top-profile-content-images-background"></div>
              </div>
            </div>

            <div className="profile__top-button-tweets">
              <div className="profile__top-button-edit">
                <Button className="__profile">Edit profile</Button>
              </div>
              <div className="profile__top-profile-content-nickname">
                <span className="profile__top-profile-content-nickname-span">
                  User
                </span>
              </div>
              <div className="profile__top-profile-content-nickname2">
                <span className="profile__top-profile-content-nickname2-span">
                  @User
                </span>
              </div>

              <div className="profile__top-profile-content-descr">
                <span className="profile__top-profile-content-descr-span">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur laoreet mollis finibus. In non odio semper,
                  fermentum ipsum id, euismod tellus.
                </span>
              </div>
              <div className="profile__top-profile-icons-info">
                <div className="profile__top-profile-icons-info-location">
                  <img
                    src={location}
                    alt="location"
                    className="profile__top-profile-icons-info-location-image"
                  ></img>
                  <span className="profile__top-profile-icons-info-location-span">
                    Poland
                  </span>
                </div>
                <div className="profile__top-profile-icons-info-joined">
                  <img
                    src={calendar}
                    alt="calendar"
                    className="profile__top-profile-icons-info-calendar-image"
                  ></img>
                  <span className="profile__top-profile-icons-info-calendar-span">
                    Joined January 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="profile__top-profile-follow-info">
              <div className="profile__top-profile-follow-info-following">
                <span className="profile__top-profile-follow-info-following-number">
                  100
                </span>
                <span className="profile__top-profile-follow-info-following-following">
                  Following
                </span>
              </div>
              <div className="profile__top-profile-follow-info-followers">
                <span className="profile__top-profile-follow-info-followers-number">
                  1000
                </span>
                <span className="profile__top-profile-follow-info-followers-followers">
                  Followers
                </span>
              </div>
            </div>
            <div className="profile__top-profile-button">
              <ForYouButton className="__profile">Tweets</ForYouButton>
              <ForYouButton className="__profile">
                Tweets & replies
              </ForYouButton>
              <ForYouButton className="__profile">Media</ForYouButton>
              <ForYouButton className="__profile">Likes</ForYouButton>
            </div>
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
        </div>
      </div>
      <Hashtags></Hashtags>
    </>
  );
};
